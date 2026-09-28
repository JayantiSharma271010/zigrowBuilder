// Media Gallery New Modal

(function (window, document) {
    "use strict";

    window.Vvveb = window.Vvveb || {};

    class NewMediaModal {
        constructor() {
            this.initialized = false;
            this.modal = null;
            this.selectedNode = null;
            this.currentMediaType = "image";
            this.targetMediaType = "image";
            this.activeSource = "my-media";
            this.pendingSelectedMedia = null;
            this.pendingSettings = {};

            this.adjustDirty = false;
            this.mediaDirty = false;
            this.openSnapshot = null;

            this.mediaItems = [];
            this.mediaLoaded = false;

            this.projectMediaItems = [];
            this.projectMediaLoaded = false;
            this.mediaLoading = false;
            this.mediaError = null;
            this.mediaSearchQuery = "";
            this.mediaTypeFilter = "current";

            this.uploading = false;
            this.uploadProgress = 0;
            this.uploadError = null;
            this.recentUploadLimit = 6;

            this.linkUrl = "";
            this.linkCheckedMedia = null;
            this.linkSaveToMyMedia = true;
            this.linkError = "";

            this.unsplashQuery = "";
            this.unsplashItems = [];
            this.unsplashSelectedMedia = null;
            this.unsplashLoading = false;
            this.unsplashError = "";
            this.unsplashPage = 1;
            this.unsplashPerPage = 8;
            this.unsplashHasMore = false;
            this.unsplashCategorySuggestions = [];

            // GIPHY
this.giphyQuery = "";
this.giphyItems = [];
this.giphySelectedMedia = null;
this.giphyLoading = false;
this.giphyError = "";
this.giphyPage = 1;
this.giphyPerPage = 12;
this.giphyHasMore = false;
this.giphyMode = "trending";

this.giphyConfig = null;
this.giphyConfigPromise = null;

this.giphyTotalCount = null;
/*
 * GIPHY analytics
 */
this.giphyCustomerId = "";
this.giphyCustomerIdPromise = null;

this.giphyViewedIds = new Set();
this.giphyViewObserver = null;

            this.aiItems = [];
            this.aiSelectedMedia = null;
            this.aiLoaded = false;
            this.aiLoading = false;
            this.aiError = "";
            this.aiSearchQuery = "";
            this.aiCategoryFilter = "all";

            this.adjustSettings = {
                imageAlt: "",
                imageLoading: "lazy",
                imageLinkUrl: "",
                imageLinkNewTab: false,

                videoAutoplay: false,
                videoControls: true,
                videoLoop: false,
                videoMuted: false,
                videoPoster: "",

                gifMode: "autoplay",
            };

            // Pagination state for media library, Unsplash, and AI Library
            this.aiPage = 1;
            this.aiPerPage = 8;
            this.mediaPage = 1;
            this.mediaPerPage = 8;

            // Configuration for pagination per media type
            this.perPageConfig = {
                replaceMedia: {
                    myMedia: 12,
                    unsplash: 12,
                    aiLibrary: 12,
                },
                backgroundImage: {
                    myMedia: 12,
                    unsplash: 12,
                    aiLibrary: 12,
                },
            };

            // tab state for My Media
            this.mediaLibraryTab = "recent";
            this.recentMediaItems = this.loadLocalMediaList(
                "zigrow_recent_media",
            );
            this.favoriteMediaItems = this.loadLocalMediaList(
                "zigrow_favorite_media",
            );

            this.mediaActionItem = null;
            this.mediaActionMenu = null;

            this.mode = "replace-media";
            this.onApply = null;

            this.selectors = {
                modal: "#new-media-modal",
                close: "[data-nmm-close]",
                cancel: "[data-nmm-cancel]",
                apply: "[data-nmm-apply]",
                mediaType: "[data-nmm-media-type]",
                source: "[data-nmm-source]",
                sourcePanel: "[data-nmm-source-panel]",
                adjustToggle: "[data-nmm-adjust-toggle]",
                adjustBody: "[data-nmm-adjust-body]",
                currentPreview: "[data-nmm-current-preview]",
                currentType: "[data-nmm-current-type]",
                currentDimension: "[data-nmm-current-dimension]",
                currentSource: "[data-nmm-current-source]",
            };
        }

        init() {
            if (this.initialized) return;

            this.addModalHtml();
            this.modal = document.querySelector(this.selectors.modal);
            this.bindEvents();
            this.initialized = true;
        }

        addModalHtml() {
            if (document.querySelector(this.selectors.modal)) return;

            const html = `
        <div id="new-media-modal" class="nmm" aria-hidden="true">
          <div class="nmm__overlay" data-nmm-close></div>

          <div class="nmm__dialog" role="dialog" aria-modal="true" aria-labelledby="nmm-title">
            <div class="nmm__header">
              <div>
                <h2 id="nmm-title" class="nmm__title">Replace Media</h2>
                <p class="nmm__subtitle">Choose an image, video, GIF, or animation for this frame.</p>
              </div>

              <button type="button" class="nmm__icon-btn" data-nmm-close aria-label="Close replace media popup">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="nmm__body">
              <div class="nmm__top-grid">
                <section class="nmm__card nmm__current-card">
                  <div class="nmm__section-heading">
                    <span class="nmm__eyebrow">Current Frame</span>
                    <strong>Current media</strong>
                  </div>

                  <div class="nmm__current-content">
                    <div class="nmm__current-preview" data-nmm-current-preview>
                      <span class="nmm__preview-placeholder">Preview</span>
                    </div>

                    <div class="nmm__current-meta">
                      <div class="nmm__meta-row">
                        <span>Type</span>
                        <strong data-nmm-current-type>Image</strong>
                      </div>
                    <div class="nmm__meta-row">
  <span>Dimensions</span>
  <strong data-nmm-current-dimension>Auto</strong>
</div>
                      <div class="nmm__meta-row nmm__meta-row--source" style="display: none;">
  <span>Source</span>
  <strong data-nmm-current-source>Not selected</strong>
</div>
                     
                    </div>
                  </div>
                </section>

                <section class="nmm__card nmm__type-card">
                  <div class="nmm__section-heading">
                    <span class="nmm__eyebrow">Media Type</span>
                    <strong>What do you want to add?</strong>
                  </div>

                  <div class="nmm__type-options" role="tablist" aria-label="Media type">
                    <button type="button" class="nmm__type-option is-active" data-nmm-media-type="image">
                     <span class="nmm__type-icon">
  <i class="fa-regular fa-image"></i>
</span>
                      <span>
                        <strong>Image</strong>
                        <small>Photo, graphic, SVG</small>
                      </span>
                    </button>

                    <button type="button" class="nmm__type-option" data-nmm-media-type="video">
                    <span class="nmm__type-icon">
  <i class="fa-solid fa-video"></i>
</span>
                      <span>
                        <strong>Video</strong>
                        <small>MP4, WebM, YouTube</small>
                      </span>
                    </button>

                    <button type="button" class="nmm__type-option" data-nmm-media-type="gif">
                     <span class="nmm__type-icon">
  <i class="fa-solid fa-photo-film"></i>
</span>
                      <span>
                        <strong>GIF</strong>
                        <small>Animated media</small>
                      </span>
                    </button>
                  </div>
                </section>
              </div>

              <div class="nmm__workspace">
                <aside class="nmm__sources nmm__card">
                  <div class="nmm__section-heading nmm__section-heading--compact">
                    <span class="nmm__eyebrow">Choose Source</span>
                  </div>

                <div class="nmm__source-list" role="tablist" aria-label="Media source">
  <button type="button" class="nmm__source-btn is-active" data-nmm-source="my-media">
    <span class="nmm__source-icon">
      <i class="fa-solid fa-photo-film"></i>
    </span>
    <span class="nmm__source-text">
      <strong>My Media</strong>
      <small>Uploaded files</small>
    </span>
  </button>

  <button type="button" class="nmm__source-btn" data-nmm-source="upload">
    <span class="nmm__source-icon">
      <i class="fa-solid fa-cloud-arrow-up"></i>
    </span>
    <span class="nmm__source-text">
      <strong>Upload</strong>
      <small>Add new file</small>
    </span>
  </button>



  <button type="button" class="nmm__source-btn" data-nmm-source="unsplash">
    <span class="nmm__source-icon">
      <i class="fa-regular fa-image"></i>
    </span>
    <span class="nmm__source-text">
      <strong>Unsplash</strong>
      <small>Stock photos</small>
    </span>
  </button>

  <button type="button" class="nmm__source-btn" data-nmm-source="giphy">
  <span class="nmm__source-icon">
    <i class="fa-solid fa-film"></i>
  </span>

  <span class="nmm__source-text">
    <strong>GIPHY</strong>
    <small>GIF library</small>
  </span>
</button>

  <button type="button" class="nmm__source-btn" data-nmm-source="ai-library">
    <span class="nmm__source-icon">
      <i class="fa-solid fa-wand-magic-sparkles"></i>
    </span>
    <span class="nmm__source-text">
      <strong>AI Library</strong>
      <small>AI images</small>
    </span>
  </button>
    <button type="button" class="nmm__source-btn" data-nmm-source="link">
    <span class="nmm__source-icon">
      <i class="fa-solid fa-link"></i>
    </span>
    <span class="nmm__source-text">
      <strong>Link</strong>
      <small>Paste URL</small>
    </span>
  </button>
</div>
                </aside>

                <main class="nmm__content nmm__card">
                <section class="nmm__source-panel is-active" data-nmm-source-panel="my-media">
  <div class="nmm__library-head">
    <div>
      <h3>My Media</h3>
      <p>Reuse images, videos, and GIFs you have uploaded.</p>
    </div>
  </div>

  <div class="nmm__library-toolbar">
    <div class="nmm__search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="search"
        data-nmm-media-search
        placeholder="Search images, file name, alt text..."
      />
      <button type="button" data-nmm-media-search-clear aria-label="Clear search">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <div class="nmm__type-filter">
      <button type="button" data-nmm-type-filter-toggle>
        <span data-nmm-type-filter-label>Current type</span>
        <i class="fa-solid fa-chevron-down"></i>
      </button>

      <div class="nmm__type-filter-menu" data-nmm-type-filter-menu hidden>
        <button type="button" data-nmm-type-filter="current">Current type</button>
        <button type="button" data-nmm-type-filter="all">All types</button>
        <button type="button" data-nmm-type-filter="image">Images</button>
        <button type="button" data-nmm-type-filter="video">Videos</button>
        <button type="button" data-nmm-type-filter="gif">GIFs</button>
      </div>
    </div>
  </div>

<div class="nmm__library-tabs">
  <button type="button" class="is-active" data-nmm-library-tab="recent">Recent</button>
  <button type="button" data-nmm-library-tab="uploaded">Uploaded</button>
  <button type="button" data-nmm-library-tab="project">Currently in use</button>
  <button type="button" data-nmm-library-tab="favorites">Favourites</button>
</div>

  <div class="nmm__media-grid" data-nmm-my-media-grid>
    <div class="nmm__media-state">
      <span class="nmm__mini-loader"></span>
      <strong>Loading media...</strong>
      <p>Please wait while we load your uploaded files.</p>
    </div>
  </div>
</section>

               <section class="nmm__source-panel" data-nmm-source-panel="upload">
  <div class="nmm__upload-layout">
    <div class="nmm__upload-main">
      <div class="nmm__upload-type-row">
        <button type="button" class="nmm__upload-type is-active" data-nmm-upload-type="image">
          <i class="fa-regular fa-image"></i>
          <span>Image</span>
        </button>
        <button type="button" class="nmm__upload-type" data-nmm-upload-type="video">
          <i class="fa-solid fa-video"></i>
          <span>Video</span>
        </button>
        <button type="button" class="nmm__upload-type" data-nmm-upload-type="gif">
          <i class="fa-solid fa-photo-film"></i>
          <span>GIF</span>
        </button>
      </div>

      <div class="nmm__upload-dropzone" data-nmm-upload-dropzone>
        <input type="file" data-nmm-upload-input multiple hidden />

        <div class="nmm__upload-drop-icon">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </div>

        <strong data-nmm-upload-title>Drag & drop your image here</strong>

        <div class="nmm__upload-divider">
          <span></span>
          <em>or</em>
          <span></span>
        </div>

        <button type="button" class="nmm__upload-browse" data-nmm-upload-browse>
          Browse from computer
        </button>

        <p data-nmm-upload-help>Supported formats: JPG, PNG, WEBP, SVG</p>
        <small data-nmm-upload-limit>Max file size: 5MB</small>

        <div class="nmm__upload-progress" data-nmm-upload-progress hidden>
          <div class="nmm__upload-progress-bar">
            <span data-nmm-upload-progress-fill style="width: 0%"></span>
          </div>
          <p data-nmm-upload-progress-text>Uploading... 0%</p>
        </div>

        <div class="nmm__upload-error" data-nmm-upload-error hidden></div>
      </div>
    </div>

    <aside class="nmm__upload-recent">
      <div class="nmm__upload-recent-head">
        <h3>Recent uploads</h3>
        <button type="button" data-nmm-upload-view-all>View all</button>
      </div>

      <div class="nmm__upload-recent-grid" data-nmm-upload-recent-grid>
        <div class="nmm__media-state nmm__media-state--compact">
          <div class="nmm__state-icon">
            <i class="fa-regular fa-folder-open"></i>
          </div>
          <strong>No recent uploads</strong>
          <p>Uploaded files will appear here.</p>
        </div>
      </div>
    </aside>
  </div>
</section>

                 <section class="nmm__source-panel" data-nmm-source-panel="link">
  <div class="nmm__link-layout">
    <div class="nmm__link-main">
      <div class="nmm__link-head">
        <h3 data-nmm-link-title>Add image from link</h3>
        <p data-nmm-link-description>Paste a direct image URL ending in JPG, PNG, WEBP, or SVG.</p>
      </div>

      <div class="nmm__link-field">
        <label for="nmm-link-input" data-nmm-link-label>Image URL</label>

        <div class="nmm__link-input-row">
          <div class="nmm__link-input-wrap">
            <i class="fa-solid fa-link"></i>
            <input id="nmm-link-input" type="text" data-nmm-link-input placeholder="https://example.com/image.jpg">
            <button type="button" data-nmm-link-paste aria-label="Paste link">
              <i class="fa-regular fa-clipboard"></i>
            </button>
          </div>

          <button type="button" class="nmm__link-check-btn" data-nmm-link-check>
            Check Link
          </button>
        </div>

        <small data-nmm-link-help>Only direct image links are supported. Example: .jpg, .png, .webp</small>
        <div class="nmm__link-error" data-nmm-link-error hidden></div>
      </div>

      <label class="nmm__link-checkbox">
        <input type="checkbox" data-nmm-link-save checked>
        <span>
          <strong data-nmm-link-save-title>Save this image to My Media</strong>
          <small>Recommended, so the media stays available even if the original link changes later.</small>
        </span>
      </label>

      <div class="nmm__link-info-box">
        <i class="fa-solid fa-circle-info"></i>
        <span data-nmm-link-info>Paste a media URL above and click Check Link to continue.</span>
      </div>
    </div>

    <aside class="nmm__link-details">
      <h3 data-nmm-link-details-title>Link Details</h3>

      <div class="nmm__link-preview-box" data-nmm-link-preview>
        <div class="nmm__link-placeholder">
          <span><i class="fa-solid fa-link"></i></span>
          <strong>No link checked yet</strong>
          <p>Once you enter a URL and click Check Link, details will appear here.</p>
        </div>
      </div>

      <div class="nmm__link-meta" data-nmm-link-meta hidden>
      <div class="nmm__link-selected-title">
  <strong data-nmm-link-selected-name>Not selected</strong>
 <span class="nmm__selected-title-actions">
  <button
    type="button"
    data-nmm-copy-link="link"
    aria-label="Copy media link"
    title="Copy media link"
  >
    <i class="fa-regular fa-copy"></i>
  </button>

  <button
    type="button"
    data-nmm-favorite-toggle="link"
    aria-label="Add linked media to favourites"
  >
    <i class="fa-regular fa-heart"></i>
  </button>
</span>
</div>
        <div class="nmm__meta-row">
          <span>Type</span>
          <strong data-nmm-link-meta-type>Pending</strong>
        </div>
        <div class="nmm__meta-row">
          <span>Source</span>
          <strong data-nmm-link-meta-source>External link</strong>
        </div>
        <div class="nmm__meta-row">
  <span>Size</span>
  <strong data-nmm-link-meta-size>Not available</strong>
</div>
        <div class="nmm__meta-row">
          <span>Format</span>
          <strong data-nmm-link-meta-format>Auto</strong>
        </div>
      </div>

      <div class="nmm__link-note">
        <i class="fa-solid fa-circle-info"></i>
        <span data-nmm-link-note>This linked media will replace the current media after you click Apply Changes.</span>
      </div>
    </aside>
  </div>
</section>

              <section class="nmm__source-panel" data-nmm-source-panel="unsplash">
  <div class="nmm__stock-layout">
    <div class="nmm__stock-main">
      <div class="nmm__stock-head">
        <h3>Search Unsplash images</h3>
        <p>Find free high-quality images and add them to this frame.</p>
      </div>

      <div class="nmm__stock-search-row">
        <div class="nmm__stock-search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
       <input type="search" data-nmm-unsplash-search placeholder="Search Unsplash images">
        </div>

        <button type="button" class="nmm__stock-search-btn" data-nmm-unsplash-search-btn>
          Search
        </button>
      </div>

   

     <div class="nmm__stock-category-wrap">
  <button type="button" class="nmm__stock-cat-arrow" data-nmm-unsplash-cat-left aria-label="Scroll categories left">
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <div class="nmm__stock-categories" data-nmm-unsplash-categories>
    <!-- Dynamic category chips will render here -->
  </div>

  <button type="button" class="nmm__stock-cat-arrow" data-nmm-unsplash-cat-right aria-label="Scroll categories right">
    <i class="fa-solid fa-chevron-right"></i>
  </button>
</div>

      <div class="nmm__stock-grid" data-nmm-unsplash-grid>
        <div class="nmm__media-state">
          <div class="nmm__state-icon">
            <i class="fa-regular fa-image"></i>
          </div>
          <strong>Search stock images</strong>
          <p>Enter a keyword or choose a category to begin.</p>
        </div>
      </div>

      <div class="nmm__stock-pagination" data-nmm-unsplash-pagination hidden>
        <button type="button" data-nmm-unsplash-prev aria-label="Previous page">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <span data-nmm-unsplash-page>1</span>
        <button type="button" data-nmm-unsplash-next aria-label="Next page">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <aside class="nmm__stock-details">
      <h3>Selected Unsplash Image</h3>

      <div class="nmm__stock-selected-preview" data-nmm-unsplash-preview>
        <div class="nmm__link-placeholder">
          <span><i class="fa-regular fa-image"></i></span>
          <strong>No image selected</strong>
          <p>Choose an Unsplash image to see details here.</p>
        </div>
      </div>

      <div class="nmm__stock-selected-title">
        <strong data-nmm-unsplash-title>Not selected</strong>
     <span class="nmm__selected-title-actions">
  <button
    type="button"
    data-nmm-copy-link="unsplash"
    aria-label="Copy media link"
    title="Copy media link"
  >
    <i class="fa-regular fa-copy"></i>
  </button>

  <button
    type="button"
    data-nmm-favorite-toggle="unsplash"
    aria-label="Add Unsplash image to favourites"
  >
    <i class="fa-regular fa-heart"></i>
  </button>
</span>
      </div>

      <div class="nmm__link-meta" data-nmm-unsplash-meta hidden>
        <div class="nmm__meta-row">
          <span>Source</span>
          <strong>Unsplash</strong>
        </div>
        <div class="nmm__meta-row">
          <span>Author</span>
          <strong data-nmm-unsplash-author>Unknown</strong>
        </div>
       <div class="nmm__meta-row">
  <span>Size</span>
  <strong data-nmm-unsplash-size>Not available</strong>
</div>
        <div class="nmm__meta-row">
          <span>License</span>
          <strong>Free to use</strong>
        </div>
      </div>

      <label class="nmm__link-checkbox nmm__stock-save">
        <input type="checkbox" data-nmm-unsplash-save checked>
        <span>
          <strong>Save this image to My Media</strong>
          <small>Recommended, so you can reuse it later in this website.</small>
        </span>
      </label>

      <div class="nmm__link-note">
        <i class="fa-solid fa-circle-info"></i>
        <span>This image will replace the current media in the selected frame after you click Apply Changes.</span>
      </div>
    </aside>
  </div>
</section>
<section
  class="nmm__source-panel"
  data-nmm-source-panel="giphy"
>
  <div class="nmm__stock-layout">

    <div class="nmm__stock-main">

      <div class="nmm__stock-head">
        <h3>Search GIPHY GIFs</h3>

        <p>
          Find animated GIFs to use in your website.
        </p>
      </div>


      <div class="nmm__stock-search-row">

        <div class="nmm__stock-search-box">

          <i class="fa-solid fa-magnifying-glass"></i>

          <input
            type="search"
            data-nmm-giphy-search
            placeholder="Search GIPHY GIFs"
            maxlength="50"
            disabled
          >

        </div>


        <button
          type="button"
          class="nmm__stock-search-btn"
          data-nmm-giphy-search-btn
          disabled
        >
          Search
        </button>

      </div>

      <div class="nmm__stock-category-wrap">

  <div class="nmm__stock-categories">

    <button
      type="button"
      class="is-active"
      data-nmm-giphy-trending
      disabled
    >
      Trending
    </button>

  </div>

</div>


      <div
        class="nmm__stock-grid"
        data-nmm-giphy-grid
      >

        <div class="nmm__media-state">

          <div class="nmm__state-icon">
            <i class="fa-solid fa-photo-film"></i>
          </div>

        <strong>
    GIPHY GIFs
</strong>

<p>
    Search or explore trending GIFs.
</p>
        </div>

      </div>

      <div
  class="nmm__stock-pagination"
  data-nmm-giphy-pagination
  hidden
>

  <button
    type="button"
    data-nmm-giphy-prev
    aria-label="Previous GIF page"
  >
    <i class="fa-solid fa-chevron-left"></i>
  </button>

  <span data-nmm-giphy-page>1</span>

  <button
    type="button"
    data-nmm-giphy-next
    aria-label="Next GIF page"
  >
    <i class="fa-solid fa-chevron-right"></i>
  </button>

</div>


      <div class="nmm__link-note">

        <i class="fa-solid fa-circle-info"></i>

        <span>
          Powered by GIPHY
        </span>

      </div>

    </div>


    <aside class="nmm__stock-details">

      <h3>
        Selected GIF
      </h3>


      <div
        class="nmm__stock-selected-preview"
        data-nmm-giphy-preview
      >

        <div class="nmm__link-placeholder">

          <span>
            <i class="fa-solid fa-photo-film"></i>
          </span>

          <strong>
            No GIF selected
          </strong>

          <p>
            Select a GIPHY GIF to preview it here.
          </p>

        </div>

      </div>


   <div class="nmm__stock-selected-title">

  <strong data-nmm-giphy-title>
    Not selected
  </strong>

  <span class="nmm__selected-title-actions">

    <button
      type="button"
      data-nmm-copy-link="giphy"
      aria-label="Copy GIF link"
      title="Copy GIF link"
    >
      <i class="fa-regular fa-copy"></i>
    </button>

    <button
      type="button"
      data-nmm-favorite-toggle="giphy"
      aria-label="Add GIF to favourites"
      title="Add to favourites"
    >
      <i class="fa-regular fa-heart"></i>
    </button>

  </span>

</div>


      <div
        class="nmm__link-meta"
        data-nmm-giphy-meta
        hidden
      >

        <div class="nmm__meta-row">
          <span>Source</span>
          <strong>GIPHY</strong>
        </div>

        <div class="nmm__meta-row">
          <span>Creator</span>

          <strong data-nmm-giphy-creator>
            Unknown
          </strong>
        </div>

        <div class="nmm__meta-row">
          <span>Dimensions</span>

          <strong data-nmm-giphy-dimensions>
            Auto
          </strong>
        </div>
        <div class="nmm__meta-row">
  <span>Rating</span>

  <strong data-nmm-giphy-rating>
    Not available
  </strong>
</div>

        <div class="nmm__meta-row">
          <span>Format</span>
          <strong>GIF</strong>
        </div>

      </div>


      <div class="nmm__link-note">

        <i class="fa-solid fa-circle-info"></i>

        <span>
          Select a GIF to preview it before applying.
        </span>

      </div>

    </aside>

  </div>
</section>

             <section class="nmm__source-panel" data-nmm-source-panel="ai-library">
  <div class="nmm__ai-layout">
    <div class="nmm__ai-main">
      <div class="nmm__ai-head">
        <span class="nmm__ai-badge">AI</span>
        <div>
          <h3>AI Library</h3>
          <p>Choose from images you've previously generated with AI.</p>
        </div>
      </div>

      <div class="nmm__ai-search-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" data-nmm-ai-search placeholder="Search AI images, name, category, style...">
        <button type="button" data-nmm-ai-clear aria-label="Clear AI search">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="nmm__ai-categories">
        <button type="button" class="is-active" data-nmm-ai-category="all">All Styles</button>
        <button type="button" data-nmm-ai-category="realistic">Realistic</button>
        <button type="button" data-nmm-ai-category="minimal">Minimal</button>
        <button type="button" data-nmm-ai-category="3d">3D</button>
        <button type="button" data-nmm-ai-category="illustration">Illustration</button>
        <button type="button" data-nmm-ai-category="product">Product</button>
        <button type="button" data-nmm-ai-category="background">Background</button>
      </div>

      <div class="nmm__ai-grid" data-nmm-ai-grid>
        <div class="nmm__media-state">
          <div class="nmm__state-icon">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <strong>AI images will appear here</strong>
          <p>Your generated AI images will load here.</p>
        </div>
      </div>
    </div>

    <aside class="nmm__ai-details">
      <h3>Selected AI Image</h3>

      <div class="nmm__ai-selected-preview" data-nmm-ai-preview>
        <div class="nmm__link-placeholder">
          <span><i class="fa-solid fa-wand-magic-sparkles"></i></span>
          <strong>No AI image selected</strong>
          <p>Choose an AI image to see details here.</p>
        </div>
      </div>

      <div class="nmm__ai-selected-title">
        <strong data-nmm-ai-title>Not selected</strong>
 <span class="nmm__selected-title-actions">
  <button
    type="button"
    data-nmm-copy-link="ai"
    aria-label="Copy media link"
    title="Copy media link"
  >
    <i class="fa-regular fa-copy"></i>
  </button>

  <button
    type="button"
    data-nmm-favorite-toggle="ai"
    aria-label="Add AI image to favourites"
  >
    <i class="fa-regular fa-heart"></i>
  </button>
</span>
      </div>

      <div class="nmm__link-meta" data-nmm-ai-meta hidden>
        <div class="nmm__meta-row">
          <span>Style</span>
          <strong data-nmm-ai-style-text>Auto</strong>
        </div>
        <div class="nmm__meta-row">
          <span>Category</span>
          <strong data-nmm-ai-category-text>Auto</strong>
        </div>
       <div class="nmm__meta-row">
  <span>Size</span>
  <strong data-nmm-ai-size>Not available</strong>
</div>
        <div class="nmm__meta-row">
          <span>Format</span>
          <strong data-nmm-ai-format>Image</strong>
        </div>
      </div>

      <label class="nmm__link-checkbox nmm__ai-save">
        <input type="checkbox" data-nmm-ai-save checked>
        <span>
          <strong>Save this image to My Media</strong>
          <small>Recommended, so you can reuse it later in this website.</small>
        </span>
      </label>

      <div class="nmm__link-note">
        <i class="fa-solid fa-circle-info"></i>
        <span>This AI image will replace the current media after you click Apply Changes.</span>
      </div>
    </aside>
  </div>
</section>
                </main>

                <aside class="nmm__selected nmm__card">
                  <div class="nmm__section-heading nmm__section-heading--compact">
                    <span class="nmm__eyebrow">Selected Media</span>
                    <strong>Preview</strong>
                  </div>

    <div class="nmm__selected-preview" data-nmm-selected-preview>
  <span class="nmm__preview-placeholder">No media selected</span>
</div>

<div class="nmm__selected-title-row">
  <strong data-nmm-selected-name>Not selected</strong>

  <span class="nmm__selected-title-actions">
    <button
      type="button"
      data-nmm-copy-link="selected"
      aria-label="Copy media link"
      title="Copy media link"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
    >
      <i class="fa-regular fa-copy"></i>
    </button>

    <button
      type="button"
      data-nmm-favorite-toggle="selected"
      aria-label="Add to favourites"
      title="Add to favourites"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
    >
      <i class="fa-regular fa-heart"></i>
    </button>
  </span>
</div>

<div class="nmm__selected-info">
  <div class="nmm__meta-row">
    <span>Type</span>
    <strong data-nmm-selected-type>Pending</strong>
  </div>

  <div class="nmm__meta-row">
    <span>Size</span>
    <strong data-nmm-selected-size>Not available</strong>
  </div>
</div>
                </aside>
              </div>

              <section class="nmm__adjust nmm__card">
                <button type="button" class="nmm__adjust-toggle" data-nmm-adjust-toggle aria-expanded="false">
                  <span>
                    <strong>Adjust Media</strong>
                    <small>Alt text, lazy loading, video options, and GIF settings will appear here.</small>
                  </span>
                  <span class="nmm__chevron">⌄</span>
                </button>

             <div class="nmm__adjust-body" data-nmm-adjust-body hidden>
  <div class="nmm__adjust-cards">

    <article class="nmm__adjust-card" data-nmm-adjust-image>
      <div class="nmm__adjust-card-head">
        <i class="fa-regular fa-closed-captioning"></i>
        <strong>Alt Text</strong>
      </div>
   <textarea
  data-nmm-adjust-image-alt
  maxlength="125"
  placeholder="No alt text added"
  readonly
  aria-readonly="true"
></textarea>
      <div class="nmm__adjust-help-row">
       <small>Alt text is managed from the media details menu.</small>
        <small><span data-nmm-adjust-alt-count>0</span> / 125</small>
      </div>
    </article>

    <article class="nmm__adjust-card" data-nmm-adjust-image>
      <div class="nmm__adjust-card-head">
        <i class="fa-solid fa-gauge-high"></i>
        <strong>Lazy Load</strong>
      </div>
      <p>Recommended for better page speed.</p>
      <button type="button" class="nmm__switch is-on" data-nmm-adjust-image-lazy aria-pressed="true">
        <span></span>
      </button>
    </article>

    <article class="nmm__adjust-card" data-nmm-adjust-image>
  <div class="nmm__adjust-card-head">
    <i class="fa-solid fa-link"></i>
    <strong>Update Link</strong>
  </div>

  <input
    type="text"
    data-nmm-adjust-image-link
    placeholder="https://example.com"
  >

  <label class="nmm__mini-check">
    <input type="checkbox" data-nmm-adjust-image-link-newtab>
    <span>Open in new tab</span>
  </label>

  <small data-nmm-adjust-image-link-help>
  Make this image clickable. Leave empty to remove the image link.
</small>

<div
  class="nmm__adjust-link-error"
  data-nmm-adjust-image-link-error
  hidden
></div>
</article>

    <article class="nmm__adjust-card" data-nmm-adjust-video hidden>
      <div class="nmm__adjust-card-head">
        <i class="fa-solid fa-play"></i>
        <strong>Autoplay</strong>
      </div>
      <p>Start video automatically when the page loads.</p>
      <button type="button" class="nmm__switch" data-nmm-adjust-video-autoplay aria-pressed="false">
        <span></span>
      </button>
    </article>

    <article class="nmm__adjust-card" data-nmm-adjust-video hidden>
      <div class="nmm__adjust-card-head">
        <i class="fa-solid fa-sliders"></i>
        <strong>Controls</strong>
      </div>
      <p>Show play, pause, and volume controls.</p>
      <button type="button" class="nmm__switch is-on" data-nmm-adjust-video-controls aria-pressed="true">
        <span></span>
      </button>
    </article>

    <article class="nmm__adjust-card" data-nmm-adjust-video hidden>
      <div class="nmm__adjust-card-head">
        <i class="fa-solid fa-repeat"></i>
        <strong>Loop</strong>
      </div>
      <p>Replay the video automatically after it ends.</p>
      <button type="button" class="nmm__switch" data-nmm-adjust-video-loop aria-pressed="false">
        <span></span>
      </button>
    </article>

    <article class="nmm__adjust-card" data-nmm-adjust-video hidden>
      <div class="nmm__adjust-card-head">
        <i class="fa-solid fa-volume-xmark"></i>
        <strong>Muted</strong>
      </div>
      <p>Mute video sound by default.</p>
      <button type="button" class="nmm__switch" data-nmm-adjust-video-muted aria-pressed="false">
        <span></span>
      </button>
    </article>

    <article class="nmm__adjust-card d-none" data-nmm-adjust-native-video hidden>
      <div class="nmm__adjust-card-head">
        <i class="fa-regular fa-image"></i>
        <strong>Poster URL</strong>
      </div>
      <input type="text" data-nmm-adjust-video-poster placeholder="https://example.com/poster.jpg">
      <small>Only applies to native video files, not YouTube iframe videos.</small>
    </article>

  </div>
</div>
              </section>
            </div>

           <div class="nmm__footer">
  <div class="nmm__footer-info">
    <i class="fa-solid fa-circle-info"></i>
    <span>Changes will be applied after you click Apply Changes.</span>
  </div>

  <div class="nmm__footer-actions">
    <button type="button" class="nmm__secondary-btn zg-btn-cancel" data-nmm-cancel>Cancel</button>
    <button type="button" class="nmm__primary-btn zg-btn-primary" data-nmm-apply disabled>Apply Changes</button>
  </div>
</div>
          </div>
        </div>
      `;

            document.body.insertAdjacentHTML("beforeend", html);
            this.addMediaActionModalsHtml();
        }

        addMediaActionModalsHtml() {
            if (document.querySelector("#nmm-media-actions-layer")) return;

            const html = `
    <div id="nmm-media-actions-layer" class="nmm-actions-layer" hidden>
      <div class="nmm-actions-backdrop" data-nmm-action-close></div>

      <div class="nmm-actions-menu" data-nmm-actions-menu hidden>
        <button type="button" data-nmm-action="rename">
          <span><i class="fa-solid fa-pen"></i></span>
          <strong>Rename</strong>
        </button>
     <button type="button" data-nmm-action="details">
  <span>
    <i class="fa-solid fa-magnifying-glass-chart"></i>
  </span>
  <strong>SEO details</strong>
</button>
        <button type="button" class="is-danger" data-nmm-action="delete">
          <span><i class="fa-regular fa-trash-can"></i></span>
          <strong>Delete</strong>
        </button>
      </div>

      <section class="nmm-action-modal" data-nmm-action-modal="rename" hidden>
        <div class="nmm-action-card">
          <div class="nmm-action-head">
            <span class="nmm-action-icon">
              <i class="fa-solid fa-pen"></i>
            </span>
            <div>
              <h3>Rename file</h3>
              <p>Update the uploaded file name while keeping the same file type.</p>
            </div>
            <button type="button" class="nmm-action-close" data-nmm-action-close aria-label="Close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="nmm-action-body">
            <label class="nmm-action-field">
              <span>Current name</span>
              <strong data-nmm-rename-current>Current file</strong>
            </label>

            <label class="nmm-action-field">
              <span>New name</span>
              <div class="nmm-action-input-group">
                <input type="text" data-nmm-rename-input placeholder="Add new file name">
                <em data-nmm-rename-ext>.png</em>
              </div>
            </label>

            <div class="nmm-action-error" data-nmm-rename-error hidden></div>
          </div>

          <div class="nmm-action-footer">
            <button type="button" class="nmm-action-secondary" data-nmm-action-close>Cancel</button>
            <button type="button" class="nmm-action-primary" data-nmm-rename-submit>Update</button>
          </div>
        </div>
      </section>

      <section class="nmm-action-modal" data-nmm-action-modal="details" hidden>
        <div class="nmm-action-card nmm-action-card--wide">
          <div class="nmm-action-head">
            <span class="nmm-action-icon">
             <i class="fa-solid fa-magnifying-glass-chart"></i>
            </span>
            <div>
            <h3>SEO &amp; accessibility</h3>
<p>
  Update the title, alt text, and description used
  for search visibility and accessibility.
</p>
            </div>
            <button type="button" class="nmm-action-close" data-nmm-action-close aria-label="Close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="nmm-action-body nmm-action-details-grid">
            <div class="nmm-action-preview">
              <img src="" alt="" data-nmm-details-preview>
            </div>

            <div>
              <label class="nmm-action-field">
                <span>Title</span>
                <input type="text" data-nmm-details-title placeholder="Image title">
              </label>

              <label class="nmm-action-field">
                <span>Alt text</span>
                <input type="text" data-nmm-details-alt placeholder="Describe the image for accessibility / SEO">
              </label>

              <label class="nmm-action-field">
                <span>Description</span>
                <textarea rows="4" data-nmm-details-description placeholder="Add a short description"></textarea>
              </label>

              <div class="nmm-action-error" data-nmm-details-error hidden></div>
            </div>
          </div>

          <div class="nmm-action-footer">
            <button type="button" class="nmm-action-secondary" data-nmm-action-close>Cancel</button>
           <button
  type="button"
  class="nmm-action-primary"
  data-nmm-details-submit
>
  Save SEO details
</button>
          </div>
        </div>
      </section>

      <section class="nmm-action-modal" data-nmm-action-modal="delete" hidden>
        <div class="nmm-action-card">
          <div class="nmm-action-head">
            <span class="nmm-action-icon nmm-action-icon--danger">
              <i class="fa-regular fa-trash-can"></i>
            </span>
            <div>
              <h3>Delete file?</h3>
              <p>This action cannot be undone.</p>
            </div>
            <button type="button" class="nmm-action-close" data-nmm-action-close aria-label="Close">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="nmm-action-body">
            <div class="nmm-delete-box">
              <strong data-nmm-delete-name>Selected file</strong>
              <small data-nmm-delete-url></small>
            </div>

            <div class="nmm-action-error" data-nmm-delete-error hidden></div>
          </div>

          <div class="nmm-action-footer">
            <button type="button" class="nmm-action-secondary" data-nmm-action-close>Cancel</button>
            <button type="button" class="nmm-action-danger" data-nmm-delete-submit>Delete</button>
          </div>
        </div>
      </section>
    </div>
  `;

            document.body.insertAdjacentHTML("beforeend", html);
        }

        bindEvents() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll(this.selectors.close)
                .forEach((button) => {
                    button.addEventListener("click", () => this.close());
                });

            this.modal
                .querySelectorAll(this.selectors.cancel)
                .forEach((button) => {
                    button.addEventListener("click", () => this.close());
                });

            this.modal
                .querySelectorAll(this.selectors.mediaType)
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        const type =
                            button.getAttribute("data-nmm-media-type") ||
                            "image";
                        this.switchMediaType(type);
                    });
                });

            this.modal
                .querySelectorAll(this.selectors.source)
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        const source =
                            button.getAttribute("data-nmm-source") ||
                            "my-media";
                        this.switchSource(source);
                    });
                });

            const searchInput = this.modal.querySelector(
                "[data-nmm-media-search]",
            );
            const searchClear = this.modal.querySelector(
                "[data-nmm-media-search-clear]",
            );
            const filterToggle = this.modal.querySelector(
                "[data-nmm-type-filter-toggle]",
            );
            const filterMenu = this.modal.querySelector(
                "[data-nmm-type-filter-menu]",
            );

            if (searchInput) {
                searchInput.addEventListener("input", () => {
                    this.mediaSearchQuery = searchInput.value || "";
                    this.mediaPage = 1;
                    this.renderMyMedia();
                });
            }

            if (searchClear) {
                searchClear.addEventListener("click", () => {
                    this.mediaSearchQuery = "";
                    this.mediaPage = 1;
                    if (searchInput) searchInput.value = "";
                    this.renderMyMedia();
                });
            }

            if (filterToggle && filterMenu) {
                filterToggle.addEventListener("click", (event) => {
                    event.preventDefault();
                    filterMenu.toggleAttribute("hidden");
                });
            }

            this.modal
                .querySelectorAll("[data-nmm-type-filter]")
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        this.mediaTypeFilter =
                            button.getAttribute("data-nmm-type-filter") ||
                            "current";
                        this.mediaPage = 1;
                        if (filterMenu) filterMenu.setAttribute("hidden", "");
                        this.updateMediaTypeFilterLabel();
                        this.renderMyMedia();
                    });
                });

            this.modal
                .querySelectorAll("[data-nmm-library-tab]")
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        this.modal
                            .querySelectorAll("[data-nmm-library-tab]")
                            .forEach((btn) => {
                                btn.classList.remove("is-active");
                            });
                        button.classList.add("is-active");

                        this.mediaLibraryTab =
                            button.getAttribute("data-nmm-library-tab") ||
                            "recent";
                        this.mediaPage = 1;

                        if (this.mediaLibraryTab === "project") {
                            this.refreshProjectMediaItems();
                        }

                        this.renderMyMedia();
                    });
                });

            this.modal
                .querySelectorAll("[data-nmm-upload-type]")
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        const type =
                            button.getAttribute("data-nmm-upload-type") ||
                            "image";
                        this.switchMediaType(type);
                        this.syncUploadTypeUI();
                        this.renderRecentUploads();
                    });
                });

            const uploadBrowse = this.modal.querySelector(
                "[data-nmm-upload-browse]",
            );
            const uploadInput = this.modal.querySelector(
                "[data-nmm-upload-input]",
            );
            const uploadDropzone = this.modal.querySelector(
                "[data-nmm-upload-dropzone]",
            );
            const uploadViewAll = this.modal.querySelector(
                "[data-nmm-upload-view-all]",
            );

            if (uploadBrowse && uploadInput) {
                uploadBrowse.addEventListener("click", () =>
                    uploadInput.click(),
                );
            }

            if (uploadInput) {
                uploadInput.addEventListener("change", () => {
                    const files = Array.from(uploadInput.files || []);
                    if (files.length) this.uploadFiles(files);
                    uploadInput.value = "";
                });
            }

            if (uploadDropzone) {
                uploadDropzone.addEventListener("dragover", (event) => {
                    event.preventDefault();
                    uploadDropzone.classList.add("is-dragover");
                });

                uploadDropzone.addEventListener("dragleave", () => {
                    uploadDropzone.classList.remove("is-dragover");
                });

                uploadDropzone.addEventListener("drop", (event) => {
                    event.preventDefault();
                    uploadDropzone.classList.remove("is-dragover");

                    const files = Array.from(event.dataTransfer?.files || []);
                    if (files.length) this.uploadFiles(files);
                });
            }

            if (uploadViewAll) {
                uploadViewAll.addEventListener("click", () => {
                    this.switchSource("my-media");

                    this.mediaLibraryTab = "uploaded";
                    this.mediaPage = 1;

                    this.modal
                        .querySelectorAll("[data-nmm-library-tab]")
                        .forEach((btn) => {
                            btn.classList.toggle(
                                "is-active",
                                btn.getAttribute("data-nmm-library-tab") ===
                                    "uploaded",
                            );
                        });

                    this.renderMyMedia();
                });
            }

            const linkInput = this.modal.querySelector("[data-nmm-link-input]");
            const linkCheck = this.modal.querySelector("[data-nmm-link-check]");
            const linkPaste = this.modal.querySelector("[data-nmm-link-paste]");
            const linkSave = this.modal.querySelector("[data-nmm-link-save]");

            if (linkInput) {
                linkInput.addEventListener("input", () => {
                    this.linkUrl = linkInput.value || "";
                    this.resetLinkCheckState(false);
                });

                linkInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        this.checkLinkMedia();
                    }
                });
            }

            if (linkCheck) {
                linkCheck.addEventListener("click", () => {
                    this.checkLinkMedia();
                });
            }

            if (linkPaste && linkInput) {
                linkPaste.addEventListener("click", async () => {
                    try {
                        const text = await navigator.clipboard.readText();
                        if (text) {
                            linkInput.value = text;
                            this.linkUrl = text;
                            this.resetLinkCheckState(false);
                        }
                    } catch (error) {
                        this.showLinkError(
                            "Could not read clipboard. Paste the link manually.",
                        );
                    }
                });
            }

            if (linkSave) {
                linkSave.addEventListener("change", () => {
                    this.linkSaveToMyMedia = !!linkSave.checked;
                });
            }

            const unsplashInput = this.modal.querySelector(
                "[data-nmm-unsplash-search]",
            );
            const unsplashSearchBtn = this.modal.querySelector(
                "[data-nmm-unsplash-search-btn]",
            );
            const unsplashPrev = this.modal.querySelector(
                "[data-nmm-unsplash-prev]",
            );
            const unsplashNext = this.modal.querySelector(
                "[data-nmm-unsplash-next]",
            );

            if (unsplashInput) {
                unsplashInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        const query = String(unsplashInput.value || "").trim();
                        const finalQuery =
                            query || this.getDefaultUnsplashQuery();

                        this.renderUnsplashCategorySuggestions(finalQuery);
                        this.searchUnsplashImages(finalQuery, 1);
                    }
                });
            }

            if (unsplashSearchBtn && unsplashInput) {
                unsplashSearchBtn.addEventListener("click", () => {
                    const query = String(unsplashInput.value || "").trim();
                    const finalQuery = query || this.getDefaultUnsplashQuery();

                    this.renderUnsplashCategorySuggestions(finalQuery);
                    this.searchUnsplashImages(finalQuery, 1);
                });
            }

            if (unsplashPrev) {
                unsplashPrev.addEventListener("click", () => {
                    if (this.unsplashPage <= 1) return;
                    this.searchUnsplashImages(
                        this.unsplashQuery || this.getDefaultUnsplashQuery(),
                        this.unsplashPage - 1,
                    );
                });
            }

            if (unsplashNext) {
                unsplashNext.addEventListener("click", () => {
                    if (!this.unsplashHasMore) return;
                    this.searchUnsplashImages(
                        this.unsplashQuery || this.getDefaultUnsplashQuery(),
                        this.unsplashPage + 1,
                    );
                });
            }

            /*
 * GIPHY events
 */
const giphyInput = this.modal.querySelector(
  "[data-nmm-giphy-search]"
);

const giphySearchBtn = this.modal.querySelector(
  "[data-nmm-giphy-search-btn]"
);

const giphyTrendingBtn = this.modal.querySelector(
  "[data-nmm-giphy-trending]"
);

const giphyPrev = this.modal.querySelector(
  "[data-nmm-giphy-prev]"
);

const giphyNext = this.modal.querySelector(
  "[data-nmm-giphy-next]"
);


const runGiphySearch = () => {
  const rawQuery = String(
    giphyInput ? giphyInput.value : ""
  );

  if (!rawQuery.trim()) {
    this.loadGiphyTrending(1);
    return;
  }

  if (rawQuery.length > 50) {
    this.renderGiphyError(
      "Search terms must be 50 characters or less."
    );
    return;
  }

  this.searchGiphyGifs(
    rawQuery,
    1
  );
};


if (giphySearchBtn) {
  giphySearchBtn.addEventListener(
    "click",
    runGiphySearch
  );
}


if (giphyInput) {
  giphyInput.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();

      runGiphySearch();
    }
  );
}


if (giphyTrendingBtn) {
  giphyTrendingBtn.addEventListener(
    "click",
    () => {
      if (giphyInput) {
        giphyInput.value = "";
      }

      this.loadGiphyTrending(1);
    }
  );
}


if (giphyPrev) {
  giphyPrev.addEventListener(
    "click",
    () => {
      if (this.giphyPage <= 1) {
        return;
      }

      const page =
        this.giphyPage - 1;

      if (
        this.giphyMode === "search" &&
        this.giphyQuery
      ) {
        this.searchGiphyGifs(
          this.giphyQuery,
          page
        );

        return;
      }

      this.loadGiphyTrending(page);
    }
  );
}


if (giphyNext) {
  giphyNext.addEventListener(
    "click",
    () => {
      if (!this.giphyHasMore) {
        return;
      }

      const page =
        this.giphyPage + 1;

      if (
        this.giphyMode === "search" &&
        this.giphyQuery
      ) {
        this.searchGiphyGifs(
          this.giphyQuery,
          page
        );

        return;
      }

      this.loadGiphyTrending(page);
    }
  );
}

            const unsplashCatLeft = this.modal.querySelector(
                "[data-nmm-unsplash-cat-left]",
            );
            const unsplashCatRight = this.modal.querySelector(
                "[data-nmm-unsplash-cat-right]",
            );
            const unsplashCategories = this.modal.querySelector(
                "[data-nmm-unsplash-categories]",
            );

            if (unsplashCatLeft && unsplashCategories) {
                unsplashCatLeft.addEventListener("click", () => {
                    unsplashCategories.scrollBy({
                        left: -220,
                        behavior: "smooth",
                    });
                });
            }

            if (unsplashCatRight && unsplashCategories) {
                unsplashCatRight.addEventListener("click", () => {
                    unsplashCategories.scrollBy({
                        left: 220,
                        behavior: "smooth",
                    });
                });
            }

            const aiSearchInput = this.modal.querySelector(
                "[data-nmm-ai-search]",
            );
            const aiSearchClear = this.modal.querySelector(
                "[data-nmm-ai-clear]",
            );

            if (aiSearchInput) {
                aiSearchInput.addEventListener("input", () => {
                    this.aiSearchQuery = aiSearchInput.value || "";
                    this.renderAiLibrary();
                });
            }

            if (aiSearchClear && aiSearchInput) {
                aiSearchClear.addEventListener("click", () => {
                    this.aiSearchQuery = "";
                    aiSearchInput.value = "";
                    this.renderAiLibrary();
                });
            }

            this.modal
                .querySelectorAll("[data-nmm-ai-category]")
                .forEach((button) => {
                    button.addEventListener("click", () => {
                        this.aiCategoryFilter =
                            button.getAttribute("data-nmm-ai-category") ||
                            "all";

                        this.modal
                            .querySelectorAll("[data-nmm-ai-category]")
                            .forEach((btn) => {
                                btn.classList.remove("is-active");
                            });

                        button.classList.add("is-active");
                        this.renderAiLibrary();
                    });
                });

            this.bindAdjustMediaEvents();
            this.bindMediaActionEvents();
            this.bindFavoriteEvents();
            this.bindCopyLinkEvents();

            const adjustToggle = this.modal.querySelector(
                this.selectors.adjustToggle,
            );
            const adjustBody = this.modal.querySelector(
                this.selectors.adjustBody,
            );

            if (adjustToggle && adjustBody) {
                adjustToggle.addEventListener("click", () => {
                    const isOpen = !adjustBody.hasAttribute("hidden");
                    if (isOpen) {
                        adjustBody.setAttribute("hidden", "");
                        adjustToggle.setAttribute("aria-expanded", "false");
                        adjustToggle.classList.remove("is-open");
                    } else {
                        adjustBody.removeAttribute("hidden");
                        adjustToggle.setAttribute("aria-expanded", "true");
                        adjustToggle.classList.add("is-open");
                    }
                });
            }

            const applyButton = this.modal.querySelector(this.selectors.apply);
            if (applyButton) {
                applyButton.addEventListener("click", () => {
                    this.applySelectedMedia();
                });
            }

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape" && this.isOpen()) {
                    this.close();
                }
            });
        }

        resetMyMediaTabToRecent() {
            this.mediaLibraryTab = "recent";
            this.mediaPage = 1;

            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-library-tab]")
                .forEach((btn) => {
                    btn.classList.toggle(
                        "is-active",
                        btn.getAttribute("data-nmm-library-tab") === "recent",
                    );
                });
        }

        resetMyMediaSearchForNewOpen() {
            this.mediaSearchQuery = "";
            this.mediaPage = 1;

            if (!this.modal) return;

            const input = this.modal.querySelector("[data-nmm-media-search]");
            if (input) {
                input.value = "";
            }
        }

        open(node, options = {}) {
            this.init();

            this.mode = options.mode || "replace-media";
            this.applyPerPageConfigByMode();
            this.onApply =
                typeof options.onApply === "function" ? options.onApply : null;

            if (this.modal) {
                this.modal.setAttribute("data-mode", this.mode);
            }

            const titleEl = this.modal.querySelector("#nmm-title");
            const subtitleEl = this.modal.querySelector(".nmm__subtitle");

            if (titleEl) {
                titleEl.textContent =
                    options.title ||
                    (this.mode === "background-image"
                        ? "Insert background image"
                        : "Replace Media");
            }

            if (subtitleEl) {
                subtitleEl.textContent =
                    options.subtitle ||
                    (this.mode === "background-image"
                        ? "Choose an image to use as this section background."
                        : "Choose an image, video, GIF, or animation for this frame.");
            }

            const rawNode = node || this.getBuilderSelectedNode();
            this.rawTargetNode = rawNode;

            if (this.mode === "link-pdf") {
                this.selectedNode = rawNode;
                this.currentMediaType = "pdf";
                this.targetMediaType = "pdf";
                this.mediaTypeFilter = "current";
                this.activeSource = options.source || "upload";
            } else if (this.mode === "background-image") {
                this.selectedNode = rawNode;
                this.currentMediaType = "image";
                this.targetMediaType = "image";
                this.mediaTypeFilter = "current";
                this.activeSource = options.source || "upload";
            } else {
                this.selectedNode = this.resolveMediaNode(rawNode);
                this.currentMediaType = this.detectNodeMediaType(
                    this.selectedNode,
                );
                this.targetMediaType =
                    options.type || this.currentMediaType || "image";
                this.mediaTypeFilter = "current";
                this.activeSource = options.source || "upload";
            }

            this.pendingSelectedMedia = null;
            this.pendingSettings = {};
            this.resetAdjustSettings();

            this.adjustDirty = false;
            this.mediaDirty = false;
            this.openSnapshot = this.captureMediaDomSnapshot(this.selectedNode);
            this.updateApplyState();

            this.linkUrl = "";
            this.linkCheckedMedia = null;
            this.linkError = "";

            this.unsplashSelectedMedia = null;
            this.aiSelectedMedia = null;

         // Clear only the selected GIF.
// Keep GIPHY search term, results and pagination
// when Media Gallery is reopened.
this.giphySelectedMedia = null;

            this.syncSelectionPanelState();

            this.updateCurrentFramePreview();
            this.switchMediaType(this.targetMediaType, true);
            this.switchSource(this.activeSource, true);

            this.updateLinkModeText();
            this.resetLinkCheckState(true);
            this.modal.setAttribute("data-active-source", this.activeSource);

            this.updateMediaTypeFilterLabel();
            this.resetSelectedMedia();
            this.resetMyMediaSearchForNewOpen();
            this.refreshProjectMediaItems();

            if (this.activeSource === "my-media") {
                this.resetMyMediaTabToRecent();
            }

            this.syncUploadTypeUI();
            this.renderRecentUploads();

            if (this.activeSource === "upload") {
                this.loadMyMedia();
            }

            if (this.activeSource === "my-media") {
                this.loadMyMedia();
            }
            this.modal.classList.add("is-open");
            this.modal.setAttribute("aria-hidden", "false");
            document.documentElement.classList.add("nmm-open");

            if (typeof window.initBuilderTooltips === "function") {
                window.initBuilderTooltips(this.modal);
            }

            requestAnimationFrame(() => {
                this.resetModalViewState();

                requestAnimationFrame(() => {
                    this.resetModalViewState();
                });
            });
        }

       close() {
    if (!this.modal) return;


    if (this.giphyViewObserver) {
        this.giphyViewObserver.disconnect();
        this.giphyViewObserver = null;
    }


    this.resetMyMediaTabToRecent();
            this.modal.classList.remove("is-open");
            this.modal.setAttribute("aria-hidden", "true");
            document.documentElement.classList.remove("nmm-open");
        }

        isOpen() {
            return !!(this.modal && this.modal.classList.contains("is-open"));
        }

        switchMediaType(type, silent = false) {
            if (this.mode === "link-pdf") {
                type = "pdf";
            }

            if (this.mode === "background-image") {
                type = "image";
            }

            this.targetMediaType = ["image", "video", "gif", "pdf"].includes(
                type,
            )
                ? type
                : "image";
            this.mediaTypeFilter = "current";

            this.modal
                .querySelectorAll(this.selectors.mediaType)
                .forEach((button) => {
                    const isActive =
                        button.getAttribute("data-nmm-media-type") ===
                        this.targetMediaType;
                    button.classList.toggle("is-active", isActive);
                });

            this.updateSourceAvailability();

            if (!silent) {
                this.pendingSelectedMedia = null;
            }

            if (!silent) {
                this.mediaDirty = false;
            }
            this.updateApplyState();
            this.updateMediaTypeFilterLabel();

            if (this.activeSource === "my-media") {
                this.renderMyMedia();
            }

            this.syncUploadTypeUI();

            if (this.activeSource === "upload") {
                this.renderRecentUploads();
            }

            this.updateLinkModeText();

            if (this.activeSource === "link") {
                this.resetLinkCheckState(false);
            }

            this.syncAdjustMediaUI();
        }

        // Resets the source selection UI and clears any selected media or link checks.
        resetSourceSelectionUi() {
            if (!this.modal) return;

            this.pendingSelectedMedia = null;
            this.linkCheckedMedia = null;
            this.unsplashSelectedMedia = null;
            this.aiSelectedMedia = null;
            this.giphySelectedMedia = null;

            this.mediaDirty = false;
            this.updateApplyState();
            this.syncSelectionPanelState();
            this.updateSelectedMediaPanel();

            this.modal
                .querySelectorAll(
                    ".nmm__media-card.is-selected, .nmm__recent-card.is-selected, .nmm__stock-card.is-selected, .nmm__ai-card.is-selected",
                )
                .forEach((card) => {
                    card.classList.remove("is-selected");
                });

            this.resetUnsplashDetailsPanel();
            this.resetGiphyDetailsPanel();
            this.resetAiDetailsPanel();
            this.resetLinkCheckState(false);
        }

        switchSourceViewOnly(source) {
            this.activeSource = source || "my-media";

            if (this.modal) {
                this.modal.setAttribute(
                    "data-active-source",
                    this.activeSource,
                );
            }

            this.modal
                .querySelectorAll(this.selectors.source)
                .forEach((button) => {
                    const isActive =
                        button.getAttribute("data-nmm-source") ===
                        this.activeSource;

                    button.classList.toggle("is-active", isActive);
                });

            this.modal
                .querySelectorAll(this.selectors.sourcePanel)
                .forEach((panel) => {
                    const isActive =
                        panel.getAttribute("data-nmm-source-panel") ===
                        this.activeSource;

                    panel.classList.toggle("is-active", isActive);
                });
        }

        forceSelectMediaItem(item) {
            if (!item || !this.modal) return;

            this.pendingSelectedMedia = item;
            this.mediaDirty = true;

            this.modal.setAttribute("data-has-selected-media", "true");
            this.modal.setAttribute("data-active-source", "my-media");

            this.resetAdjustSettingsForSelectedMedia(item);
            this.updateSelectedMediaPanel();
            this.syncSelectionPanelState();
            this.updateApplyState();
            this.syncFavoriteButtons();
            this.markMediaDirty();

            const selectedPanel = this.modal.querySelector(".nmm__selected");
            if (selectedPanel) {
                selectedPanel.style.display = "block";
                selectedPanel.style.opacity = "1";
                selectedPanel.style.pointerEvents = "auto";
                selectedPanel.style.transform = "translateX(0)";
                selectedPanel.style.width = "";
            }
        }

        openUploadedTabFromRecent(item) {
            if (!item || !this.modal) return;

            const selectedUrl = item.url;

            // 1. Set My Media -> Uploaded state first
            this.mediaLibraryTab = "uploaded";
            this.mediaSearchQuery = "";
            this.mediaTypeFilter = "current";

            // 2. Change only the visible source.
            // Do NOT use switchSource() because that clears selection.
            this.switchSourceViewOnly("my-media");

            // 3. Reset My Media search
            const searchInput = this.modal.querySelector(
                "[data-nmm-media-search]",
            );
            if (searchInput) {
                searchInput.value = "";
            }

            // 4. Make Uploaded the real active tab
            this.modal
                .querySelectorAll("[data-nmm-library-tab]")
                .forEach((button) => {
                    button.classList.toggle(
                        "is-active",
                        button.getAttribute("data-nmm-library-tab") ===
                            "uploaded",
                    );
                });

            this.updateMediaTypeFilterLabel();

            // 5. Find the same upload from the actual Uploaded collection.
            // URL matching is safer because media IDs can change after media reload.
            const uploadedItems = this.getFilteredMyMediaItems();

            const selectedItem =
                uploadedItems.find((media) => media.url === selectedUrl) ||
                this.mediaItems.find((media) => media.url === selectedUrl) ||
                item;

            // 6. Open the page containing that uploaded item.
            const selectedIndex = uploadedItems.findIndex(
                (media) => media.url === selectedUrl,
            );

            this.mediaPage =
                selectedIndex >= 0
                    ? Math.floor(selectedIndex / this.mediaPerPage) + 1
                    : 1;

            // 7. Force-select the recent upload.
            this.forceSelectMediaItem(selectedItem);

            // 8. Render Uploaded only once, with selection already prepared.
            this.renderMyMedia();
        }

        switchSource(source, silent = false) {
            this.activeSource = source || "my-media";

            if (this.modal) {
                this.modal.setAttribute(
                    "data-active-source",
                    this.activeSource,
                );
            }

            this.modal
                .querySelectorAll(this.selectors.source)
                .forEach((button) => {
                    const isActive =
                        button.getAttribute("data-nmm-source") ===
                        this.activeSource;
                    button.classList.toggle("is-active", isActive);
                });

            this.modal
                .querySelectorAll(this.selectors.sourcePanel)
                .forEach((panel) => {
                    const isActive =
                        panel.getAttribute("data-nmm-source-panel") ===
                        this.activeSource;
                    panel.classList.toggle("is-active", isActive);
                });

            if (!silent) {
                this.resetSourceSelectionUi();
            } else {
                this.resetSelectedMedia();
            }

            this.updateMediaTypeFilterLabel();

            if (this.activeSource === "my-media") {
                this.resetMyMediaTabToRecent();
                this.loadMyMedia();

                if (this.mediaLoaded) {
                    this.renderMyMedia();
                }
            }

            if (this.activeSource === "upload") {
                this.syncUploadTypeUI();
                this.renderRecentUploads();
            }

            if (this.activeSource === "link") {
                this.updateLinkModeText();
            }

            if (this.activeSource === "unsplash") {
                this.resetUnsplashDetailsPanel();

                const input = this.modal.querySelector(
                    "[data-nmm-unsplash-search]",
                );
                const query = String(input?.value || "").trim();
                const finalQuery = query || this.getDefaultUnsplashQuery();

                this.renderUnsplashCategorySuggestions(finalQuery);

                if (!this.unsplashItems.length) {
                    this.searchUnsplashImages(finalQuery, 1);
                } else {
                    this.renderUnsplashGrid();
                    this.updateUnsplashPagination();
                }
            }

            if (this.activeSource === "giphy") {
  this.resetGiphyDetailsPanel();
  this.initializeGiphySource();
}

            if (this.activeSource === "ai-library") {
                this.resetAiDetailsPanel();

                if (!this.aiLoaded) {
                    this.loadAiLibrary();
                } else {
                    this.renderAiLibrary();
                }
            }
        }

        getSourceSubtitleLabel(source, type) {
            if (source === "unsplash") {
                if (type === "video") return "Videos";
                if (type === "gif") return "GIFs";
                return "Stock photos";
            }

            if (source === "ai-library") {
                if (type === "video") return "AI Videos";
                if (type === "gif") return "AI GIFs";
                return "AI images";
            }

            return "";
        }

updateSourceAvailability() {
  if (!this.modal) return;

  const imageOnlySources = [
    "unsplash",
    "ai-library",
  ];

  /*
   * In GIF mode only Unsplash
   * should be completely hidden.
   *
   * GIF mode keeps:
   * - My Media
   * - Upload
   * - GIPHY
   * - AI Library
   * - Link
   */
  const hiddenInGifSources = [
    "unsplash",
  ];

  this.modal
    .querySelectorAll(this.selectors.source)
    .forEach((button) => {

      const source =
        button.getAttribute(
          "data-nmm-source"
        );

      /*
       * Reset visibility first.
       *
       * Important when changing:
       * GIF -> Image
       * GIF -> Video
       */
      button.hidden = false;


      /*
       * ---------------------------------
       * GIF MODE SOURCE VISIBILITY
       * ---------------------------------
       *
       * Only Unsplash is hidden.
       */
      if (
        this.targetMediaType === "gif" &&
        hiddenInGifSources.includes(source)
      ) {

        button.hidden = true;
        button.disabled = true;

        button.classList.remove(
          "is-disabled"
        );

        return;
      }


      /*
       * ---------------------------------
       * GIPHY
       * ---------------------------------
       *
       * GIPHY exists ONLY in GIF mode.
       *
       * Image -> hidden
       * Video -> hidden
       * GIF   -> visible
       */
      if (source === "giphy") {

        const isGifMode =
          this.targetMediaType === "gif";

        button.hidden =
          !isGifMode;

        button.disabled =
          !isGifMode;

        /*
         * GIPHY should never appear
         * as a disabled source.
         */
        button.classList.remove(
          "is-disabled"
        );

        return;
      }


      /*
       * ---------------------------------
       * IMAGE-ONLY SOURCES
       * ---------------------------------
       *
       * Unsplash
       * AI Library
       */
      const isImageOnly =
        imageOnlySources.includes(
          source
        );

      const shouldDisable =
        isImageOnly &&
        this.targetMediaType !== "image";


      button.disabled =
        shouldDisable;

      button.classList.toggle(
        "is-disabled",
        shouldDisable
      );


      /*
       * Preserve existing
       * Coming soon badge behavior.
       */
      let badge =
        button.querySelector(
          ".nmm__source-badge"
        );


      if (shouldDisable) {

        if (!badge) {

          badge =
            document.createElement(
              "span"
            );

          badge.className =
            "nmm__source-badge";

          badge.textContent =
            "Coming soon";

          button.appendChild(
            badge
          );
        }

      } else if (badge) {

        badge.remove();
      }
    });


  /*
   * ---------------------------------
   * GIF FALLBACK
   * ---------------------------------
   *
   * Example:
   *
   * User is on Unsplash
   * then changes Image -> GIF.
   *
   * Unsplash becomes hidden,
   * so safely go to My Media.
   */
  if (
    this.targetMediaType === "gif" &&
    hiddenInGifSources.includes(
      this.activeSource
    )
  ) {

    this.switchSource(
      "my-media",
      true
    );

    return;
  }


  /*
   * ---------------------------------
   * GIPHY FALLBACK
   * ---------------------------------
   *
   * Example:
   *
   * GIF -> GIPHY
   *
   * then user selects Image
   * or Video.
   *
   * GIPHY becomes unavailable.
   */
  if (
    this.activeSource === "giphy" &&
    this.targetMediaType !== "gif"
  ) {

    this.switchSource(
      "my-media",
      true
    );

    return;
  }


  /*
   * ---------------------------------
   * EXISTING IMAGE-ONLY FALLBACK
   * ---------------------------------
   */
  if (
    this.targetMediaType !== "image" &&
    imageOnlySources.includes(
      this.activeSource
    )
  ) {

    this.switchSource(
      "my-media",
      true
    );
  }
}

        openFromSelectedMedia(options = {}) {
            const node = this.getBuilderSelectedNode();
            return this.open(node, options);
        }

        updateCurrentFramePreview() {
            if (!this.modal) return;

            const preview = this.modal.querySelector(
                this.selectors.currentPreview,
            );
            const typeEl = this.modal.querySelector(this.selectors.currentType);
            const dimensionEl = this.modal.querySelector(
                this.selectors.currentDimension,
            );
            const sourceEl = this.modal.querySelector(
                this.selectors.currentSource,
            );

            const isBackgroundMode = this.mode === "background-image";

            const src = isBackgroundMode
                ? this.getBackgroundImageSource(this.selectedNode)
                : this.getNodeSource(this.selectedNode);

            const type = isBackgroundMode
                ? "image"
                : this.currentMediaType || "image";
            const dimensions = this.getNodeDimensions(this.selectedNode);

            if (typeEl) typeEl.textContent = this.capitalize(type);
            if (dimensionEl) dimensionEl.textContent = dimensions;
            if (sourceEl)
                sourceEl.textContent = src
                    ? this.shortenText(src, 42)
                    : "No media selected";

            if (!preview) return;

            if (!src) {
                preview.innerHTML = `
  <span class="nmm__preview-placeholder">
    ${isBackgroundMode ? "No image" : "Preview"}
  </span>
`;
                return;
            }

            if (type === "video") {
                const isIframe =
                    this.selectedNode &&
                    (this.selectedNode.tagName || "").toLowerCase() ===
                        "iframe";

                if (isIframe) {
                    const youtubeThumb = this.getYouTubeThumbnail(src);

                    if (youtubeThumb || this.isYouTubeUrl(src)) {
                        preview.innerHTML = `
    <span class="nmm__preview-media nmm__youtube-preview" aria-label="YouTube video preview">
      ${this.getYouTubeLogoSvg()}
    </span>
  `;
                        return;
                    }

                    preview.innerHTML = `
    <div class="nmm__iframe-preview">
      <i class="fa-solid fa-play"></i>
      <span>Video embed</span>
    </div>
  `;
                    return;
                }

                preview.innerHTML = `
    <video class="nmm__preview-media" src="${this.escapeAttr(src)}" muted playsinline preload="metadata"></video>
  `;
                return;
            }

            if (type === "gif") {
                preview.innerHTML = `<img class="nmm__preview-media" src="${this.escapeAttr(src)}" alt="Current GIF preview">`;
                return;
            }

            preview.innerHTML = `<img class="nmm__preview-media" src="${this.escapeAttr(src)}" alt="Current media preview">`;
        }

        getBuilderSelectedNode() {
            const builder = window.Vvveb && window.Vvveb.Builder;

            if (builder && builder.selectedEl) {
                const selectedEl = builder.selectedEl;

                if (selectedEl.get && typeof selectedEl.get === "function") {
                    return selectedEl.get(0);
                }

                if (selectedEl instanceof Element) {
                    return selectedEl;
                }

                if (selectedEl[0] instanceof Element) {
                    return selectedEl[0];
                }
            }

            if (builder && builder.selectedElement instanceof Element) {
                return builder.selectedElement;
            }

            if (builder && builder.selectedNode instanceof Element) {
                return builder.selectedNode;
            }

            const canvasDocument = this.getCanvasDocument();

            if (canvasDocument) {
                const selectedFromCanvas = canvasDocument.querySelector(
                    ".vvveb-selected, .selected, [data-vvveb-selected], [data-component-selected]",
                );

                if (selectedFromCanvas) return selectedFromCanvas;
            }

            const selectedFromEditor = document.querySelector(
                ".vvveb-selected, .selected, [data-vvveb-selected], [data-component-selected]",
            );

            return selectedFromEditor || null;
        }

        getCanvasIframe() {
            return (
                document.querySelector("#iframe-wrapper iframe") ||
                document.querySelector("#canvas iframe") ||
                document.querySelector("iframe")
            );
        }

        getCanvasDocument() {
            const iframe = this.getCanvasIframe();

            if (!iframe) return null;

            try {
                return iframe.contentDocument || iframe.contentWindow.document;
            } catch (error) {
                return null;
            }
        }

        resolveMediaNode(node) {
            if (!node) return null;

            if (this.isSupportedMediaNode(node)) {
                return node;
            }

            if (node.querySelector) {
                const childMedia = node.querySelector(
                    "img, video, iframe, picture img, source",
                );

                if (childMedia) {
                    if ((childMedia.tagName || "").toLowerCase() === "source") {
                        return childMedia.closest("video") || childMedia;
                    }

                    return childMedia;
                }
            }

            return node;
        }

        isSupportedMediaNode(node) {
            if (!node || !node.tagName) return false;

            const tagName = node.tagName.toLowerCase();

            if (["img", "video", "iframe", "picture"].includes(tagName)) {
                return true;
            }

            const src = this.getNodeSource(node);

            return /\.(jpg|jpeg|png|webp|svg|gif|mp4|webm|ogg)(\?|#|$)/i.test(
                src || "",
            );
        }

        detectNodeMediaType(node) {
            if (!node) return "image";

            const tagName = (node.tagName || "").toLowerCase();
            const src = this.getNodeSource(node);

            if (tagName === "video") return "video";
            if (tagName === "iframe") return "video";

            if (/\.gif(\?|#|$)/i.test(src || "")) return "gif";

            const dataType =
                node.getAttribute &&
                (node.getAttribute("data-media-type") ||
                    node.getAttribute("data-zg-media-type"));

            if (dataType === "gif") return "gif";
            if (dataType === "video") return "video";
            if (dataType === "image") return "image";

            return "image";
        }

        getNodeSource(node) {
            if (!node) return "";

            const tagName = (node.tagName || "").toLowerCase();

            if (tagName === "picture") {
                const img = node.querySelector("img");
                return img ? this.getNodeSource(img) : "";
            }

            if (tagName === "img") {
                return (
                    node.currentSrc ||
                    node.src ||
                    node.getAttribute("src") ||
                    node.getAttribute("data-src") ||
                    node.getAttribute("data-original") ||
                    ""
                );
            }

            if (tagName === "video") {
                const source = node.querySelector("source");

                return (
                    node.currentSrc ||
                    node.src ||
                    node.getAttribute("src") ||
                    (source && (source.src || source.getAttribute("src"))) ||
                    node.getAttribute("data-src") ||
                    node.getAttribute("poster") ||
                    ""
                );
            }

            if (tagName === "source") {
                return node.src || node.getAttribute("src") || "";
            }

            if (tagName === "iframe") {
                return node.src || node.getAttribute("src") || "";
            }

            return (
                node.getAttribute("src") ||
                node.getAttribute("data-src") ||
                node.getAttribute("data-original") ||
                node.getAttribute("poster") ||
                ""
            );
        }

        getNodeDimensions(node) {
            if (!node) return "Auto";

            const rect = node.getBoundingClientRect
                ? node.getBoundingClientRect()
                : null;

            const renderedWidth =
                rect && rect.width ? rect.width : node.offsetWidth;
            const renderedHeight =
                rect && rect.height ? rect.height : node.offsetHeight;

            if (renderedWidth > 0 && renderedHeight > 0) {
                return `${Math.round(renderedWidth)} × ${Math.round(renderedHeight)}`;
            }

            const width =
                node.getAttribute("width") ||
                node.naturalWidth ||
                node.videoWidth;
            const height =
                node.getAttribute("height") ||
                node.naturalHeight ||
                node.videoHeight;

            const numericWidth = Number.parseFloat(width);
            const numericHeight = Number.parseFloat(height);

            if (numericWidth > 0 && numericHeight > 0) {
                return `${Math.round(numericWidth)} × ${Math.round(numericHeight)}`;
            }

            return "Auto";
        }

        async loadMyMedia(force = false) {
            if (this.mediaLoading) return;

            if (this.mediaLoaded && !force) {
                this.renderMyMedia();
                this.renderRecentUploads();
                return;
            }

            this.mediaLoading = true;
            this.mediaError = null;
            this.renderMyMediaLoading();

            try {
                const response = await fetch("/user/media-list", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to load media");
                }

                const data = await response.json();
                this.mediaItems = this.normalizeMediaListResponse(data);
                this.mediaLoaded = true;
                this.mediaLoading = false;
                this.renderMyMedia();
                this.renderRecentUploads();
            } catch (error) {
                this.mediaLoading = false;
                this.mediaError = error;
                this.renderMyMediaError();
            }
        }

        normalizeMediaListResponse(data) {
            let items = [];

            if (Array.isArray(data)) {
                items = data;
            } else if (Array.isArray(data.files)) {
                items = data.files;
            } else if (Array.isArray(data.data)) {
                items = data.data;
            } else if (Array.isArray(data.results)) {
                items = data.results;
            }

            return items
                .map((item, index) =>
                    this.normalizeMediaItem(item, index, data),
                )
                .filter(Boolean)
                .sort((a, b) => {
                    const aTime = a.uploadedAt
                        ? new Date(a.uploadedAt).getTime()
                        : 0;
                    const bTime = b.uploadedAt
                        ? new Date(b.uploadedAt).getTime()
                        : 0;

                    if (aTime || bTime) return bTime - aTime;
                    return (b.index || 0) - (a.index || 0);
                });
        }

        normalizeMediaItem(item, index, rootData = {}) {
            let url = "";
            let name = "";
            let size = "";
            let dimensions = "Auto";
            let uploadedAt = "";

            if (typeof item === "string") {
                url = item;
                name = this.getFileNameFromUrl(url);
                size =
                    rootData.sizes && rootData.sizes[url]
                        ? rootData.sizes[url]
                        : "";
                uploadedAt =
                    rootData.times && rootData.times[url]
                        ? rootData.times[url]
                        : "";
            } else if (item && typeof item === "object") {
                url =
                    item.url ||
                    item.path ||
                    item.src ||
                    item.image ||
                    item.full ||
                    "";
                name =
                    item.name ||
                    item.filename ||
                    item.title ||
                    this.getFileNameFromUrl(url);
                size = item.size || "";
                uploadedAt =
                    item.created_at ||
                    item.createdAt ||
                    item.uploaded_at ||
                    item.uploadedAt ||
                    "";

                if (item.width && item.height) {
                    dimensions = `${item.width} × ${item.height}`;
                } else if (item.dimensions) {
                    dimensions = item.dimensions;
                }
            }

            if (!url) return null;

            const type = this.detectMediaTypeFromUrl(url, item && item.meta);

            return {
                id: `media-${index}-${btoa(url).replace(/=+$/g, "")}`,
                index,
                url,
                thumbnail: this.getMediaThumbnail(url, type),
                name: name || this.getFileNameFromUrl(url),
                type,
                size: this.formatMediaSize(size),
                rawSize: size,
                dimensions,
                uploadedAt,
                source: "my-media",
                raw: item,
            };
        }

        detectMediaTypeFromUrl(url, meta = null) {
            const cleanUrl = String(url || "")
                .split("?")[0]
                .split("#")[0]
                .toLowerCase();
            const ext = cleanUrl.split(".").pop();

            if (
                ["mp4", "webm", "ogg", "mov", "m4v", "avi", "mkv"].includes(ext)
            ) {
                return "video";
            }

            if (ext === "gif") {
                return "gif";
            }

            if (ext === "pdf") {
                return "pdf";
            }

            if (["jpg", "jpeg", "png", "webp", "svg", "avif"].includes(ext)) {
                return "image";
            }

            if (meta && meta.type) {
                const metaType = String(meta.type).toLowerCase();
                if (metaType.includes("video")) return "video";
                if (metaType.includes("gif")) return "gif";
                if (metaType.includes("pdf")) return "pdf";

                if (metaType.includes("image")) return "image";
            }

            return "image";
        }

        getMediaThumbnail(url, type) {
            const youtubeThumb = this.getYouTubeThumbnail(url);

            if (youtubeThumb) {
                return youtubeThumb;
            }

            if (type === "video") {
                return "";
            }

            return url;
        }

        getCurrentBuilderDocument() {
            return (
                window.FrameDocument ||
                window.Vvveb?.Builder?.iframe?.contentDocument ||
                window.Vvveb?.Builder?.frameDoc ||
                document.querySelector("iframe")?.contentDocument ||
                null
            );
        }

        toAbsoluteMediaUrl(url, doc = null) {
            const value = String(url || "").trim();

            if (!value) return "";
            if (value.startsWith("data:")) return "";
            if (value.startsWith("blob:")) return "";

            try {
                const base =
                    doc?.baseURI ||
                    window.Vvveb?.themeBaseUrl ||
                    window.mediaPath ||
                    window.location.href;

                return new URL(value, base).href;
            } catch (error) {
                return value;
            }
        }

        extractCssBackgroundUrls(styleValue = "") {
            const urls = [];
            const regex = /url\((['"]?)(.*?)\1\)/gi;
            let match;

            while ((match = regex.exec(styleValue))) {
                const url = match[2];

                if (url) {
                    urls.push(url);
                }
            }

            return urls;
        }

        createProjectMediaItem(url, index, extra = {}) {
            const absoluteUrl = this.toAbsoluteMediaUrl(url, extra.doc);

            if (!absoluteUrl) return null;

            const type = this.detectMediaTypeFromUrl(absoluteUrl, extra.meta);

            if (!["image", "video", "gif"].includes(type)) return null;

            return {
                id: `project-${index}-${btoa(absoluteUrl).replace(/=+$/g, "")}`,
                index,
                url: absoluteUrl,
                thumbnail: this.getMediaThumbnail(absoluteUrl, type),
                name:
                    this.getFileNameFromUrl(absoluteUrl) ||
                    `Project media ${index + 1}`,
                type,
                size: "Template asset",
                rawSize: "",
                dimensions: "Auto",
                uploadedAt: "",
                source: "project",
                projectSource: extra.source || "Template",
                raw: {
                    originalUrl: url,
                    nodeTag: extra.nodeTag || "",
                },
            };
        }

        refreshProjectMediaItems() {
            const doc = this.getCurrentBuilderDocument();

            if (!doc) {
                this.projectMediaItems = [];
                this.projectMediaLoaded = true;
                return;
            }

            const collected = [];

            const addUrl = (url, extra = {}) => {
                if (!url) return;

                const absoluteUrl = this.toAbsoluteMediaUrl(url, doc);

                if (!absoluteUrl) return;
                if (collected.some((item) => item.absoluteUrl === absoluteUrl))
                    return;

                collected.push({
                    url,
                    absoluteUrl,
                    ...extra,
                    doc,
                });
            };

            doc.querySelectorAll("img").forEach((img) => {
                addUrl(
                    img.getAttribute("src") ||
                        img.getAttribute("data-src") ||
                        img.getAttribute("data-original") ||
                        img.currentSrc,
                    {
                        source: "Image in template",
                        nodeTag: "img",
                    },
                );
            });

            doc.querySelectorAll("video").forEach((video) => {
                addUrl(
                    video.getAttribute("src") ||
                        video.currentSrc ||
                        video.querySelector("source")?.getAttribute("src") ||
                        video.getAttribute("poster"),
                    {
                        source: "Video in template",
                        nodeTag: "video",
                    },
                );
            });

            doc.querySelectorAll("source").forEach((source) => {
                addUrl(source.getAttribute("src") || source.src, {
                    source: "Video source in template",
                    nodeTag: "source",
                });
            });

            doc.querySelectorAll("iframe[data-media-embed='video']").forEach(
                (iframe) => {
                    addUrl(iframe.getAttribute("src") || iframe.src, {
                        source: "Video embed in template",
                        nodeTag: "iframe",
                        meta: {
                            type: "video",
                        },
                    });
                },
            );

            doc.querySelectorAll("[style]").forEach((el) => {
                const styleValue = el.getAttribute("style") || "";

                this.extractCssBackgroundUrls(styleValue).forEach((url) => {
                    addUrl(url, {
                        source: "Background image in template",
                        nodeTag: el.tagName?.toLowerCase() || "",
                    });
                });
            });

            this.projectMediaItems = collected
                .map((item, index) =>
                    this.createProjectMediaItem(item.absoluteUrl, index, item),
                )
                .filter(Boolean);

            this.projectMediaLoaded = true;
        }

        getFilteredMyMediaItems() {
            let items = [];

            if (this.mediaLibraryTab === "favorites") {
                items = this.favoriteMediaItems.slice();
            } else if (this.mediaLibraryTab === "uploaded") {
                items = this.mediaItems
                    .filter((item) => {
                        const source = String(
                            item.source || item.sourceKind || "",
                        ).toLowerCase();

                        return (
                            source === "my-media" ||
                            source === "upload" ||
                            source === "uploaded" ||
                            !source
                        );
                    })
                    .filter((item) => {
                        return !String(item.id || "").startsWith("project-");
                    });
            } else if (this.mediaLibraryTab === "project") {
                this.refreshProjectMediaItems();
                items = this.projectMediaItems.slice();
            } else {
                items = [...this.recentMediaItems, ...this.mediaItems];

                const seen = new Set();
                items = items.filter((item) => {
                    if (!item || !item.url || seen.has(item.url)) return false;
                    seen.add(item.url);
                    return true;
                });
            }

            const filterType =
                this.mediaTypeFilter === "current"
                    ? this.targetMediaType
                    : this.mediaTypeFilter;

            if (filterType && filterType !== "all") {
                items = items.filter((item) => item.type === filterType);
            }

            const query = String(this.mediaSearchQuery || "")
                .trim()
                .toLowerCase();

            if (query) {
                items = items.filter((item) => {
                    return (
                        String(item.name || "")
                            .toLowerCase()
                            .includes(query) ||
                        String(item.title || "")
                            .toLowerCase()
                            .includes(query) ||
                        String(item.alt || "")
                            .toLowerCase()
                            .includes(query) ||
                        String(item.type || "")
                            .toLowerCase()
                            .includes(query) ||
                        String(item.url || "")
                            .toLowerCase()
                            .includes(query)
                    );
                });
            }

            return items;
        }

        renderMyMediaLoading() {
            const grid = this.modal.querySelector("[data-nmm-my-media-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <span class="nmm__mini-loader"></span>
      <strong>Loading media...</strong>
      <p>Please wait while we load your uploaded files.</p>
    </div>
  `;
        }

        renderMyMediaError() {
            const grid = this.modal.querySelector("[data-nmm-my-media-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <strong>Could not load media</strong>
      <p>Please try again.</p>
      <button type="button" class="nmm__small-action" data-nmm-retry-media>Retry</button>
    </div>
  `;

            const retry = grid.querySelector("[data-nmm-retry-media]");
            if (retry) {
                retry.addEventListener("click", () => this.loadMyMedia(true));
            }
        }

        renderMediaPagination(totalPages = 1) {
            let pagination = this.modal.querySelector(
                "[data-nmm-media-pagination]",
            );
            const grid = this.modal.querySelector("[data-nmm-my-media-grid]");
            if (!grid) return;

            if (!pagination) {
                pagination = document.createElement("div");
                pagination.className = "nmm__stock-pagination";
                pagination.setAttribute("data-nmm-media-pagination", "");
                pagination.innerHTML = `
      <button type="button" data-nmm-media-prev aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span data-nmm-media-page>1</span>
      <button type="button" data-nmm-media-next aria-label="Next page">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;
                grid.insertAdjacentElement("afterend", pagination);
            }

            const pageLabel = pagination.querySelector("[data-nmm-media-page]");
            const prev = pagination.querySelector("[data-nmm-media-prev]");
            const next = pagination.querySelector("[data-nmm-media-next]");

            pagination.hidden = totalPages <= 1;

            if (pageLabel) pageLabel.textContent = String(this.mediaPage || 1);
            if (prev) prev.disabled = this.mediaPage <= 1;
            if (next) next.disabled = this.mediaPage >= totalPages;

            prev.onclick = () => {
                if (this.mediaPage <= 1) return;
                this.mediaPage -= 1;
                this.renderMyMedia();
            };

            next.onclick = () => {
                if (this.mediaPage >= totalPages) return;
                this.mediaPage += 1;
                this.renderMyMedia();
            };
        }

        renderMyMedia() {
            const grid = this.modal.querySelector("[data-nmm-my-media-grid]");
            if (!grid) return;

            if (this.mediaLoading) {
                this.renderMyMediaLoading();
                return;
            }

            if (this.mediaError) {
                this.renderMyMediaError();
                return;
            }

            const items = this.getFilteredMyMediaItems();

            const totalPages = Math.max(
                1,
                Math.ceil(items.length / this.mediaPerPage),
            );
            this.mediaPage = Math.min(this.mediaPage || 1, totalPages);

            const start = (this.mediaPage - 1) * this.mediaPerPage;
            const pagedItems = items.slice(start, start + this.mediaPerPage);

            if (!items.length) {
                const emptyTitle =
                    this.mediaLibraryTab === "project"
                        ? "No template assets found"
                        : "No media found";

                const emptyText =
                    this.mediaLibraryTab === "project"
                        ? "Images, videos, GIFs, and background assets from this template will appear here."
                        : "Try changing the search or media type filter.";

                grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-regular fa-folder-open"></i>
      </div>
      <strong>${emptyTitle}</strong>
      <p>${emptyText}</p>
    </div>
  `;
                return;
            }

            grid.innerHTML = pagedItems
                .map((item) => this.getMediaCardHtml(item))
                .join("");

            this.renderMediaPagination(totalPages);

            const allVisibleItems = this.getFilteredMyMediaItems();

            grid.querySelectorAll("[data-nmm-media-id]").forEach((card) => {
                card.addEventListener("click", () => {
                    const id = card.getAttribute("data-nmm-media-id");
                    const item = allVisibleItems.find(
                        (media) => media.id === id,
                    );
                    if (item) this.selectMediaItem(item);
                });
            });

            grid.querySelectorAll("[data-nmm-media-menu]").forEach((button) => {
                button.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const id = button.getAttribute("data-nmm-media-menu");
                    const visibleItems = this.getFilteredMyMediaItems();
                    const item =
                        this.mediaItems.find(
                            (media) => String(media.id) === String(id),
                        ) ||
                        visibleItems.find(
                            (media) => String(media.id) === String(id),
                        );

                    if (item) {
                        this.openMediaActionMenu(button, item);
                    }
                });
            });
        }

        getMediaSourceLabel(item) {
            if (!item) return "";

            const source = String(
                item.source || item.sourceKind || "",
            ).toLowerCase();

            if (source === "project") return "In this project";
            if (source === "unsplash" || source === "unsplash-link")
                return "Unsplash";
            if (source === "ai-library") return "AI Library";
            if (
                source === "link" ||
                source === "direct" ||
                source === "youtube"
            )
                return "Link";
            if (source === "upload" || source === "my-media") return "Uploaded";

            return "Uploaded";
        }

        getMediaCardMeta(item) {
            const type = this.capitalize(item.type || "image");

            if (this.mediaLibraryTab === "uploaded") {
                return `${type}${item.size ? ` · ${item.size}` : ""}`;
            }

            return `${type} · ${this.getMediaSourceLabel(item)}`;
        }

        getMediaPreviewHtml(item, className = "nmm__preview-media") {
            if (!item) return "";

            const url = item.thumbnail || item.url || "";
            const name = item.name || "Media preview";

            if (item.type === "video") {
                const rawUrl =
                    item.originalUrl || item.raw?.originalUrl || item.url || "";

                const isYoutube =
                    item.sourceKind === "youtube" ||
                    item.provider === "youtube" ||
                    item.embedProvider === "youtube" ||
                    this.isYouTubeUrl(rawUrl) ||
                    this.isYouTubeUrl(item.url);

                if (isYoutube) {
                    return `
    <span class="${className || ""} nmm__youtube-preview" aria-label="YouTube video preview">
      ${this.getYouTubeLogoSvg()}
    </span>
  `;
                }

                return `
    <video
      class="${className || ""}"
      src="${this.escapeAttr(url)}"
      muted
      playsinline
      preload="metadata"
    ></video>
  `;
            }

            if (item.type === "gif") {
                return `
      <img class="${className}" src="${this.escapeAttr(url)}" alt="${this.escapeAttr(name)}" loading="lazy">
    `;
            }

            if (item.type === "pdf") {
                return `
    <span class="${className} nmm__pdf-preview">
      <i class="fa-regular fa-file-pdf"></i>
    </span>
  `;
            }
            return `
    <img class="${className}" src="${this.escapeAttr(url)}" alt="${this.escapeAttr(name)}" loading="lazy">
  `;
        }

        getMediaCardHtml(item) {
            const isSelected =
                !!this.pendingSelectedMedia &&
                (String(this.pendingSelectedMedia.id || "") ===
                    String(item.id || "") ||
                    (this.pendingSelectedMedia.url &&
                        item.url &&
                        this.pendingSelectedMedia.url === item.url));
            const source = String(
                item.source || item.sourceKind || "",
            ).toLowerCase();

            const showActions =
                source === "my-media" ||
                source === "upload" ||
                source === "uploaded";

            const preview = this.getMediaPreviewHtml(
                item,
                "nmm__media-thumb-media",
            );

            return `

  <div class="nmm__media-card ${isSelected ? "is-selected" : ""}" data-nmm-media-id="${this.escapeAttr(item.id)}" role="button" tabindex="0">
      <span class="nmm__media-thumb">
        ${preview}
        <span class="nmm__media-check"><i class="fa-solid fa-check"></i></span>
      </span>
      ${
          showActions
              ? `
  <span class="nmm__media-actions">
    <button type="button" data-nmm-media-menu="${this.escapeAttr(item.id)}" aria-label="Media options">
      <i class="fa-solid fa-ellipsis"></i>
    </button>
  </span>
`
              : ""
      }
      <span class="nmm__media-name" title="${this.escapeAttr(item.name)}">${this.escapeHtml(item.name)}</span>
    <span class="nmm__media-meta">${this.escapeHtml(this.getMediaCardMeta(item))}</span>
    </div>
  `;
        }

       clearSelectedMedia() {
    this.pendingSelectedMedia = null;
    this.linkCheckedMedia = null;
    this.unsplashSelectedMedia = null;
    this.aiSelectedMedia = null;
    this.giphySelectedMedia = null;

            this.mediaDirty = false;
            this.adjustDirty = false;

            this.updateSelectedMediaPanel();
            this.updateApplyState();
            this.syncSelectionPanelState();

            if (this.activeSource === "my-media") {
                this.renderMyMedia();
            }

            if (this.activeSource === "upload") {
                this.renderRecentUploads();
            }

            if (this.activeSource === "unsplash") {
                this.resetUnsplashDetailsPanel();
                this.renderUnsplashGrid();
            }

            if (this.activeSource === "giphy") {
    this.resetGiphyDetailsPanel();
    this.renderGiphyGrid();
}

            if (this.activeSource === "ai-library") {
                this.resetAiDetailsPanel();
                this.renderAiLibrary();
            }

            this.syncFavoriteButtons();
        }

        selectMediaItem(item) {
            if (
                this.pendingSelectedMedia &&
                item &&
                String(this.pendingSelectedMedia.id) === String(item.id)
            ) {
                this.clearSelectedMedia();
                return;
            }

            this.pendingSelectedMedia = item;
            this.resetAdjustSettingsForSelectedMedia(item);

            this.updateSelectedMediaPanel();
            this.renderMyMedia();
            this.renderRecentUploads();

            this.syncFavoriteButtons();
            this.markMediaDirty();
        }

        syncSelectionPanelState() {
            if (!this.modal) return;

            this.modal.setAttribute(
                "data-has-selected-media",
                this.pendingSelectedMedia ? "true" : "false",
            );

            this.modal.setAttribute(
                "data-has-link-media",
                this.linkCheckedMedia ? "true" : "false",
            );

            this.modal.setAttribute(
                "data-has-unsplash-media",
                this.unsplashSelectedMedia ? "true" : "false",
            );

            this.modal.setAttribute(
                "data-has-ai-media",
                this.aiSelectedMedia ? "true" : "false",
            );

            this.modal.setAttribute(
  "data-has-giphy-media",
  this.giphySelectedMedia
    ? "true"
    : "false"
);
        }

        updateSelectedMediaPanel() {
            const item = this.pendingSelectedMedia;

            const preview = this.modal.querySelector(
                "[data-nmm-selected-preview]",
            );
            const name = this.modal.querySelector("[data-nmm-selected-name]");
            const type = this.modal.querySelector("[data-nmm-selected-type]");
            const size = this.modal.querySelector("[data-nmm-selected-size]");

            if (!preview || !name || !type || !size) return;

            if (!item) {
                preview.innerHTML = `
      <span class="nmm__preview-placeholder">No media selected</span>
    `;

                name.textContent = "Not selected";
                type.textContent = "Pending";
                size.textContent = "Not available";

                this.syncSelectionPanelState();
                return;
            }

            preview.innerHTML = this.getMediaPreviewHtml(
                item,
                "nmm__preview-media",
            );

            const secondMeta = this.getMyMediaSecondMeta(item);

            name.textContent = item.name || "Selected media";
            type.textContent = this.capitalize(item.type);
            size.textContent = secondMeta.value;

            this.syncSelectionPanelState();
            this.expandAdjustMedia();
        }

        resetSelectedMedia() {
            this.pendingSelectedMedia = null;
            this.updateSelectedMediaPanel();

            this.mediaDirty = false;

            this.updateApplyState();
            this.syncFavoriteButtons();
        }

        updateMediaTypeFilterLabel() {
            const label =
                this.modal &&
                this.modal.querySelector("[data-nmm-type-filter-label]");
            if (!label) return;

            const map = {
                current: `Current: ${this.capitalize(this.targetMediaType)}`,
                all: "All types",
                image: "Images",
                video: "Videos",
                gif: "GIFs",
            };

            label.textContent = map[this.mediaTypeFilter] || "Current type";
        }

        getFileNameFromUrl(url) {
            const clean = String(url || "")
                .split("?")[0]
                .split("#")[0];
            return decodeURIComponent(clean.split("/").pop() || "media-file");
        }

        formatMediaSize(size) {
            if (!size) return "";

            if (typeof size === "string") {
                return size;
            }

            const bytes = Number(size);

            if (!Number.isFinite(bytes) || bytes <= 0) return "";

            if (bytes < 1024) return `${bytes} B`;
            if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;

            return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
        }

        escapeHtml(value) {
            return String(value || "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        syncUploadTypeUI() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-upload-type]")
                .forEach((button) => {
                    const type = button.getAttribute("data-nmm-upload-type");
                    button.classList.toggle(
                        "is-active",
                        type === this.targetMediaType,
                    );
                });

            const input = this.modal.querySelector("[data-nmm-upload-input]");
            const title = this.modal.querySelector("[data-nmm-upload-title]");
            const help = this.modal.querySelector("[data-nmm-upload-help]");
            const limit = this.modal.querySelector("[data-nmm-upload-limit]");

            const config = this.getUploadConfig(this.targetMediaType);

            if (input) input.setAttribute("accept", config.accept);
            if (title) title.textContent = config.title;
            if (help) help.textContent = config.help;
            if (limit) limit.textContent = config.limitText;

            this.hideUploadError();
            this.hideUploadProgress();
        }

        getUploadConfig(type = this.targetMediaType) {
            const config = {
                image: {
                    accept: ".jpg,.jpeg,.png,.webp,.svg,image/jpeg,image/png,image/webp,image/svg+xml",
                    title: "Drag & drop your image here",
                    help: "Supported formats: JPG, PNG, WEBP, SVG",
                    limitText: "Max file size: 5MB",
                    maxSize: 5 * 1024 * 1024,
                },
                video: {
                    accept: ".mp4,.webm,.ogg,.mov,video/mp4,video/webm,video/ogg,video/quicktime",
                    title: "Drag & drop your video here",
                    help: "Supported formats: MP4, WebM, OGG, MOV",
                    limitText:
                        "Recommended: short videos under 15 seconds. Max file size: 50MB",
                    maxSize: 50 * 1024 * 1024,
                },
                gif: {
                    accept: ".gif,image/gif",
                    title: "Drag & drop your GIF here",
                    help: "Supported format: GIF",
                    limitText: "Max file size: 15MB",
                    maxSize: 15 * 1024 * 1024,
                },
                pdf: {
                    accept: ".pdf,application/pdf",
                    title: "Drag & drop your PDF here",
                    help: "Supported format: PDF",
                    limitText: "Max file size: 25MB",
                    maxSize: 25 * 1024 * 1024,
                },
            };

            return config[type] || config.image;
        }

        validateUploadFile(file) {
            const type = this.targetMediaType;
            const config = this.getUploadConfig(type);

            if (!file) return "No file selected.";

            if (file.size > config.maxSize) {
                return `File is too large. ${config.limitText}`;
            }

            const fileName = file.name.toLowerCase();
            const mime = (file.type || "").toLowerCase();

            if (type === "image") {
                const valid =
                    mime.startsWith("image/") &&
                    !mime.includes("gif") &&
                    /\.(jpg|jpeg|png|webp|svg)$/i.test(fileName);

                if (!valid)
                    return "Please upload a valid image file: JPG, PNG, WEBP, or SVG.";
            }

            if (type === "video") {
                const validExt = /\.(mp4|webm|ogg|mov|m4v)$/i.test(fileName);
                const validMime =
                    mime.startsWith("video/") ||
                    mime === "application/octet-stream" ||
                    mime === "";

                const valid = validExt && validMime;

                if (!valid) {
                    return "Please upload a valid video file: MP4, WebM, OGG, MOV, or M4V.";
                }
            }

            if (type === "gif") {
                const valid = mime === "image/gif" || /\.gif$/i.test(fileName);

                if (!valid) return "Please upload a valid GIF file.";
            }

            if (type === "pdf") {
                const valid =
                    mime === "application/pdf" || /\.pdf$/i.test(fileName);

                if (!valid) return "Please upload a valid PDF file.";
            }
            return "";
        }

        async uploadFiles(files = []) {
            if (this.uploading) return;

            const fileList = Array.from(files || []).filter(Boolean);

            if (!fileList.length) return;

            const validFiles = [];
            const errors = [];

            fileList.forEach((file) => {
                const validationError = this.validateUploadFile(file);

                if (validationError) {
                    errors.push(`${file.name}: ${validationError}`);
                } else {
                    validFiles.push(file);
                }
            });

            if (!validFiles.length) {
                this.showUploadError(errors[0] || "Please select valid files.");
                return;
            }

            if (errors.length) {
                this.showUploadError(errors[0]);
            } else {
                this.hideUploadError();
            }

            this.uploading = true;
            this.uploadProgress = 0;

            const uploadedItems = [];
            const failedItems = [];

            this.showUploadProgress(
                3,
                validFiles.length === 1
                    ? "Preparing upload..."
                    : `Preparing ${validFiles.length} uploads...`,
            );

            try {
                for (let i = 0; i < validFiles.length; i++) {
                    const file = validFiles[i];
                    const currentIndex = i + 1;

                    this.showUploadProgress(
                        Math.round((i / validFiles.length) * 90),
                        `Uploading ${currentIndex} of ${validFiles.length}: ${file.name}`,
                    );

                    try {
                        const uploadedItem = await this.uploadSingleFile(file);
                        const normalized = this.normalizeUploadedResponse(
                            uploadedItem,
                            file,
                        );

                        if (normalized) {
                            uploadedItems.push(normalized);
                        }
                    } catch (error) {
                        failedItems.push({
                            file,
                            message: error.message || "Upload failed.",
                        });
                    }
                }

                if (uploadedItems.length) {
                    this.mediaLoaded = true;

                    const uploadedUrls = new Set(
                        uploadedItems.map((item) => item.url),
                    );

                    this.mediaItems = [
                        ...uploadedItems,
                        ...this.mediaItems.filter(
                            (item) => !uploadedUrls.has(item.url),
                        ),
                    ];

                    this.mediaLibraryTab = "uploaded";
                    this.mediaPage = 1;

                    // Professional Recent behavior:
                    // newly uploaded files should appear first in Recent.
                    uploadedItems
                        .slice()
                        .reverse()
                        .forEach((item) => {
                            this.rememberRecentMedia({
                                ...item,
                                source: item.source || "upload",
                                sourceKind: item.sourceKind || "upload",
                            });
                        });

                    this.modal
                        .querySelectorAll("[data-nmm-library-tab]")
                        .forEach((btn) => {
                            btn.classList.toggle(
                                "is-active",
                                btn.getAttribute("data-nmm-library-tab") ===
                                    "uploaded",
                            );
                        });

                    this.renderRecentUploads();

                    if (this.activeSource === "my-media") {
                        this.renderMyMedia();
                        this.selectMediaItem(uploadedItems[0]);
                    }
                }

                this.uploading = false;

                if (failedItems.length && uploadedItems.length) {
                    this.showUploadProgress(
                        100,
                        `${uploadedItems.length} uploaded, ${failedItems.length} failed`,
                    );

                    this.showUploadError(
                        `${failedItems[0].file.name}: ${failedItems[0].message}`,
                    );
                } else if (failedItems.length) {
                    this.showUploadError(
                        `${failedItems[0].file.name}: ${failedItems[0].message}`,
                    );
                    this.hideUploadProgress();
                    return;
                } else {
                    this.showUploadProgress(
                        100,
                        uploadedItems.length === 1
                            ? "Upload complete"
                            : `${uploadedItems.length} files uploaded`,
                    );
                }

                setTimeout(() => this.hideUploadProgress(), 1000);
            } catch (error) {
                this.uploading = false;
                this.showUploadError(
                    error.message || "Upload failed. Please try again.",
                );
                this.hideUploadProgress();
            }
        }

        uploadSingleFile(file) {
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("file", file);

                const xhr = new XMLHttpRequest();

                xhr.open("POST", "/user/media-upload", true);
                xhr.withCredentials = true;

                const csrfToken = this.getCookie("XSRF-TOKEN");

                if (csrfToken) {
                    xhr.setRequestHeader(
                        "X-XSRF-TOKEN",
                        decodeURIComponent(csrfToken),
                    );
                }

                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

                xhr.upload.onprogress = (event) => {
                    if (!event.lengthComputable) return;

                    const percent = Math.round(
                        (event.loaded / event.total) * 100,
                    );
                    this.showUploadProgress(
                        percent,
                        `Uploading... ${percent}%`,
                    );
                };

                xhr.onload = () => {
                    let data = null;

                    try {
                        data = JSON.parse(xhr.responseText || "{}");
                    } catch (error) {
                        reject(new Error("Invalid upload response."));
                        return;
                    }

                    if (
                        xhr.status >= 200 &&
                        xhr.status < 300 &&
                        (data.success || data.url || data.path)
                    ) {
                        resolve(data);
                        return;
                    }

                    reject(
                        new Error(
                            data.error || data.message || "Upload failed.",
                        ),
                    );
                };

                xhr.onerror = () =>
                    reject(new Error("Upload failed. Check your connection."));
                xhr.send(formData);
            });
        }

        normalizeUploadedResponse(data, file) {
            const url =
                data.url ||
                data.path ||
                data.src ||
                (data.file && (data.file.url || data.file.path)) ||
                "";

            if (!url) return null;

            const type =
                this.detectMediaTypeFromUrl(url) || this.targetMediaType;

            return {
                id: `upload-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                index: Date.now(),
                url,
                thumbnail: this.getMediaThumbnail(url, type),
                name:
                    data.filename ||
                    data.name ||
                    file.name ||
                    this.getFileNameFromUrl(url),
                type,
                size: this.formatMediaSize(data.size || file.size),
                rawSize: data.size || file.size,
                dimensions: data.dimensions || "Auto",
                uploadedAt: new Date().toISOString(),
                source: "upload",
                raw: data,
            };
        }

        renderRecentUploads() {
            const grid =
                this.modal &&
                this.modal.querySelector("[data-nmm-upload-recent-grid]");
            if (!grid) return;

            const items = this.mediaItems
                .filter((item) => item.type === this.targetMediaType)
                .slice(0, this.recentUploadLimit);

            if (!items.length) {
                grid.innerHTML = `
      <div class="nmm__media-state nmm__media-state--compact">
        <div class="nmm__state-icon">
          <i class="fa-regular fa-folder-open"></i>
        </div>
        <strong>No recent uploads</strong>
        <p>${this.capitalize(this.targetMediaType)} uploads will appear here.</p>
      </div>
    `;
                return;
            }

            grid.innerHTML = items
                .map((item) => {
                    const selected =
                        this.pendingSelectedMedia &&
                        this.pendingSelectedMedia.id === item.id;

                    const preview = this.getMediaPreviewHtml(
                        item,
                        "nmm__recent-preview-media",
                    );

                    return `
        <button type="button" class="nmm__recent-card ${selected ? "is-selected" : ""}" data-nmm-recent-id="${this.escapeAttr(item.id)}">
          ${preview}
          <span class="nmm__media-check"><i class="fa-solid fa-check"></i></span>
        </button>
      `;
                })
                .join("");

            grid.querySelectorAll("[data-nmm-recent-id]").forEach((card) => {
                card.addEventListener("click", () => {
                    const id = card.getAttribute("data-nmm-recent-id");

                    const item = this.mediaItems.find((media) => {
                        return String(media.id) === String(id);
                    });

                    if (!item) return;

                    this.openUploadedTabFromRecent(item);
                });
            });
        }

        showUploadProgress(percent, text) {
            const wrap = this.modal.querySelector("[data-nmm-upload-progress]");
            const fill = this.modal.querySelector(
                "[data-nmm-upload-progress-fill]",
            );
            const label = this.modal.querySelector(
                "[data-nmm-upload-progress-text]",
            );

            if (wrap) wrap.removeAttribute("hidden");
            if (fill)
                fill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
            if (label) label.textContent = text || `Uploading... ${percent}%`;
        }

        hideUploadProgress() {
            const wrap = this.modal.querySelector("[data-nmm-upload-progress]");
            const fill = this.modal.querySelector(
                "[data-nmm-upload-progress-fill]",
            );

            if (wrap) wrap.setAttribute("hidden", "");
            if (fill) fill.style.width = "0%";
        }

        showUploadError(message) {
            const error = this.modal.querySelector("[data-nmm-upload-error]");
            if (!error) return;

            error.textContent = message || "Upload failed.";
            error.removeAttribute("hidden");
        }

        hideUploadError() {
            const error = this.modal.querySelector("[data-nmm-upload-error]");
            if (!error) return;

            error.textContent = "";
            error.setAttribute("hidden", "");
        }

        getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(";").shift();
            return "";
        }

        isVideoToVisualConversion(targetNode, media) {
            if (!targetNode || !media) return false;

            const currentType = this.detectNodeMediaType(targetNode);
            const selectedType =
                media.type || this.detectMediaTypeFromUrl(media.url) || "image";

            return (
                currentType === "video" &&
                ["image", "gif"].includes(selectedType)
            );
        }

        replaceVideoWithImageOrGif(targetNode, media) {
            const videoNode = this.resolveMediaNode(targetNode);

            if (!videoNode || !media || !media.url) {
                return {
                    success: false,
                    message: "Missing video node or selected media.",
                };
            }

            const selectedType =
                media.type || this.detectMediaTypeFromUrl(media.url) || "image";

            if (!["image", "gif"].includes(selectedType)) {
                return {
                    success: false,
                    message: "Selected media is not an image or GIF.",
                };
            }

            const wrapper =
                this.resolveUndoSnapshotNode(videoNode) ||
                videoNode.parentElement;

            const renderedRect = videoNode.getBoundingClientRect();
            const ownerDocument = videoNode.ownerDocument || document;

            this.removeLiveMediaOverlayHelpers(wrapper);
            this.removeLiveMediaOverlayHelpers(videoNode.parentElement);

            const img = ownerDocument.createElement("img");

            const keepAttributes = ["id", "class", "data-vvveb-id"];

            keepAttributes.forEach((attribute) => {
                if (
                    videoNode.hasAttribute &&
                    videoNode.hasAttribute(attribute)
                ) {
                    img.setAttribute(
                        attribute,
                        videoNode.getAttribute(attribute),
                    );
                }
            });

            img.setAttribute("src", media.url);

            img.setAttribute(
                "alt",
                media.alt || this.getAltTextFromMediaName(media.name || ""),
            );

            img.setAttribute(
                "loading",
                this.adjustSettings.imageLoading || "lazy",
            );

            img.setAttribute("data-zg-media-type", selectedType);

            img.style.display = "block";
            img.style.maxWidth = "100%";
            img.style.objectFit = "cover";

            if (renderedRect.width > 0) {
                img.style.width = `${Math.round(renderedRect.width)}px`;
            }

            if (renderedRect.height > 0) {
                img.style.height = `${Math.round(renderedRect.height)}px`;
            }

            videoNode.replaceWith(img);

            this.removeLiveMediaOverlayHelpers(wrapper);
            this.removeLiveMediaOverlayHelpers(img.parentElement);

            if (
                window.Vvveb?.Builder &&
                typeof Vvveb.Builder.selectNode === "function"
            ) {
                try {
                    Vvveb.Builder.selectNode(img);
                    Vvveb.TreeList?.selectComponent?.(img);
                    Vvveb.Builder.loadNodeComponent?.(img);

                    const selectBox = document.getElementById("select-box");

                    if (window.Vvveb?.component?.resizable) {
                        selectBox?.classList.add("resizable");
                        Vvveb.Builder.resizeMode = Vvveb.component.resizeMode;
                    } else {
                        selectBox?.classList.remove("resizable");
                    }
                } catch (error) {}
            }

            this.selectedNode = img;

            return {
                success: true,
                node: img,
                wrapper,
            };
        }

        isYoutubeAdjustTarget(node) {
            const mediaNode = this.resolveMediaNode(node);

            if (!mediaNode || !mediaNode.matches) return false;

            return (
                mediaNode.matches("iframe[data-media-embed='video']") &&
                this.isYouTubeUrl(this.getNodeSource(mediaNode))
            );
        }

        captureYoutubeIframeAttributeState(node) {
            const iframe = this.resolveMediaNode(node);

            if (!iframe || !this.isYoutubeAdjustTarget(iframe)) {
                return null;
            }

            const attrs = [
                "src",
                "allow",
                "allowfullscreen",
                "data-media-embed",
                "data-embed-provider",
                "data-zg-media-type",
                "style",
                "width",
                "height",
            ];

            const state = {
                node: iframe,
                attrs: {},
            };

            attrs.forEach((attr) => {
                state.attrs[attr] = iframe.hasAttribute(attr)
                    ? iframe.getAttribute(attr)
                    : null;
            });

            return state;
        }

        addYoutubeIframeAttributeUndoMutations(beforeState) {
            if (
                !beforeState ||
                !beforeState.node ||
                !window.Vvveb?.Undo ||
                typeof Vvveb.Undo.addMutation !== "function"
            ) {
                return;
            }

            const iframe = beforeState.node;

            Object.keys(beforeState.attrs).forEach((attr) => {
                const oldValue = beforeState.attrs[attr];
                const newValue = iframe.hasAttribute(attr)
                    ? iframe.getAttribute(attr)
                    : null;

                if (oldValue === newValue) return;

                Vvveb.Undo.addMutation({
                    type: "attributes",
                    target: iframe,
                    attributeName: attr,
                    oldValue,
                    newValue,
                });
            });
        }

        applySelectedMedia() {
            if (!this.validateImageClickLinkBeforeApply()) {
                return;
            }

            if (this.mode === "link-pdf") {
                if (
                    !this.pendingSelectedMedia ||
                    !this.pendingSelectedMedia.url
                ) {
                    this.showApplyMessage(
                        "Please select or upload a PDF first.",
                    );
                    return;
                }

                if (this.onApply) {
                    this.onApply(this.pendingSelectedMedia);
                }

                this.rememberRecentMedia(this.pendingSelectedMedia);

                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();

                this.resetMyMediaTabToRecent();
                this.close();
                return;
            }

            const rawTargetNode =
                this.selectedNode || this.getBuilderSelectedNode();
            const targetNode = this.resolveMediaNode(rawTargetNode);

            if (!targetNode) {
                this.showApplyMessage("No editable media element was found.");
                return;
            }

            const hasMediaSelection = !!(
                this.pendingSelectedMedia && this.pendingSelectedMedia.url
            );
            const hasAdjustChanges = !!this.adjustDirty;

            if (this.mode === "background-image") {
                if (!hasMediaSelection) {
                    this.showApplyMessage("Please select an image first.");
                    return;
                }

                if (this.onApply) {
                    this.onApply(this.pendingSelectedMedia);
                }

                this.rememberRecentMedia(this.pendingSelectedMedia);
                this.markBuilderDirty();

                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();

                this.resetMyMediaTabToRecent();
                this.close();
                return;
            }

            if (!hasMediaSelection && !hasAdjustChanges) {
                this.showApplyMessage("No changes to apply.");
                return;
            }

            const beforeSnapshot = this.captureMediaDomSnapshot(targetNode);
            const originalMediaWrapper = targetNode.parentElement;

            if (!hasMediaSelection && hasAdjustChanges) {
                const beforeYoutubeState =
                    this.captureYoutubeIframeAttributeState(targetNode);

                this.applyAdjustSettingsToNode(targetNode);

                if (beforeYoutubeState) {
                    this.addYoutubeIframeAttributeUndoMutations(
                        beforeYoutubeState,
                    );
                } else {
                    const afterSnapshot =
                        this.captureMediaDomSnapshot(targetNode);
                    this.addMediaDomUndoSnapshot(
                        targetNode,
                        beforeSnapshot,
                        afterSnapshot,
                    );
                }

                this.markBuilderDirty();
                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();

                this.resetMyMediaTabToRecent();
                this.close();
                return;
            }

            if (
                hasMediaSelection &&
                this.isVideoToVisualConversion(
                    targetNode,
                    this.pendingSelectedMedia,
                )
            ) {
                const result = this.replaceVideoWithImageOrGif(
                    targetNode,
                    this.pendingSelectedMedia,
                );

                if (!result.success) {
                    this.showApplyMessage(
                        result.message || "Could not replace video.",
                    );
                    return;
                }

                const finalNode = result.node;

                if (hasAdjustChanges) {
                    this.applyAdjustSettingsToNode(finalNode);
                }

                this.removeLiveMediaOverlayHelpers(result.wrapper);
                this.removeLiveMediaOverlayHelpers(finalNode.parentElement);

                const afterSnapshot = this.captureMediaDomSnapshot(finalNode);
                this.addMediaDomUndoSnapshot(
                    finalNode,
                    beforeSnapshot,
                    afterSnapshot,
                );
                this.sanitizeRecentMediaUndoHistory();

                this.rememberRecentMedia(this.pendingSelectedMedia);
                this.markBuilderDirty();

                this.trackAppliedGiphyMedia();

                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();

                this.resetMyMediaTabToRecent();
                this.close();
                return;
            }

            const customMedia = window.Vvveb && window.Vvveb.CustomMedia;

            if (
                !customMedia ||
                typeof customMedia.applySelectedMedia !== "function"
            ) {
                console.warn(
                    "[NewMediaModal] Vvveb.CustomMedia is not available. Falling back to Phase 4A same-type apply.",
                );
                this.applySelectedMediaSameType();

                const fallbackNode = this.resolveMediaNode(
                    this.selectedNode || targetNode,
                );

                this.removeLiveMediaOverlayHelpers(fallbackNode);
                this.removeLiveMediaOverlayHelpers(fallbackNode?.parentElement);

                this.applyAdjustSettingsToNode(fallbackNode);

                const afterSnapshot = this.captureMediaDomSnapshot(
                    fallbackNode || targetNode,
                );
                this.addMediaDomUndoSnapshot(
                    fallbackNode || targetNode,
                    beforeSnapshot,
                    afterSnapshot,
                );

                this.markBuilderDirty();
                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();

                this.resetMyMediaTabToRecent();
                this.close();
                return;
            }

            try {
                if (typeof customMedia.init === "function") {
                    customMedia.init();
                }

                const prepared = this.prepareLegacyCustomMediaApply(
                    customMedia,
                    targetNode,
                    this.pendingSelectedMedia,
                );

                if (!prepared) {
                    this.showApplyMessage(
                        "Could not prepare media replacement.",
                    );
                    return;
                }

                if (
                    typeof customMedia.removeMediaEditOverlaysForNode ===
                    "function"
                ) {
                    customMedia.removeMediaEditOverlaysForNode(targetNode);
                }

                customMedia.applySelectedMedia();
                this.sanitizeRecentMediaUndoHistory();

                const finalNode =
                    this.findNewestMediaNodeNear(
                        targetNode,
                        originalMediaWrapper,
                    ) ||
                    this.syncSelectedNodeAfterLegacyApply(targetNode) ||
                    targetNode;

                this.removeLiveMediaOverlayHelpers(finalNode);
                this.removeLiveMediaOverlayHelpers(finalNode?.parentElement);

                if (
                    typeof customMedia.removeMediaEditOverlaysForNode ===
                    "function"
                ) {
                    customMedia.removeMediaEditOverlaysForNode(
                        finalNode || targetNode,
                    );
                }

                if (hasAdjustChanges) {
                    this.applyAdjustSettingsToNode(finalNode);

                    const afterSnapshot =
                        this.captureMediaDomSnapshot(finalNode);
                    this.addMediaDomUndoSnapshot(
                        finalNode,
                        beforeSnapshot,
                        afterSnapshot,
                    );
                    this.sanitizeRecentMediaUndoHistory();
                } else {
                    // Preserve image link if present, but do not touch alt/loading.
                    this.applyImageLinkOnlyToNode(finalNode);
                }

                if (hasMediaSelection) {
                    this.rememberRecentMedia(this.pendingSelectedMedia);
                }

                this.markBuilderDirty();
                this.trackAppliedGiphyMedia();
                this.adjustDirty = false;
                this.mediaDirty = false;
                this.updateApplyState();
                this.resetMyMediaTabToRecent();

                this.close();
            } catch (error) {
                console.error("[NewMediaModal] Media apply failed:", error);
                this.showApplyMessage(
                    "Could not apply changes. Please try again.",
                );
            }
        }

        markBuilderDirty() {
            try {
                window.hasSaved = false;

                if (window.Vvveb && window.Vvveb.Builder) {
                    Vvveb.Builder.isDirty = true;
                    Vvveb.Builder.changed = true;
                }

                if (window.Vvveb && window.Vvveb.Undo) {
                    if (typeof Vvveb.Undo.hasChanges !== "function") {
                        Vvveb.Undo.hasChanges = function () {
                            return true;
                        };
                    }
                }
            } catch (error) {
                console.warn(
                    "[NewMediaModal] Could not mark builder dirty.",
                    error,
                );
            }
        }

        prepareLegacyCustomMediaApply(customMedia, targetNode, media) {
            if (!customMedia || !targetNode || !media || !media.url) {
                return false;
            }

            const resolvedNode =
                typeof customMedia.resolveActualMediaNode === "function"
                    ? customMedia.resolveActualMediaNode(targetNode)
                    : targetNode;

            if (!resolvedNode) return false;

            const originalType =
                typeof customMedia.getNodeMediaType === "function"
                    ? customMedia.getNodeMediaType(resolvedNode)
                    : this.detectNodeMediaType(resolvedNode);

            const selectedType =
                media.type || this.detectMediaTypeFromUrl(media.url) || "image";

            const originalUrl = media.originalUrl || media.url;

            const isYouTube =
                selectedType === "video" &&
                (media.sourceKind === "youtube" ||
                    (typeof customMedia.isYouTubeInput === "function" &&
                        customMedia.isYouTubeInput(originalUrl)));

            const pendingSrc =
                isYouTube &&
                typeof customMedia.extractYouTubeEmbedSrc === "function"
                    ? customMedia.extractYouTubeEmbedSrc(originalUrl) ||
                      media.url
                    : media.url;

            customMedia.selectedNode = resolvedNode;
            customMedia.activeTab = selectedType;

            // Alt text is display-only in Adjust Media.
            // Do not auto-change DOM alt during image replacement,
            // otherwise image-to-image undo becomes two steps: alt + src.
            const adjustedAlt =
                resolvedNode && resolvedNode.getAttribute
                    ? resolvedNode.getAttribute("alt") || ""
                    : "";

            customMedia.selectedMedia = {
                src: pendingSrc || media.url,
                alt: adjustedAlt,
                title: "",
                description: media.description || "",
            };

            customMedia.mediaContext = {
                originalType: originalType,
                activeTabType: selectedType,
                pendingType: selectedType,
                pendingSrc: pendingSrc || media.url,
                pendingEmbedType: isYouTube ? "youtube" : null,
                videoMode: isYouTube ? "embed" : "native",
                embedProvider: isYouTube ? "youtube" : null,
                conversionRequired: originalType !== selectedType,
                canApply: true,
            };

            if (customMedia.imageProperties) {
                customMedia.imageProperties.alt = adjustedAlt;
                customMedia.imageProperties.loading =
                    this.adjustSettings.imageLoading || "lazy";
            }

            if (customMedia.elements) {
                if (customMedia.elements.urlError) {
                    customMedia.elements.urlError.textContent = "";
                    customMedia.elements.urlError.style.display = "none";
                }

                if (customMedia.elements.urlInput) {
                    customMedia.elements.urlInput.value =
                        pendingSrc || media.url;
                }

                if (customMedia.elements.altInput) {
                    customMedia.elements.altInput.value = adjustedAlt;
                }
            }

            if (typeof customMedia.updateVideoMode === "function") {
                customMedia.updateVideoMode();
            }

            if (typeof customMedia.refreshUiState === "function") {
                customMedia.refreshUiState();
            }

            this.syncAdjustSettingsToLegacyCustomMedia(customMedia);

            return true;
        }

        findNewestMediaNodeNear(targetNode, originalWrapper = null) {
            const wrapper =
                targetNode?.parentElement ||
                originalWrapper ||
                this.selectedNode?.parentElement ||
                null;

            if (!wrapper) return null;

            return (
                wrapper.querySelector("iframe[data-media-embed='video']") ||
                wrapper.querySelector("iframe") ||
                wrapper.querySelector("video") ||
                wrapper.querySelector("img") ||
                null
            );
        }

        syncSelectedNodeAfterLegacyApply(fallbackNode) {
            let selectedAfterApply = null;

            const isElementNode = (value) => {
                return !!(value && value.nodeType === 1 && value.tagName);
            };

            try {
                const builder = window.Vvveb && window.Vvveb.Builder;

                if (builder && isElementNode(builder.selectedNode)) {
                    selectedAfterApply = builder.selectedNode;
                }

                if (
                    !selectedAfterApply &&
                    builder &&
                    isElementNode(builder.selectedElement)
                ) {
                    selectedAfterApply = builder.selectedElement;
                }

                if (!selectedAfterApply && builder && builder.selectedEl) {
                    if (isElementNode(builder.selectedEl)) {
                        selectedAfterApply = builder.selectedEl;
                    } else if (
                        builder.selectedEl.get &&
                        typeof builder.selectedEl.get === "function"
                    ) {
                        const candidate = builder.selectedEl.get(0);

                        if (isElementNode(candidate)) {
                            selectedAfterApply = candidate;
                        }
                    } else if (isElementNode(builder.selectedEl[0])) {
                        selectedAfterApply = builder.selectedEl[0];
                    }
                }
            } catch (error) {
                selectedAfterApply = null;
            }

            this.selectedNode = selectedAfterApply || fallbackNode;

            if (
                this.selectedNode &&
                window.Vvveb &&
                window.Vvveb.Builder &&
                typeof Vvveb.Builder.selectNode === "function"
            ) {
                try {
                    Vvveb.Builder.selectNode(this.selectedNode);
                } catch (error) {}
            }

            return this.selectedNode;
        }

        applySelectedMediaSameType() {
            if (!this.pendingSelectedMedia) {
                console.warn("[NewMediaModal] No selected media to apply.");
                return;
            }

            const targetNode = this.resolveMediaNode(this.selectedNode);

            if (!targetNode) {
                console.warn("[NewMediaModal] No target media node found.");
                return;
            }

            const currentType = this.detectNodeMediaType(targetNode);
            const selectedType =
                this.pendingSelectedMedia.type ||
                this.detectMediaTypeFromUrl(this.pendingSelectedMedia.url);

            if (currentType !== selectedType) {
                console.warn(
                    `[NewMediaModal] Cross-type conversion is not part of Phase 4A. Current: ${currentType}, Selected: ${selectedType}`,
                );

                this.showApplyMessage(
                    `This is a ${currentType} to ${selectedType} change. Media type conversion will be added in Phase 4B.`,
                );

                return;
            }

            const result = this.replaceSameTypeMedia(
                targetNode,
                this.pendingSelectedMedia,
            );

            if (!result.success) {
                console.warn("[NewMediaModal] Apply failed:", result.message);
                this.showApplyMessage(
                    result.message || "Could not apply selected media.",
                );
                return;
            }
this.addBasicUndoMutation(result);

this.rememberRecentMedia(
    this.pendingSelectedMedia
);

this.trackAppliedGiphyMedia();

            if (
                window.Vvveb?.Builder &&
                typeof Vvveb.Builder.selectNode === "function"
            ) {
                Vvveb.Builder.selectNode(result.node || targetNode);
            }

            if (typeof window.Vvveb?.Builder?.setHtml === "function") {
                try {
                    Vvveb.Builder.setHtml();
                } catch (error) {
                    // Not critical. Some Vvveb builds do not use setHtml this way.
                }
            }

            this.resetMyMediaTabToRecent();
            this.close();
        }

        replaceSameTypeMedia(node, media) {
            if (!node || !media || !media.url) {
                return {
                    success: false,
                    message: "Missing target node or selected media URL.",
                };
            }

            const tagName = (node.tagName || "").toLowerCase();
            const mediaType =
                media.type || this.detectMediaTypeFromUrl(media.url);
            const oldState = this.captureNodeState(node);

            if (mediaType === "image" || mediaType === "gif") {
                if (tagName !== "img") {
                    return {
                        success: false,
                        message:
                            "Selected media type does not match the current element.",
                    };
                }

                node.setAttribute("src", media.url);
                node.removeAttribute("srcset");

                node.setAttribute("data-zg-media-type", mediaType);

                return {
                    success: true,
                    node,
                    media,
                    oldState,
                    newState: this.captureNodeState(node),
                };
            }

            if (mediaType === "video") {
                if (tagName !== "video" && tagName !== "iframe") {
                    return {
                        success: false,
                        message:
                            "Selected video can only replace an existing video in Phase 4A.",
                    };
                }

                if (tagName === "video") {
                    this.setVideoSource(node, media.url);
                    node.setAttribute("data-zg-media-type", "video");

                    if (media.name) {
                        node.setAttribute("data-zg-media-name", media.name);
                    }

                    return {
                        success: true,
                        node,
                        media,
                        oldState,
                        newState: this.captureNodeState(node),
                    };
                }

                if (tagName === "iframe") {
                    node.setAttribute("src", media.url);
                    node.setAttribute("data-zg-media-type", "video");

                    return {
                        success: true,
                        node,
                        media,
                        oldState,
                        newState: this.captureNodeState(node),
                    };
                }
            }

            return {
                success: false,
                message: "Unsupported media replacement.",
            };
        }

        setVideoSource(videoNode, url) {
            if (!videoNode) return;

            let source = videoNode.querySelector("source");

            if (source) {
                source.setAttribute("src", url);
            } else {
                videoNode.setAttribute("src", url);
            }

            if (typeof videoNode.load === "function") {
                videoNode.load();
            }
        }

        captureNodeState(node) {
            if (!node) return null;

            const tagName = (node.tagName || "").toLowerCase();

            const state = {
                node,
                tagName,
                src: node.getAttribute("src"),
                srcset: node.getAttribute("srcset"),
                dataSrc: node.getAttribute("data-src"),
                alt: node.getAttribute("alt"),
                poster: node.getAttribute("poster"),
                dataMediaType: node.getAttribute("data-zg-media-type"),
                dataMediaName: node.getAttribute("data-zg-media-name"),
                innerHTML: "",
            };

            if (tagName === "video") {
                state.innerHTML = node.innerHTML;
            }

            return state;
        }

        addBasicUndoMutation(result) {
            if (!result || !result.node || !result.oldState || !result.newState)
                return;

            if (
                !window.Vvveb?.Undo ||
                typeof Vvveb.Undo.addMutation !== "function"
            ) {
                return;
            }

            try {
                const tagName = (result.node.tagName || "").toLowerCase();

                if (tagName === "video") {
                    Vvveb.Undo.addMutation({
                        type: "childList",
                        target: result.node,
                        oldValue: result.oldState.innerHTML,
                        newValue: result.newState.innerHTML,
                    });
                    return;
                }

                Vvveb.Undo.addMutation({
                    type: "attributes",
                    target: result.node,
                    attributeName: "src",
                    oldValue: result.oldState.src,
                    newValue: result.newState.src,
                });
            } catch (error) {
                console.warn(
                    "[NewMediaModal] Could not add undo mutation.",
                    error,
                );
            }
        }

        getAltTextFromMediaName(name) {
            return String(name || "")
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]+/g, " ")
                .replace(/\s+/g, " ")
                .trim();
        }

        showApplyMessage(message) {
            const selectedPanel = this.modal.querySelector(".nmm__selected");

            if (!selectedPanel) {
                alert(message);
                return;
            }

            let messageBox = selectedPanel.querySelector(
                "[data-nmm-apply-message]",
            );

            if (!messageBox) {
                messageBox = document.createElement("div");
                messageBox.setAttribute("data-nmm-apply-message", "");
                messageBox.className = "nmm__apply-message";
                selectedPanel.appendChild(messageBox);
            }

            messageBox.textContent = message;

            clearTimeout(this.applyMessageTimer);
            this.applyMessageTimer = setTimeout(() => {
                if (messageBox) messageBox.remove();
            }, 3500);
        }

        updateLinkModeText() {
            if (!this.modal) return;

            const config = this.getLinkModeConfig(this.targetMediaType);

            const title = this.modal.querySelector("[data-nmm-link-title]");
            const description = this.modal.querySelector(
                "[data-nmm-link-description]",
            );
            const label = this.modal.querySelector("[data-nmm-link-label]");
            const input = this.modal.querySelector("[data-nmm-link-input]");
            const help = this.modal.querySelector("[data-nmm-link-help]");
            const saveTitle = this.modal.querySelector(
                "[data-nmm-link-save-title]",
            );
            const detailsTitle = this.modal.querySelector(
                "[data-nmm-link-details-title]",
            );
            const note = this.modal.querySelector("[data-nmm-link-note]");

            if (title) title.textContent = config.title;
            if (description) description.textContent = config.description;
            if (label) label.textContent = config.label;
            if (input) input.placeholder = config.placeholder;
            if (help) help.textContent = config.help;
            if (saveTitle) saveTitle.textContent = config.saveTitle;
            if (detailsTitle) detailsTitle.textContent = config.detailsTitle;
            if (note) note.textContent = config.note;
        }

        getLinkModeConfig(type = this.targetMediaType) {
            const map = {
                image: {
                    title: "Add image from link",
                    description:
                        "Paste a direct image URL ending in JPG, PNG, WEBP, or SVG.",
                    label: "Image URL",
                    placeholder: "https://example.com/image.jpg",
                    help: "Only direct image links are supported. Example: .jpg, .png, .webp, .svg",
                    saveTitle: "Save this image to My Media",
                    detailsTitle: "Link Details",
                    note: "This linked image will replace the current media after you click Apply Changes.",
                },
                video: {
                    title: "Add video from link",
                    description:
                        "Paste a direct video URL or YouTube URL / iframe.",
                    label: "Video URL",
                    placeholder:
                        "https://youtube.com/watch?v=... or https://example.com/video.mp4",
                    help: "Supported: YouTube URL, YouTube iframe, .mp4, .webm, .ogg, .mov",
                    saveTitle: "Save this video to My Media",
                    detailsTitle: "Video Link Details",
                    note: "This linked video will replace the current media after you click Apply Changes.",
                },
                gif: {
                    title: "Add GIF from link",
                    description: "Paste a direct GIF URL ending in .gif.",
                    label: "GIF URL",
                    placeholder: "https://example.com/animation.gif",
                    help: "Only direct GIF links are supported. Example: .gif",
                    saveTitle: "Save this GIF to My Media",
                    detailsTitle: "GIF Link Details",
                    note: "This linked GIF will replace the current media after you click Apply Changes.",
                },
            };

            return map[type] || map.image;
        }

        checkLinkMedia() {
            const input = this.modal.querySelector("[data-nmm-link-input]");
            const value = String(
                (input && input.value) || this.linkUrl || "",
            ).trim();

            this.hideLinkError();

            if (!value) {
                this.showLinkError("Please paste a media URL first.");
                return;
            }

            const validation = this.validateLinkMediaUrl(
                value,
                this.targetMediaType,
            );

            if (!validation.valid) {
                this.resetLinkCheckState(false);
                this.showLinkError(validation.message);
                return;
            }

            const media = this.createLinkedMediaItem(value, validation);

            this.linkCheckedMedia = media;
            this.pendingSelectedMedia = media;

            this.resetAdjustSettingsForSelectedMedia(media);

            this.renderLinkDetails(media, validation);
            this.syncFavoriteButtons();

            if (this.activeSource !== "link") {
                this.updateSelectedMediaPanel();
            }

            this.markMediaDirty();
        }

        validateLinkMediaUrl(value, activeType = this.targetMediaType) {
            const fallbackResult = this.validateLinkMediaUrlFallback(
                value,
                activeType,
            );

            if (fallbackResult && fallbackResult.valid) {
                return fallbackResult;
            }

            const customMedia = window.Vvveb && window.Vvveb.CustomMedia;

            if (
                customMedia &&
                typeof customMedia.validateUrlForActiveTab === "function"
            ) {
                try {
                    const oldActiveTab = customMedia.activeTab;
                    customMedia.activeTab = activeType;

                    const result = customMedia.validateUrlForActiveTab(value);

                    customMedia.activeTab = oldActiveTab;

                    if (result && typeof result.valid !== "undefined") {
                        return result;
                    }
                } catch (error) {
                    console.warn(
                        "[NewMediaModal] Legacy URL validation failed, using local validation.",
                        error,
                    );
                }
            }

            return fallbackResult;
        }

        validateLinkMediaUrlFallback(value, activeType = this.targetMediaType) {
            const url = String(value || "").trim();

            if (!url) {
                return {
                    valid: false,
                    message: "Please paste a media URL first.",
                };
            }

            const customMedia = window.Vvveb && window.Vvveb.CustomMedia;

            const isYouTube =
                activeType === "video" &&
                customMedia &&
                typeof customMedia.isYouTubeInput === "function" &&
                customMedia.isYouTubeInput(url);

            if (activeType === "video" && isYouTube) {
                return {
                    valid: true,
                    message: "",
                    type: "video",
                    format: "YouTube",
                    sourceKind: "youtube",
                };
            }

            let parsedUrl = null;

            try {
                parsedUrl = new URL(url);
            } catch (error) {
                return { valid: false, message: "Please enter a valid URL." };
            }

            const host = parsedUrl.hostname.toLowerCase();
            const path = parsedUrl.pathname.toLowerCase();
            const ext = (path.split(".").pop() || "").trim();

            if (activeType === "image") {
                const isDirectImage = [
                    "jpg",
                    "jpeg",
                    "png",
                    "webp",
                    "svg",
                    "avif",
                ].includes(ext);

                const isUnsplashImage =
                    host.includes("unsplash.com") ||
                    host.includes("images.unsplash.com");

                const hasImageFormatParam =
                    parsedUrl.searchParams.has("auto") ||
                    parsedUrl.searchParams.has("fm") ||
                    parsedUrl.searchParams.has("fit") ||
                    parsedUrl.searchParams.has("w") ||
                    parsedUrl.searchParams.has("q");

                if (
                    !isDirectImage &&
                    !isUnsplashImage &&
                    !hasImageFormatParam
                ) {
                    return {
                        valid: false,
                        message:
                            "Please enter a direct image URL, Unsplash image URL, or image CDN URL.",
                    };
                }

                return {
                    valid: true,
                    message: "",
                    type: "image",
                    format: isDirectImage ? ext.toUpperCase() : "IMAGE",
                    sourceKind: isUnsplashImage ? "unsplash-link" : "direct",
                };
            }

            if (activeType === "gif") {
                if (ext !== "gif") {
                    return {
                        valid: false,
                        message:
                            "Please enter a direct GIF URL ending in .gif.",
                    };
                }

                return {
                    valid: true,
                    message: "",
                    type: "gif",
                    format: "GIF",
                    sourceKind: "direct",
                };
            }

            if (activeType === "video") {
                if (!["mp4", "webm", "ogg", "mov", "m4v"].includes(ext)) {
                    return {
                        valid: false,
                        message:
                            "Please enter a direct video URL or YouTube URL / iframe.",
                    };
                }

                return {
                    valid: true,
                    message: "",
                    type: "video",
                    format: ext.toUpperCase(),
                    sourceKind: "direct",
                };
            }

            return { valid: false, message: "Unsupported media type." };
        }

        createLinkedMediaItem(value, validation = {}) {
            const customMedia = window.Vvveb && window.Vvveb.CustomMedia;

            const isYouTube =
                validation.sourceKind === "youtube" ||
                (this.targetMediaType === "video" &&
                    customMedia &&
                    typeof customMedia.isYouTubeInput === "function" &&
                    customMedia.isYouTubeInput(value));

            let finalUrl = value;

            if (
                isYouTube &&
                customMedia &&
                typeof customMedia.extractYouTubeEmbedSrc === "function"
            ) {
                finalUrl = customMedia.extractYouTubeEmbedSrc(value) || value;
            }

            const type = validation.type || this.targetMediaType;
            const format =
                validation.format || this.getFileExtensionLabel(finalUrl);

            return {
                id: `link-${Date.now()}`,
                url: finalUrl,
                originalUrl: value,
                thumbnail: isYouTube
                    ? this.getYouTubeThumbnail(finalUrl || value)
                    : type === "image" || type === "gif"
                      ? finalUrl
                      : "",
                name: isYouTube
                    ? "YouTube video"
                    : this.getFileNameFromUrl(finalUrl),
                type,
                size: "External",
                dimensions: "Auto",
                source: "link",
                format,
                sourceKind: isYouTube ? "youtube" : "direct",
                saveToMyMedia: this.linkSaveToMyMedia,
                raw: {
                    originalUrl: value,
                    validation,
                },
            };
        }

        renderLinkDetails(media, validation = {}) {
            const preview = this.modal.querySelector("[data-nmm-link-preview]");
            const meta = this.modal.querySelector("[data-nmm-link-meta]");
            const metaType = this.modal.querySelector(
                "[data-nmm-link-meta-type]",
            );
            const metaSource = this.modal.querySelector(
                "[data-nmm-link-meta-source]",
            );
            const metaFormat = this.modal.querySelector(
                "[data-nmm-link-meta-format]",
            );
            const info = this.modal.querySelector("[data-nmm-link-info]");

            const selectedName = this.modal.querySelector(
                "[data-nmm-link-selected-name]",
            );

            const metaSize = this.modal.querySelector(
                "[data-nmm-link-meta-size]",
            );

            if (!preview) return;

            if (media.type === "image" || media.type === "gif") {
                preview.innerHTML = `
      <img class="nmm__link-preview-media" src="${this.escapeAttr(media.url)}" alt="${this.escapeAttr(media.name)}">
    `;
            } else if (media.sourceKind === "youtube") {
                preview.innerHTML = `
    <div class="nmm__link-video-preview nmm__youtube-preview" aria-label="YouTube video preview">
      ${this.getYouTubeLogoSvg()}
    </div>
  `;
            } else {
                preview.innerHTML = `
      <div class="nmm__link-video-preview">
        <i class="fa-solid fa-play"></i>
        <strong>Video link checked</strong>
        <small>${this.escapeHtml(media.url)}</small>
      </div>
    `;
            }

            if (selectedName) {
                selectedName.textContent = media.name || "Linked media";
            }

            if (meta) meta.removeAttribute("hidden");
            if (metaType) metaType.textContent = this.capitalize(media.type);
            if (metaSource)
                metaSource.textContent =
                    media.sourceKind === "youtube"
                        ? "YouTube"
                        : "External link";
            if (metaSize) {
                metaSize.textContent = this.getMyMediaSecondMeta(media).value;
            }
            if (metaFormat)
                metaFormat.textContent =
                    media.format || validation.format || "Auto";

            if (info) {
                info.textContent = `${this.capitalize(media.type)} link checked. Click Apply Changes to use it.`;
            }

            this.syncSelectionPanelState();
        }

        resetLinkCheckState(clearInput = false) {
            const input =
                this.modal && this.modal.querySelector("[data-nmm-link-input]");
            const preview =
                this.modal &&
                this.modal.querySelector("[data-nmm-link-preview]");
            const meta =
                this.modal && this.modal.querySelector("[data-nmm-link-meta]");
            const info =
                this.modal && this.modal.querySelector("[data-nmm-link-info]");

            if (clearInput && input) input.value = "";

            this.linkCheckedMedia = null;

            if (this.activeSource === "link") {
                this.pendingSelectedMedia = null;
                this.updateSelectedMediaPanel();

                this.mediaDirty = false;
                this.updateApplyState();
            }

            if (preview) {
                preview.innerHTML = `
      <div class="nmm__link-placeholder">
        <span><i class="fa-solid fa-link"></i></span>
        <strong>No link checked yet</strong>
        <p>Once you enter a URL and click Check Link, details will appear here.</p>
      </div>
    `;
            }

            if (meta) meta.setAttribute("hidden", "");

            if (info) {
                info.textContent =
                    "Paste a media URL above and click Check Link to continue.";
            }

            this.hideLinkError();
            this.syncSelectionPanelState();
            this.syncFavoriteButtons();
        }

        showLinkError(message) {
            const error =
                this.modal && this.modal.querySelector("[data-nmm-link-error]");
            if (!error) return;

            error.textContent = message || "Invalid link.";
            error.removeAttribute("hidden");
        }

        hideLinkError() {
            const error =
                this.modal && this.modal.querySelector("[data-nmm-link-error]");
            if (!error) return;

            error.textContent = "";
            error.setAttribute("hidden", "");
        }

        getFileExtensionLabel(url) {
            const clean = String(url || "")
                .split("?")[0]
                .split("#")[0];
            const ext = clean.split(".").pop();

            return ext ? ext.toUpperCase() : "Auto";
        }

     getTemplateCategoryForMedia() {
    const context =
        window.ZigrowTemplateContext ||
        window.__zigrowTemplateContext ||
        window.__zigrowBuilderContext ||
        window.__zigrowAIContext ||
        {};

    const category =
        context.templateCategory ||
        context.template_category ||
        context.businessCategory ||
        context.business_category ||
        context.industry ||
        context.category ||
        "";

    return String(category || "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

getDefaultUnsplashQuery() {
    return this.getTemplateCategoryForMedia() || "website background";
}

        renderUnsplashCategorySuggestions(baseQuery = "") {
            const wrap =
                this.modal &&
                this.modal.querySelector("[data-nmm-unsplash-categories]");
            if (!wrap) return;

            const suggestions = this.getUnsplashCategorySuggestions(baseQuery);
            this.unsplashCategorySuggestions = suggestions;

            wrap.innerHTML = suggestions
                .map((item, index) => {
                    return `
        <button
          type="button"
          class="${index === 0 ? "is-active" : ""}"
          data-nmm-unsplash-category="${this.escapeAttr(item.query)}"
        >
          ${this.escapeHtml(item.label)}
        </button>
      `;
                })
                .join("");

            wrap.querySelectorAll("[data-nmm-unsplash-category]").forEach(
                (button) => {
                    button.addEventListener("click", () => {
                        const query =
                            button.getAttribute("data-nmm-unsplash-category") ||
                            baseQuery;

                        wrap.querySelectorAll(
                            "[data-nmm-unsplash-category]",
                        ).forEach((btn) => {
                            btn.classList.remove("is-active");
                        });

                        button.classList.add("is-active");

                        const input = this.modal.querySelector(
                            "[data-nmm-unsplash-search]",
                        );
                        if (input) input.value = query;

                        this.searchUnsplashImages(query, 1);
                    });
                },
            );
        }

        getUnsplashCategorySuggestions(baseQuery = "") {
            const query = String(baseQuery || this.getDefaultUnsplashQuery())
                .trim()
                .toLowerCase();

            const presets = {
                business: [
                    "business team",
                    "office workspace",
                    "startup office",
                    "business meeting",
                    "professional workspace",
                    "entrepreneur",
                    "team collaboration",
                    "corporate office",
                ],
                restaurant: [
                    "restaurant interior",
                    "cafe interior",
                    "fine dining",
                    "coffee shop",
                    "food table",
                    "bakery interior",
                    "bar restaurant",
                    "chef kitchen",
                ],
                salon: [
                    "beauty salon",
                    "hair salon",
                    "spa room",
                    "makeup studio",
                    "wellness salon",
                    "barber shop",
                    "skincare studio",
                    "massage spa",
                ],
                fitness: [
                    "fitness gym",
                    "personal trainer",
                    "yoga studio",
                    "workout equipment",
                    "healthy lifestyle",
                    "pilates studio",
                    "gym interior",
                    "sports training",
                ],
                "real estate": [
                    "modern home",
                    "real estate house",
                    "luxury apartment",
                    "home interior",
                    "modern living room",
                    "property exterior",
                    "architecture house",
                    "interior design",
                ],
                product: [
                    "product mockup",
                    "cosmetic product",
                    "product photography",
                    "ecommerce product",
                    "packaging design",
                    "bottle product",
                    "minimal product",
                    "brand product",
                ],
                travel: [
                    "travel destination",
                    "hotel room",
                    "mountain travel",
                    "beach resort",
                    "city travel",
                    "tourism",
                    "vacation",
                    "airport travel",
                ],
                healthcare: [
                    "healthcare clinic",
                    "doctor office",
                    "medical team",
                    "clinic interior",
                    "hospital room",
                    "dentist clinic",
                    "pharmacy",
                    "wellness healthcare",
                ],
            };

            const matchedKey = Object.keys(presets).find((key) => {
                return query.includes(key) || key.includes(query);
            });

            if (matchedKey) {
                return presets[matchedKey].map((item) => ({
                    label: this.toTitleCase(item),
                    query: item,
                }));
            }

            const words = query.split(/\s+/).filter(Boolean);
            const main =
                words.slice(0, 3).join(" ") || this.getDefaultUnsplashQuery();

            const generated = [
                main,
                `${main} interior`,
                `${main} background`,
                `${main} workspace`,
                `${main} people`,
                `${main} product`,
                `${main} lifestyle`,
                `${main} modern`,
            ];

            return [...new Set(generated)].map((item) => ({
                label: this.toTitleCase(item),
                query: item,
            }));
        }

        toTitleCase(value) {
            return String(value || "")
                .replace(/[-_]+/g, " ")
                .replace(/\w\S*/g, (text) => {
                    return (
                        text.charAt(0).toUpperCase() +
                        text.slice(1).toLowerCase()
                    );
                });
        }

        async searchUnsplashImages(query = "", page = 1) {
            const cleanQuery = String(
                query || this.getDefaultUnsplashQuery(),
            ).trim();

            if (!cleanQuery) {
                this.renderUnsplashEmpty(
                    "Search stock images",
                    "Enter a keyword to find Unsplash photos.",
                );
                return;
            }

            const searchInput =
    this.modal &&
    this.modal.querySelector("[data-nmm-unsplash-search]");

if (searchInput) {
    searchInput.value = cleanQuery;
}

            this.unsplashQuery = cleanQuery;
            this.unsplashPage = page;
            this.unsplashLoading = true;
            this.unsplashError = "";
            this.unsplashSelectedMedia = null;

            if (this.activeSource === "unsplash") {
                this.pendingSelectedMedia = null;
                this.syncSelectionPanelState();
                this.updateSelectedMediaPanel();
            }

            this.renderUnsplashLoading();

            try {
                const url = `/media/stock/search?query=${encodeURIComponent(cleanQuery)}&page=${encodeURIComponent(page)}&per_page=${encodeURIComponent(this.unsplashPerPage)}`;

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    credentials: "same-origin",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch stock images.");
                }

                const data = await response.json();
                const results = Array.isArray(data.results) ? data.results : [];

                this.unsplashItems = results
                    .map((item, index) =>
                        this.normalizeUnsplashItem(item, index),
                    )
                    .filter((item) => item && item.url);

                if (data.total_pages != null) {
                    this.unsplashHasMore = page < data.total_pages;
                } else {
                    this.unsplashHasMore =
                        this.unsplashItems.length >= this.unsplashPerPage;
                }

                this.unsplashLoading = false;
                this.renderUnsplashGrid();
                this.updateUnsplashPagination();
            } catch (error) {
                this.unsplashLoading = false;
                this.unsplashError =
                    error.message || "Failed to load stock images.";
                this.renderUnsplashError();
            }
        }

        normalizeUnsplashItem(item, index = 0) {
            const alt =
                item.alt ||
                item.description ||
                item.title ||
                `Unsplash image ${index + 1}`;

            const safeName = String(alt)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");

            return {
                id: `unsplash-${item.id || Date.now() + "-" + index}`,
                url: item.full || item.url || item.path || item.thumb || "",
                thumbnail:
                    item.thumb || item.small || item.full || item.url || "",
                name: `${safeName || "unsplash-image"}.jpg`,
                title: alt,
                type: "image",
                size: "External",
                dimensions:
                    item.width && item.height
                        ? `${item.width} × ${item.height}`
                        : "Auto",
                source: "unsplash",
                format: "JPG",
                author: item.author || item.user || "Unknown",
                authorLink: item.author_link || item.authorLink || "",
                unsplashId: item.id || "",
                alt,
                raw: item,
            };
        }

        renderUnsplashLoading() {
            const grid = this.modal.querySelector("[data-nmm-unsplash-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <span class="nmm__mini-loader"></span>
      <strong>Searching Unsplash...</strong>
      <p>Please wait while we load stock images.</p>
    </div>
  `;
        }

        renderUnsplashError() {
            const grid = this.modal.querySelector("[data-nmm-unsplash-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <strong>Could not load images</strong>
      <p>${this.escapeHtml(this.unsplashError || "Please try again.")}</p>
      <button type="button" class="nmm__small-action" data-nmm-unsplash-retry>Retry</button>
    </div>
  `;

            const retry = grid.querySelector("[data-nmm-unsplash-retry]");
            if (retry) {
                retry.addEventListener("click", () => {
                    this.searchUnsplashImages(
                        this.unsplashQuery || this.getDefaultUnsplashQuery(),
                        this.unsplashPage || 1,
                    );
                });
            }
        }

        renderUnsplashEmpty(
            title = "No images found",
            text = "Try another keyword.",
        ) {
            const grid = this.modal.querySelector("[data-nmm-unsplash-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-regular fa-image"></i>
      </div>
      <strong>${this.escapeHtml(title)}</strong>
      <p>${this.escapeHtml(text)}</p>
    </div>
  `;
        }

        renderUnsplashGrid() {
            const grid = this.modal.querySelector("[data-nmm-unsplash-grid]");
            if (!grid) return;

            if (!this.unsplashItems.length) {
                this.renderUnsplashEmpty();
                return;
            }

            grid.innerHTML = this.unsplashItems
                .map((item) => {
                    const selected =
                        this.pendingSelectedMedia &&
                        this.pendingSelectedMedia.id === item.id;

                    return `
        <button type="button" class="nmm__stock-card ${selected ? "is-selected" : ""}" data-nmm-unsplash-id="${this.escapeAttr(item.id)}">
          <span class="nmm__stock-thumb">
            <img src="${this.escapeAttr(item.thumbnail || item.url)}" alt="${this.escapeAttr(item.alt || item.name)}" loading="lazy">
            <span class="nmm__media-check"><i class="fa-solid fa-check"></i></span>
          </span>
          <span class="nmm__stock-credit">Photo by ${this.escapeHtml(item.author || "Unsplash")}</span>
          <small>Unsplash</small>
        </button>
      `;
                })
                .join("");

            grid.querySelectorAll("[data-nmm-unsplash-id]").forEach((card) => {
                card.addEventListener("click", () => {
                    const id = card.getAttribute("data-nmm-unsplash-id");
                    const item = this.unsplashItems.find(
                        (media) => media.id === id,
                    );
                    if (item) this.selectUnsplashItem(item);
                });
            });
        }

        selectUnsplashItem(item) {
            if (
                this.pendingSelectedMedia &&
                item &&
                String(this.pendingSelectedMedia.id) === String(item.id)
            ) {
                this.clearSelectedMedia();
                return;
            }

            const saveCheckbox = this.modal.querySelector(
                "[data-nmm-unsplash-save]",
            );
            const saveToMyMedia = saveCheckbox ? !!saveCheckbox.checked : true;

            this.unsplashSelectedMedia = {
                ...item,
                saveToMyMedia,
            };

            this.pendingSelectedMedia = {
                id: item.id,
                url: item.url,
                originalUrl: item.url,
                thumbnail: item.thumbnail,
                name: item.name,
                title: item.title,
                alt: item.alt,
                type: "image",
                size: item.size || "External",
                dimensions: item.dimensions || "Auto",
                source: "unsplash",
                sourceKind: "unsplash",
                format: "JPG",
                raw: item.raw,
            };

            this.resetAdjustSettingsForSelectedMedia(this.pendingSelectedMedia);

            this.renderUnsplashDetails(item);
            this.syncSelectionPanelState();
            this.renderUnsplashGrid();
            this.syncFavoriteButtons();
            this.markMediaDirty();
        }

        // Resets the Unsplash details panel UI.
        resetUnsplashDetailsPanel() {
            if (!this.modal) return;

            const preview = this.modal.querySelector(
                "[data-nmm-unsplash-preview]",
            );
            const title = this.modal.querySelector("[data-nmm-unsplash-title]");
            const meta = this.modal.querySelector("[data-nmm-unsplash-meta]");

            if (preview) {
                preview.innerHTML = `
      <div class="nmm__link-placeholder">
        <span><i class="fa-regular fa-image"></i></span>
        <strong>No image selected</strong>
        <p>Choose an Unsplash image to see details here.</p>
      </div>
    `;
            }

            if (title) {
                title.textContent = "Not selected";
            }

            if (meta) {
                meta.setAttribute("hidden", "");
            }
        }

        // Resets the AI details panel UI.
        resetAiDetailsPanel() {
            if (!this.modal) return;

            const preview = this.modal.querySelector("[data-nmm-ai-preview]");
            const title = this.modal.querySelector("[data-nmm-ai-title]");
            const meta = this.modal.querySelector("[data-nmm-ai-meta]");

            if (preview) {
                preview.innerHTML = `
      <div class="nmm__link-placeholder">
        <span><i class="fa-solid fa-wand-magic-sparkles"></i></span>
        <strong>No AI image selected</strong>
        <p>Choose an AI image to see details here.</p>
      </div>
    `;
            }

            if (title) {
                title.textContent = "Not selected";
            }

            if (meta) {
                meta.setAttribute("hidden", "");
            }
        }

        renderUnsplashDetails(item) {
            const preview = this.modal.querySelector(
                "[data-nmm-unsplash-preview]",
            );
            const title = this.modal.querySelector("[data-nmm-unsplash-title]");
            const meta = this.modal.querySelector("[data-nmm-unsplash-meta]");
            const author = this.modal.querySelector(
                "[data-nmm-unsplash-author]",
            );
            const size = this.modal.querySelector("[data-nmm-unsplash-size]");

            if (preview) {
                preview.innerHTML = `
      <img class="nmm__link-preview-media" src="${this.escapeAttr(item.url)}" alt="${this.escapeAttr(item.alt || item.name)}">
    `;
            }

            if (title) {
                if (item.author && item.authorLink) {
                    title.innerHTML = `Photo by <a href="${this.escapeAttr(item.authorLink)}" target="_blank" rel="noopener noreferrer">${this.escapeHtml(item.author)}</a> on Unsplash`;
                } else {
                    title.textContent = item.author
                        ? `Photo by ${item.author} on Unsplash`
                        : "Photo from Unsplash";
                }
            }

            if (author) author.textContent = item.author || "Unknown";
            if (size) {
                size.textContent = this.getMyMediaSecondMeta(item).value;
            }
            if (meta) meta.removeAttribute("hidden");
        }

        updateUnsplashPagination() {
            const wrap = this.modal.querySelector(
                "[data-nmm-unsplash-pagination]",
            );
            const pageLabel = this.modal.querySelector(
                "[data-nmm-unsplash-page]",
            );
            const prev = this.modal.querySelector("[data-nmm-unsplash-prev]");
            const next = this.modal.querySelector("[data-nmm-unsplash-next]");

            if (!wrap) return;

            wrap.hidden = !this.unsplashItems.length;

            if (pageLabel)
                pageLabel.textContent = String(this.unsplashPage || 1);
            if (prev) prev.disabled = this.unsplashPage <= 1;
            if (next) next.disabled = !this.unsplashHasMore;
        }

        async loadAiLibrary(force = false) {
            if (this.aiLoading) return;

            if (this.aiLoaded && !force) {
                this.renderAiLibrary();
                return;
            }

            this.aiLoading = true;
            this.aiError = "";
            this.renderAiLoading();

            try {
                const response = await fetch("/user/media-ai-list", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to load AI images.");
                }

                const data = await response.json();

                this.aiItems = this.normalizeAiLibraryResponse(data);
                this.aiLoaded = true;
                this.aiLoading = false;

                this.renderAiLibrary();
            } catch (error) {
                this.aiLoading = false;
                this.aiError = error.message || "Failed to load AI images.";
                this.renderAiError();
            }
        }

        normalizeAiLibraryResponse(data) {
            let items = [];

            if (Array.isArray(data)) {
                items = data;
            } else if (Array.isArray(data.files)) {
                items = data.files;
            } else if (Array.isArray(data.results)) {
                items = data.results;
            } else if (Array.isArray(data.data)) {
                items = data.data;
            }

            return items
                .map((item, index) => this.normalizeAiItem(item, index, data))
                .filter(Boolean);
        }

        normalizeAiItem(item, index = 0, rootData = {}) {
            let url = "";
            let name = "";
            let title = "";
            let style = "";
            let category = "";
            let dimensions = "Auto";

            if (typeof item === "string") {
                url = item;
                name = this.getFileNameFromUrl(url);
                title = name;
                style = this.inferAiStyleFromText(name);
                category = this.inferAiCategoryFromText(name);
            } else if (item && typeof item === "object") {
                url =
                    item.url ||
                    item.path ||
                    item.src ||
                    item.image ||
                    item.full ||
                    "";
                name =
                    item.name || item.filename || this.getFileNameFromUrl(url);
                title = item.title || item.prompt || item.alt || name;

                style =
                    item.style ||
                    item.ai_style ||
                    item.design_style ||
                    this.inferAiStyleFromText(`${name} ${title}`);

                category =
                    item.category ||
                    item.ai_category ||
                    item.type ||
                    item.tag ||
                    this.inferAiCategoryFromText(`${name} ${title}`);

                if (item.width && item.height) {
                    dimensions = `${item.width} × ${item.height}`;
                } else if (item.dimensions) {
                    dimensions = item.dimensions;
                }
            }

            if (!url) return null;

            const meta =
                item && typeof item === "object"
                    ? item.meta || (rootData.meta && rootData.meta[url]) || {}
                    : (rootData.meta && rootData.meta[url]) || {};

            if (!style && meta.style) style = meta.style;
            if (!category && meta.category) category = meta.category;
            if (!title && meta.prompt) title = meta.prompt;

            const format = this.getFileExtensionLabel(url) || "Image";

            return {
                id: `ai-${index}-${btoa(url).replace(/=+$/g, "")}`,
                index,
                url,
                thumbnail: url,
                name: name || `ai-image-${index + 1}.${format.toLowerCase()}`,
                title: title || name || `AI image ${index + 1}`,
                alt: title || name || "AI generated image",
                type: "image",
                size: "AI generated",
                dimensions,
                style: this.toTitleCase(style || "AI"),
                category: this.toTitleCase(category || style || "AI"),
                source: "ai-library",
                format,
                raw: item,
            };
        }

        inferAiStyleFromText(value) {
            const text = String(value || "").toLowerCase();

            if (text.includes("realistic") || text.includes("photo"))
                return "Realistic";
            if (text.includes("minimal")) return "Minimal";
            if (text.includes("3d") || text.includes("three d")) return "3D";
            if (text.includes("illustration") || text.includes("vector"))
                return "Illustration";
            if (text.includes("product")) return "Product";
            if (text.includes("background")) return "Background";

            return "AI";
        }

        inferAiCategoryFromText(value) {
            const text = String(value || "").toLowerCase();

            if (
                text.includes("living") ||
                text.includes("room") ||
                text.includes("interior")
            )
                return "Interior";
            if (
                text.includes("coffee") ||
                text.includes("restaurant") ||
                text.includes("cafe")
            )
                return "Restaurant";
            if (text.includes("workspace") || text.includes("office"))
                return "Workspace";
            if (text.includes("product") || text.includes("mockup"))
                return "Product";
            if (text.includes("people") || text.includes("team"))
                return "People";
            if (text.includes("background") || text.includes("abstract"))
                return "Background";
            if (
                text.includes("mountain") ||
                text.includes("nature") ||
                text.includes("sunset")
            )
                return "Nature";

            return "AI";
        }


/*
 * =========================================================
 * GIPHY
 * =========================================================
 */

async loadGiphyConfig() {
  if (
    this.giphyConfig &&
    this.giphyConfig.apiKey
  ) {
    return this.giphyConfig;
  }

  if (this.giphyConfigPromise) {
    return this.giphyConfigPromise;
  }

  this.giphyConfigPromise = fetch(
    "/user/media-giphy-config",
    {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(
          "Could not load GIPHY configuration."
        );
      }

      const data =
        await response.json();

      if (
        !data.enabled ||
        !data.api_key
      ) {
        throw new Error(
          "GIPHY API key is not configured."
        );
      }

      const limit = Math.max(
        1,
        Math.min(
          50,
          Number(data.limit) || 12
        )
      );

      this.giphyConfig = {
        apiKey: String(data.api_key),

        rating: String(
          data.rating || "pg"
        ),

        limit,
      };

      this.giphyPerPage = limit;

      return this.giphyConfig;
    })
    .finally(() => {
      this.giphyConfigPromise = null;
    });

  return this.giphyConfigPromise;
}


async initializeGiphySource() {
  this.setGiphyControlsEnabled(false);

  try {
    await this.loadGiphyConfig();

    this.setGiphyControlsEnabled(true);

    if (this.giphyItems.length) {
      this.renderGiphyGrid();
      this.updateGiphyPagination();
      this.syncGiphyModeUi();

      return;
    }

    await this.loadGiphyTrending(1);
  } catch (error) {
    this.giphyError =
      error.message ||
      "Could not initialize GIPHY.";

    this.renderGiphyError(
      this.giphyError
    );
  }
}


setGiphyControlsEnabled(enabled) {
  if (!this.modal) return;

  const input = this.modal.querySelector(
    "[data-nmm-giphy-search]"
  );

  const searchBtn = this.modal.querySelector(
    "[data-nmm-giphy-search-btn]"
  );

  const trendingBtn = this.modal.querySelector(
    "[data-nmm-giphy-trending]"
  );

  if (input) {
    input.disabled = !enabled;
  }

  if (searchBtn) {
    searchBtn.disabled = !enabled;
  }

  if (trendingBtn) {
    trendingBtn.disabled = !enabled;
  }
}


async loadGiphyTrending(page = 1) {
  return this.fetchGiphyCollection({
    mode: "trending",
    query: "",
    page,
  });
}


async searchGiphyGifs(
  query = "",
  page = 1
) {
  const rawQuery =
    String(query || "");

  if (!rawQuery.trim()) {
    return this.loadGiphyTrending(
      page
    );
  }

  if (rawQuery.length > 50) {
    this.renderGiphyError(
      "Search terms must be 50 characters or less."
    );

    return;
  }

  return this.fetchGiphyCollection({
    mode: "search",
    query: rawQuery,
    page,
  });
}


async fetchGiphyCollection({
  mode = "trending",
  query = "",
  page = 1,
} = {}) {
  if (this.giphyLoading) {
    return;
  }

  this.giphyLoading = true;
  this.giphyError = "";

  this.giphyMode =
    mode === "search"
      ? "search"
      : "trending";

  this.giphyQuery =
    this.giphyMode === "search"
      ? String(query || "")
      : "";

  this.giphyPage = Math.max(
    1,
    Number(page) || 1
  );

  this.renderGiphyLoading();

  try {
    const config =
      await this.loadGiphyConfig();

      let customerId = "";

try {
  customerId =
    await this.getGiphyCustomerId();
} catch (error) {
  console.warn(
    "[NewMediaModal] Could not load GIPHY customer ID.",
    error
  );
}

    const limit =
      config.limit || 12;

    const offset =
      (this.giphyPage - 1) *
      limit;

    const maxOffset =
      this.giphyMode === "search"
        ? 4999
        : 499;

    if (offset > maxOffset) {
      this.giphyLoading = false;
      this.giphyHasMore = false;

      this.updateGiphyPagination();

      return;
    }

    const params =
      new URLSearchParams();

    params.set(
      "api_key",
      config.apiKey
    );

    params.set(
      "limit",
      String(limit)
    );

    params.set(
      "offset",
      String(offset)
    );

    params.set(
      "rating",
      config.rating || "pg"
    );

    if (customerId) {
  params.set(
    "customer_id",
    customerId
  );
}

    if (
      this.giphyMode === "search"
    ) {
      params.set(
        "q",
        this.giphyQuery
      );
    }

    const endpoint =
      this.giphyMode === "search"
        ? "https://api.giphy.com/v1/gifs/search"
        : "https://api.giphy.com/v1/gifs/trending";

    /*
     * Direct browser -> GIPHY request.
     * Do not route this through Laravel.
     */
    const response = await fetch(
      `${endpoint}?${params.toString()}`,
      {
        method: "GET",
      }
    );

    if (response.status === 429) {
      throw new Error(
        "GIPHY request limit reached. Please try again later."
      );
    }

    if (!response.ok) {
      throw new Error(
        "Could not load GIFs from GIPHY."
      );
    }

    const data =
      await response.json();

    const results =
      Array.isArray(data.data)
        ? data.data
        : [];
        

    this.giphyItems = results
      .map(
        (item, index) =>
          this.normalizeGiphyItem(
            item,
            index
          )
      )
      .filter(Boolean);

      this.giphyViewedIds.clear();

    const pagination =
      data.pagination || {};

    const count =
      Number(pagination.count);

    const total =
      Number(
        pagination.total_count
      );

    const returnedCount =
      Number.isFinite(count)
        ? count
        : this.giphyItems.length;

    this.giphyTotalCount =
      Number.isFinite(total)
        ? total
        : null;

    const nextOffset =
      offset + limit;

    const withinApiLimit =
      nextOffset <= maxOffset;

    if (
      this.giphyTotalCount !== null
    ) {
      this.giphyHasMore =
        withinApiLimit &&
        nextOffset <
          this.giphyTotalCount;
    } else {
      this.giphyHasMore =
        withinApiLimit &&
        returnedCount >= limit;
    }

    this.giphyLoading = false;

    if (!this.giphyItems.length) {
      this.renderGiphyEmpty();
    } else {
      this.renderGiphyGrid();
    }

    this.updateGiphyPagination();
    this.syncGiphyModeUi();
  } catch (error) {
    this.giphyLoading = false;

    this.giphyError =
      error.message ||
      "Could not load GIFs.";

    this.renderGiphyError(
      this.giphyError
    );

    this.updateGiphyPagination();
  }
}

normalizeGiphyItem(item, index = 0) {
  if (!item || !item.images) {
    return null;
  }

  const fixedWidth =
    item.images.fixed_width || {};

  const downsized =
    item.images.downsized || {};

  const original =
    item.images.original || {};


  /*
   * Grid preview.
   * Keep this lightweight.
   */
  const previewUrl =
    fixedWidth.webp ||
    fixedWidth.url ||
    downsized.url ||
    original.url ||
    "";


  /*
   * Final GIF URL.
   *
   * Zigrow's existing GIF architecture
   * uses <img> and expects GIF semantics,
   * so use GIPHY's GIF rendition here.
   */
  const finalUrl =
    original.url ||
    downsized.url ||
    fixedWidth.url ||
    "";


  if (!previewUrl || !finalUrl) {
    return null;
  }


  const width =
    Number(original.width) || null;

  const height =
    Number(original.height) || null;


  const dimensions =
    width && height
      ? `${width} × ${height}`
      : "Auto";


  const rawSize =
    Number(original.size);


  const size =
    Number.isFinite(rawSize) &&
    rawSize > 0
      ? rawSize
      : "External";


  const title =
    item.title ||
    `GIPHY GIF ${index + 1}`;


  const creator =
    item.user?.display_name ||
    item.username ||
    "GIPHY";


  const alt =
    item.alt_text ||
    title ||
    "GIPHY GIF";


  const safeName = String(
    item.slug ||
    item.id ||
    `giphy-${index + 1}`
  )
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");


  return {
    id:
      `giphy-${item.id || index}`,

    giphyId:
      item.id || "",

    url: finalUrl,

    originalUrl: finalUrl,

    thumbnail: previewUrl,

    previewUrl,

    name:
      `${safeName || "giphy-gif"}.gif`,

    title,

    alt,

    type: "gif",

    size,

    dimensions,

    width,

    height,

    format: "GIF",

    creator,

    username:
      item.username || "",

      creatorProfileUrl:
  item.user?.profile_url || "",

contentSourceUrl:
  item.source_post_url ||
  item.source ||
  "",

contentSourceLabel:
  item.source_tld || "",

    rating:
      item.rating || "",

    source: "giphy",

    sourceKind: "giphy",

    analytics:
      item.analytics || null,

    raw: item,
  };
}

renderGiphyLoading() {
  const grid =
    this.modal?.querySelector(
      "[data-nmm-giphy-grid]"
    );

  const pagination =
    this.modal?.querySelector(
      "[data-nmm-giphy-pagination]"
    );

  if (!grid) return;

  if (pagination) {
    pagination.hidden = true;
  }

  const title =
    this.giphyMode === "search"
      ? "Searching GIPHY..."
      : "Loading trending GIFs...";

  grid.innerHTML = `
    <div class="nmm__media-state">

      <span class="nmm__mini-loader"></span>

      <strong>
        ${this.escapeHtml(title)}
      </strong>

      <p>
        Please wait while we load GIFs.
      </p>

    </div>
  `;
}

renderGiphyError(
  message = "Could not load GIFs."
) {
  const grid =
    this.modal?.querySelector(
      "[data-nmm-giphy-grid]"
    );

  if (!grid) return;

  grid.innerHTML = `
    <div class="nmm__media-state">

      <div class="nmm__state-icon">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>

      <strong>
        Could not load GIPHY
      </strong>

      <p>
        ${this.escapeHtml(message)}
      </p>

      <button
        type="button"
        class="nmm__small-action"
        data-nmm-giphy-retry
      >
        Retry
      </button>

    </div>
  `;

  const retry =
    grid.querySelector(
      "[data-nmm-giphy-retry]"
    );

  if (!retry) return;

  retry.addEventListener(
    "click",
    () => {
      if (
        this.giphyMode === "search" &&
        this.giphyQuery
      ) {
        this.searchGiphyGifs(
          this.giphyQuery,
          this.giphyPage || 1
        );

        return;
      }

      this.loadGiphyTrending(
        this.giphyPage || 1
      );
    }
  );
}

renderGiphyEmpty() {
  const grid =
    this.modal?.querySelector(
      "[data-nmm-giphy-grid]"
    );

  if (!grid) return;

  const text =
    this.giphyMode === "search"
      ? "Try another search term."
      : "No trending GIFs are available right now.";

  grid.innerHTML = `
    <div class="nmm__media-state">

      <div class="nmm__state-icon">
        <i class="fa-solid fa-photo-film"></i>
      </div>

      <strong>
        No GIFs found
      </strong>

      <p>
        ${this.escapeHtml(text)}
      </p>

    </div>
  `;
}

renderGiphyGrid() {
  const grid =
    this.modal?.querySelector(
      "[data-nmm-giphy-grid]"
    );

  if (!grid) return;


  if (!this.giphyItems.length) {
    this.renderGiphyEmpty();
    return;
  }


  grid.innerHTML =
    this.giphyItems
      .map((item) => {

        const selected =
          this.pendingSelectedMedia &&
          String(
            this.pendingSelectedMedia.id
          ) === String(item.id);


        const creator =
          item.creator ||
          item.username ||
          "GIPHY";


        return `
          <button
            type="button"
            class="nmm__stock-card nmm__giphy-result ${
              selected
                ? "is-selected"
                : ""
            }"
            data-nmm-giphy-id="${this.escapeAttr(item.id)}"
          >

            <span class="nmm__stock-thumb">

              <img
                src="${this.escapeAttr(item.previewUrl)}"
                alt="${this.escapeAttr(item.alt || item.title)}"
                loading="lazy"
              >

              <span class="nmm__media-check">
                <i class="fa-solid fa-check"></i>
              </span>

            </span>


            <span
              class="nmm__stock-credit"
              title="${this.escapeAttr(item.title)}"
            >
              ${this.escapeHtml(item.title)}
            </span>


            <small>
              ${this.escapeHtml(creator)}
            </small>

          </button>
        `;
      })
      .join("");


  grid
    .querySelectorAll(
      "[data-nmm-giphy-id]"
    )
    .forEach((card) => {

      card.addEventListener(
        "click",
        () => {

          const id =
            card.getAttribute(
              "data-nmm-giphy-id"
            );


          const item =
            this.giphyItems.find(
              (media) =>
                String(media.id) ===
                String(id)
            );


          if (item) {
            this.selectGiphyItem(item);
          }

        }
      );

    });

    this.observeGiphyGridViews();
}

selectGiphyItem(item) {
  if (!item) return;

  this.fireGiphyAnalytics(item, "onclick");

  /*
   * Clicking selected GIF again
   * deselects it.
   */
  if (
    this.pendingSelectedMedia &&
    String(
      this.pendingSelectedMedia.id
    ) === String(item.id)
  ) {

    this.clearSelectedMedia();

    return;
  }


  this.giphySelectedMedia = item;


  /*
   * Convert GIPHY result into the
   * standard Zigrow media object.
   */
  this.pendingSelectedMedia = {

    id: item.id,

    giphyId:
      item.giphyId || "",

    url:
      item.url,

    originalUrl:
      item.originalUrl ||
      item.url,

    thumbnail:
      item.thumbnail ||
      item.previewUrl ||
      item.url,

    name:
      item.name ||
      "giphy-gif.gif",

    title:
      item.title ||
      "GIPHY GIF",

    alt:
      item.alt ||
      item.title ||
      "GIPHY GIF",

    type: "gif",

    size:
      item.size ||
      "External",

    dimensions:
      item.dimensions ||
      "Auto",

    width:
      item.width ||
      null,

    height:
      item.height ||
      null,

    format: "GIF",

    creator:
      item.creator ||
      item.username ||
      "GIPHY",

      creatorProfileUrl:
  item.creatorProfileUrl || "",

contentSourceUrl:
  item.contentSourceUrl || "",

contentSourceLabel:
  item.contentSourceLabel || "",

    rating:
      item.rating || "",

    source: "giphy",

    sourceKind: "giphy",

    analytics:
      item.analytics ||
      null,

    raw:
      item.raw ||
      item,
  };


  this.resetAdjustSettingsForSelectedMedia(
    this.pendingSelectedMedia
  );


  this.renderGiphyDetails(
    this.pendingSelectedMedia
  );


  /*
   * Update generic Selected Media
   * panel on the far right.
   */
  this.updateSelectedMediaPanel();


  this.syncSelectionPanelState();


  /*
   * Re-render grid so selected
   * purple border/check appears.
   */
  this.renderGiphyGrid();

this.syncFavoriteButtons();
  /*
   * Enable Apply Changes.
   */
  this.markMediaDirty();
}

updateGiphyPagination() {
  const pagination =
    this.modal?.querySelector(
      "[data-nmm-giphy-pagination]"
    );

  const pageLabel =
    this.modal?.querySelector(
      "[data-nmm-giphy-page]"
    );

  const previous =
    this.modal?.querySelector(
      "[data-nmm-giphy-prev]"
    );

  const next =
    this.modal?.querySelector(
      "[data-nmm-giphy-next]"
    );

  if (!pagination) return;

  pagination.hidden =
    !this.giphyItems.length ||
    this.giphyLoading;

  if (pageLabel) {
    pageLabel.textContent =
      String(
        this.giphyPage || 1
      );
  }

  if (previous) {
    previous.disabled =
      this.giphyPage <= 1 ||
      this.giphyLoading;
  }

  if (next) {
    next.disabled =
      !this.giphyHasMore ||
      this.giphyLoading;
  }
}

syncGiphyModeUi() {
  const trending =
    this.modal?.querySelector(
      "[data-nmm-giphy-trending]"
    );

  if (!trending) return;

  trending.classList.toggle(
    "is-active",
    this.giphyMode === "trending"
  );
}

resetGiphyDetailsPanel() {
  if (!this.modal) return;

  const preview =
    this.modal.querySelector(
      "[data-nmm-giphy-preview]"
    );

  const title =
    this.modal.querySelector(
      "[data-nmm-giphy-title]"
    );

  const meta =
    this.modal.querySelector(
      "[data-nmm-giphy-meta]"
    );

    const creator =
  this.modal.querySelector(
    "[data-nmm-giphy-creator]"
  );

const dimensions =
  this.modal.querySelector(
    "[data-nmm-giphy-dimensions]"
  );

const rating =
  this.modal.querySelector(
    "[data-nmm-giphy-rating]"
  );

  if (preview) {
    preview.innerHTML = `
      <div class="nmm__link-placeholder">

        <span>
          <i class="fa-solid fa-photo-film"></i>
        </span>

        <strong>
          No GIF selected
        </strong>

        <p>
          Select a GIPHY GIF to preview it here.
        </p>

      </div>
    `;
  }

  if (title) {
    title.textContent =
      "Not selected";
  }

  if (creator) {
  creator.textContent = "Unknown";
}

if (dimensions) {
  dimensions.textContent = "Auto";
}

if (rating) {
  rating.textContent =
    "Not available";
}

  if (meta) {
    meta.hidden = true;
  }
}

renderGiphyDetails(item) {
  if (!this.modal || !item) {
    return;
  }


  const preview =
    this.modal.querySelector(
      "[data-nmm-giphy-preview]"
    );

  const title =
    this.modal.querySelector(
      "[data-nmm-giphy-title]"
    );

  const meta =
    this.modal.querySelector(
      "[data-nmm-giphy-meta]"
    );

  const creator =
    this.modal.querySelector(
      "[data-nmm-giphy-creator]"
    );

  const dimensions =
    this.modal.querySelector(
      "[data-nmm-giphy-dimensions]"
    );

  const rating =
    this.modal.querySelector(
      "[data-nmm-giphy-rating]"
    );


  if (preview) {

    preview.innerHTML = `
      <img
        class="nmm__link-preview-media"
        src="${this.escapeAttr(
          item.url ||
          item.originalUrl
        )}"
        alt="${this.escapeAttr(
          item.alt ||
          item.title ||
          "GIPHY GIF"
        )}"
      >
    `;

  }


  if (title) {
    title.textContent =
      item.title ||
      "GIPHY GIF";
  }


 if (creator) {

  const creatorName =
    item.creator ||
    item.username ||
    "GIPHY";


  if (item.creatorProfileUrl) {

    creator.innerHTML = `
      <a
        href="${this.escapeAttr(
          item.creatorProfileUrl
        )}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${this.escapeHtml(
          creatorName
        )}
      </a>
    `;

  } else {

    creator.textContent =
      creatorName;

  }
}


  if (dimensions) {
    dimensions.textContent =
      item.dimensions ||
      (
        item.width &&
        item.height
          ? `${item.width} × ${item.height}`
          : "Auto"
      );
  }


  if (rating) {
    rating.textContent =
      item.rating
        ? String(item.rating)
            .toUpperCase()
        : "Not available";
  }


  if (meta) {
    meta.hidden = false;
  }
}

trackAppliedGiphyMedia() {
  const item =
    this.pendingSelectedMedia;


  if (
    !item ||
    (
      item.source !== "giphy" &&
      item.sourceKind !== "giphy"
    )
  ) {
    return;
  }


  this.fireGiphyAnalytics(
    item,
    "onsent"
  );
}

async getGiphyCustomerId() {
  if (this.giphyCustomerId) {
    return this.giphyCustomerId;
  }


  /*
   * Reuse the same anonymous identifier
   * for this browser.
   */
  try {
    const stored =
      window.localStorage.getItem(
        "zigrow_giphy_customer_id"
      );

    if (stored) {
      this.giphyCustomerId = stored;
      return stored;
    }
  } catch (error) {}


  if (this.giphyCustomerIdPromise) {
    return this.giphyCustomerIdPromise;
  }


  this.giphyCustomerIdPromise =
    (async () => {

      const config =
        await this.loadGiphyConfig();


      const params =
        new URLSearchParams();

      params.set(
        "api_key",
        config.apiKey
      );


      /*
       * Direct browser -> GIPHY.
       */
      const response =
        await fetch(
          `https://api.giphy.com/v1/randomid?${params.toString()}`
        );


      if (!response.ok) {
        throw new Error(
          "Could not create GIPHY customer ID."
        );
      }


      const data =
        await response.json();


      const randomId =
        data?.data?.random_id
          ? String(
              data.data.random_id
            )
          : "";


      if (!randomId) {
        throw new Error(
          "GIPHY customer ID was not returned."
        );
      }


      this.giphyCustomerId =
        randomId;


      try {
        window.localStorage.setItem(
          "zigrow_giphy_customer_id",
          randomId
        );
      } catch (error) {}


      return randomId;

    })()
      .finally(() => {
        this.giphyCustomerIdPromise =
          null;
      });


  return this.giphyCustomerIdPromise;
}

async fireGiphyAnalytics(
  item,
  action
) {
  if (
    !item ||
    !item.analytics
  ) {
    return;
  }


  const analyticsEntry =
    item.analytics[action];


  const trackingUrl =
    analyticsEntry?.url || "";


  if (!trackingUrl) {
    return;
  }


  try {

    const customerId =
      await this.getGiphyCustomerId();


    if (!customerId) {
      return;
    }


    const url =
      new URL(trackingUrl);


    url.searchParams.set(
      "customer_id",
      customerId
    );

    url.searchParams.set(
      "ts",
      String(Date.now())
    );


    /*
     * Analytics failure must never
     * break the builder.
     */
    fetch(
      url.toString(),
      {
        method: "GET",
        keepalive: true,
      }
    ).catch(() => {});

  } catch (error) {

    console.warn(
      `[NewMediaModal] GIPHY ${action} analytics failed.`,
      error
    );

  }
}

observeGiphyGridViews() {
  if (!this.modal) {
    return;
  }


  if (this.giphyViewObserver) {
    this.giphyViewObserver.disconnect();
    this.giphyViewObserver = null;
  }


  const images =
    this.modal.querySelectorAll(
      "[data-nmm-giphy-id] img"
    );


  if (!images.length) {
    return;
  }


  const registerView = (img) => {

    const card =
      img.closest(
        "[data-nmm-giphy-id]"
      );


    if (!card) {
      return;
    }


    const id =
      card.getAttribute(
        "data-nmm-giphy-id"
      );


    if (
      !id ||
      this.giphyViewedIds.has(id)
    ) {
      return;
    }


    const item =
      this.giphyItems.find(
        (media) =>
          String(media.id) ===
          String(id)
      );


    if (!item) {
      return;
    }


    this.giphyViewedIds.add(id);

    this.fireGiphyAnalytics(
      item,
      "onload"
    );
  };


  /*
   * Fallback for older browsers.
   */
  if (
    !("IntersectionObserver" in window)
  ) {

    images.forEach((img) => {

      if (img.complete) {
        registerView(img);
      } else {

        img.addEventListener(
          "load",
          () => registerView(img),
          {
            once: true,
          }
        );

      }

    });

    return;
  }


  this.giphyViewObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const img =
            entry.target;


          /*
           * Do not register until
           * the actual image loaded.
           */
          if (img.complete) {

            registerView(img);

            observer.unobserve(img);

            return;

          }


          img.addEventListener(
            "load",
            () => {
              registerView(img);
              observer.unobserve(img);
            },
            {
              once: true,
            }
          );

        });

      },
      {
        threshold: 0.25,
      }
    );


  images.forEach((img) => {
    this.giphyViewObserver.observe(img);
  });
}

        bindMediaActionEvents() {
            const layer = document.querySelector("#nmm-media-actions-layer");
            if (!layer) return;

            layer
                .querySelectorAll("[data-nmm-action-close]")
                .forEach((button) => {
                    button.addEventListener("click", () =>
                        this.closeMediaActionLayer(),
                    );
                });

            layer.querySelectorAll("[data-nmm-action]").forEach((button) => {
                button.addEventListener("click", () => {
                    const action = button.getAttribute("data-nmm-action");

                    if (action === "rename") this.openRenameUploadedMedia();
                    if (action === "details") this.openDetailsUploadedMedia();
                    if (action === "delete") this.openDeleteUploadedMedia();
                });
            });

            const renameSubmit = layer.querySelector(
                "[data-nmm-rename-submit]",
            );
            if (renameSubmit) {
                renameSubmit.addEventListener("click", () =>
                    this.submitRenameUploadedMedia(),
                );
            }

            const detailsSubmit = layer.querySelector(
                "[data-nmm-details-submit]",
            );
            if (detailsSubmit) {
                detailsSubmit.addEventListener("click", () =>
                    this.submitDetailsUploadedMedia(),
                );
            }

            const deleteSubmit = layer.querySelector(
                "[data-nmm-delete-submit]",
            );
            if (deleteSubmit) {
                deleteSubmit.addEventListener("click", () =>
                    this.confirmDeleteUploadedMedia(),
                );
            }
        }

        bindFavoriteEvents() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-favorite-toggle]")
                .forEach((button) => {
                    button.addEventListener("click", (event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        const context =
                            button.getAttribute("data-nmm-favorite-toggle") ||
                            "selected";
                        const item = this.getFavoriteContextItem(context);

                        if (!item || !item.url) {
                            this.showApplyMessage("Please select media first.");
                            return;
                        }

                        this.toggleFavoriteMedia(item);
                        this.syncFavoriteButtons();
                        this.renderMyMedia();
                    });
                });
        }

        bindCopyLinkEvents() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-copy-link]")
                .forEach((button) => {
                    button.addEventListener("click", async (event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        const context =
                            button.getAttribute("data-nmm-copy-link") ||
                            "selected";

                        const item = this.getFavoriteContextItem(context);

                        const link = item && (item.originalUrl || item.url);

                        if (!link) {
                            this.showApplyMessage("Please select media first.");
                            return;
                        }

                        try {
                            if (
                                navigator.clipboard &&
                                typeof navigator.clipboard.writeText ===
                                    "function"
                            ) {
                                await navigator.clipboard.writeText(link);
                            } else {
                                const input =
                                    document.createElement("textarea");

                                input.value = link;
                                input.setAttribute("readonly", "readonly");
                                input.style.position = "fixed";
                                input.style.opacity = "0";

                                document.body.appendChild(input);
                                input.select();
                                document.execCommand("copy");
                                input.remove();
                            }

                            this.showApplyMessage("Media link copied.");
                        } catch (error) {
                            this.showApplyMessage(
                                "Could not copy the media link.",
                            );
                        }
                    });
                });
        }

        openMediaActionMenu(button, item) {
            const layer = document.querySelector("#nmm-media-actions-layer");
            const menu =
                layer && layer.querySelector("[data-nmm-actions-menu]");

            if (!layer || !menu || !button || !item) return;

            this.mediaActionItem = item;

            layer.hidden = false;
            layer.classList.add("is-menu-mode");

            menu.hidden = false;

            layer
                .querySelectorAll("[data-nmm-action-modal]")
                .forEach((modal) => {
                    modal.hidden = true;
                });

            const buttonRect = button.getBoundingClientRect();
            const card = button.closest(".nmm__media-card");
            const cardRect = card ? card.getBoundingClientRect() : buttonRect;

            const menuWidth = 190;
            const menuHeight = 156;
            const gap = 10;

            let left = cardRect.right + gap;
            let top = buttonRect.top - 8;

            let opensLeft = false;

            if (left + menuWidth > window.innerWidth - 18) {
                left = cardRect.left - menuWidth - gap;
                opensLeft = true;
            }

            menu.classList.toggle("opens-left", opensLeft);

            if (top + menuHeight > window.innerHeight - 18) {
                top = window.innerHeight - menuHeight - 18;
            }

            if (top < 18) {
                top = 18;
            }

            menu.style.left = `${left}px`;
            menu.style.top = `${top}px`;
        }

        closeMediaActionLayer() {
            const layer = document.querySelector("#nmm-media-actions-layer");
            if (!layer) return;

            layer.hidden = true;

            const menu = layer.querySelector("[data-nmm-actions-menu]");
            if (menu) menu.hidden = true;

            layer
                .querySelectorAll("[data-nmm-action-modal]")
                .forEach((modal) => {
                    modal.hidden = true;
                });

            this.clearMediaActionErrors();
        }

        showMediaActionModal(name) {
            const layer = document.querySelector("#nmm-media-actions-layer");
            if (!layer) return;

            layer.hidden = false;

            const menu = layer.querySelector("[data-nmm-actions-menu]");
            if (menu) menu.hidden = true;

            layer
                .querySelectorAll("[data-nmm-action-modal]")
                .forEach((modal) => {
                    modal.hidden =
                        modal.getAttribute("data-nmm-action-modal") !== name;
                });
        }

        clearMediaActionErrors() {
            const layer = document.querySelector("#nmm-media-actions-layer");
            if (!layer) return;

            layer.querySelectorAll(".nmm-action-error").forEach((error) => {
                error.textContent = "";
                error.setAttribute("hidden", "");
            });
        }

        showMediaActionError(selector, message) {
            const error = document.querySelector(selector);
            if (!error) return;

            error.textContent = message || "Something went wrong.";
            error.removeAttribute("hidden");
        }

        setActionButtonLoading(button, loading, label) {
            if (!button) return;

            if (loading) {
                button.dataset.originalText = button.innerHTML;
                button.disabled = true;
                button.innerHTML = `<span class="nmm-action-spinner"></span>${label || "Saving..."}`;
                return;
            }

            button.disabled = false;
            if (button.dataset.originalText) {
                button.innerHTML = button.dataset.originalText;
                delete button.dataset.originalText;
            }
        }

        openRenameUploadedMedia() {
            const item = this.mediaActionItem;
            if (!item) return;

            this.clearMediaActionErrors();

            const current = document.querySelector("[data-nmm-rename-current]");
            const input = document.querySelector("[data-nmm-rename-input]");
            const ext = document.querySelector("[data-nmm-rename-ext]");

            const parts = this.getMediaNameParts(item);

            if (current) current.textContent = item.name || parts.filename;
            if (input) input.value = "";
            if (ext) ext.textContent = parts.ext ? `.${parts.ext}` : "";

            this.showMediaActionModal("rename");

            setTimeout(() => {
                if (input) input.focus();
            }, 50);
        }

        async submitRenameUploadedMedia() {
            const item = this.mediaActionItem;
            const input = document.querySelector("[data-nmm-rename-input]");
            const submit = document.querySelector("[data-nmm-rename-submit]");

            if (!item || !input) return;

            const parts = this.getMediaNameParts(item);

            let base = String(input.value || "")
                .trim()
                .replace(/[^\w.\-\s]/g, "")
                .replace(/\s+/g, " ");

            if (!base) {
                this.showMediaActionError(
                    "[data-nmm-rename-error]",
                    "Name cannot be empty.",
                );
                return;
            }

            const newFilename = parts.ext ? `${base}.${parts.ext}` : base;

            const form = new FormData();
            form.append("file", item.url);
            form.append("newfile", newFilename);

            this.setActionButtonLoading(submit, true, "Updating...");

            try {
                const response = await fetch("/user/media-rename", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "X-XSRF-TOKEN": decodeURIComponent(
                            this.getCookie("XSRF-TOKEN") || "",
                        ),
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    body: form,
                });

                const data = await response.json().catch(() => ({}));

                if (!response.ok || data.success !== true) {
                    throw new Error(data.message || "Rename failed.");
                }

                const finalName = data.filename || newFilename;
                const finalUrl =
                    data.url || item.url.replace(parts.filename, finalName);

                this.updateMediaItemAfterRename(item, finalName, finalUrl);
                this.closeMediaActionLayer();
                this.renderMyMedia();
                this.renderRecentUploads();
                this.updateSelectedMediaPanel();

                this.showToast(
                    "success",
                    "Renamed",
                    data.message || "File renamed.",
                );
            } catch (error) {
                this.showMediaActionError(
                    "[data-nmm-rename-error]",
                    error.message,
                );
            } finally {
                this.setActionButtonLoading(submit, false);
            }
        }

        openDetailsUploadedMedia() {
            const item = this.mediaActionItem;
            if (!item) return;

            this.clearMediaActionErrors();

            const previewWrap = document.querySelector(".nmm-action-preview");
            const title = document.querySelector("[data-nmm-details-title]");
            const alt = document.querySelector("[data-nmm-details-alt]");
            const description = document.querySelector(
                "[data-nmm-details-description]",
            );

            if (previewWrap) {
                if (item.type === "video") {
                    previewWrap.innerHTML = `
        <video
          src="${this.escapeAttr(item.url || "")}"
          class="nmm-action-preview-media"
          muted
          playsinline
          controls
          preload="metadata"
        ></video>
      `;
                } else {
                    previewWrap.innerHTML = `
        <img
          src="${this.escapeAttr(item.thumbnail || item.url || "")}"
          alt="${this.escapeAttr(item.alt || item.name || "")}"
          data-nmm-details-preview
        >
      `;
                }
            }

            if (title) title.value = item.title || item.name || "";
            if (alt)
                alt.value =
                    item.alt || this.getAltTextFromMediaName(item.name || "");
            if (description) description.value = item.description || "";

            this.showMediaActionModal("details");
        }
        async submitDetailsUploadedMedia() {
            const item = this.mediaActionItem;
            const submit = document.querySelector("[data-nmm-details-submit]");
            const title = document.querySelector("[data-nmm-details-title]");
            const alt = document.querySelector("[data-nmm-details-alt]");
            const description = document.querySelector(
                "[data-nmm-details-description]",
            );

            if (!item) return;

            const normalize = (value) =>
                String(value || "")
                    .trim()
                    .replace(/\s+/g, " ");

            const payloadTitle = normalize(title && title.value);
            const payloadAlt = normalize(alt && alt.value);
            const payloadDescription = normalize(
                description && description.value,
            );

            const form = new FormData();
            form.append("file", item.url);
            form.append("title", payloadTitle);
            form.append("alt", payloadAlt);
            form.append("description", payloadDescription);

            this.setActionButtonLoading(submit, true, "Saving...");

            try {
                const response = await fetch("/user/media-meta", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "X-XSRF-TOKEN": decodeURIComponent(
                            this.getCookie("XSRF-TOKEN") || "",
                        ),
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    body: form,
                });

                const data = await response.json().catch(() => ({}));

                if (!response.ok || data.success !== true) {
                    throw new Error(data.message || "Save failed.");
                }

                const meta = data.meta || {};

                this.updateMediaItemMeta(item, {
                    title: meta.title || payloadTitle,
                    alt: meta.alt || payloadAlt,
                    description: meta.description || payloadDescription,
                });

                this.closeMediaActionLayer();
                this.renderMyMedia();
                this.updateSelectedMediaPanel();

                this.showToast(
                    "success",
                    "Saved",
                    data.message || "Details saved.",
                );
            } catch (error) {
                this.showMediaActionError(
                    "[data-nmm-details-error]",
                    error.message,
                );
            } finally {
                this.setActionButtonLoading(submit, false);
            }
        }

        openDeleteUploadedMedia() {
            const item = this.mediaActionItem;
            if (!item) return;

            this.clearMediaActionErrors();

            const name = document.querySelector("[data-nmm-delete-name]");
            const url = document.querySelector("[data-nmm-delete-url]");

            if (name) name.textContent = item.name || "Selected file";
            if (url) url.textContent = item.url || "";

            this.showMediaActionModal("delete");
        }

        async confirmDeleteUploadedMedia() {
            const item = this.mediaActionItem;
            const submit = document.querySelector("[data-nmm-delete-submit]");

            if (!item) return;

            const form = new FormData();
            form.append("file", item.url);

            this.setActionButtonLoading(submit, true, "Deleting...");

            try {
                const response = await fetch("/user/media-delete", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "X-XSRF-TOKEN": decodeURIComponent(
                            this.getCookie("XSRF-TOKEN") || "",
                        ),
                        "X-Requested-With": "XMLHttpRequest",
                    },
                    body: form,
                });

                const data = await response.json().catch(() => ({}));

                if (!response.ok || data.success !== true) {
                    throw new Error(data.message || "Delete failed.");
                }

                this.removeMediaItem(item);

                if (
                    this.pendingSelectedMedia &&
                    this.pendingSelectedMedia.url === item.url
                ) {
                    this.resetSelectedMedia();
                }

                this.closeMediaActionLayer();
                this.renderMyMedia();
                this.renderRecentUploads();

                this.showToast(
                    "success",
                    "Deleted",
                    data.message || "File removed.",
                );
            } catch (error) {
                this.showMediaActionError(
                    "[data-nmm-delete-error]",
                    error.message,
                );
            } finally {
                this.setActionButtonLoading(submit, false);
            }
        }

        getMediaNameParts(item) {
            const url = item && item.url ? item.url : "";
            const filename = this.getFileNameFromUrl(url);
            const clean = filename.split("?")[0].split("#")[0];
            const parts = clean.split(".");
            const ext = parts.length > 1 ? parts.pop() : "";
            const base = parts.join(".") || clean;

            return {
                filename: clean,
                base,
                ext,
            };
        }

        updateMediaItemAfterRename(item, finalName, finalUrl) {
            const update = (media) => {
                if (!media || media.url !== item.url) return media;

                return {
                    ...media,
                    name: finalName,
                    title: media.title || finalName,
                    url: finalUrl,
                    thumbnail:
                        media.thumbnail === item.url
                            ? finalUrl
                            : media.thumbnail,
                };
            };

            this.mediaItems = this.mediaItems.map(update);
            this.recentMediaItems = this.recentMediaItems.map(update);
            this.favoriteMediaItems = this.favoriteMediaItems.map(update);

            if (
                this.pendingSelectedMedia &&
                this.pendingSelectedMedia.url === item.url
            ) {
                this.pendingSelectedMedia = update(this.pendingSelectedMedia);
            }

            this.saveLocalMediaList(
                "zigrow_recent_media",
                this.recentMediaItems,
            );
            this.saveLocalMediaList(
                "zigrow_favorite_media",
                this.favoriteMediaItems,
            );
        }

        updateMediaItemMeta(item, meta = {}) {
            const update = (media) => {
                if (!media || media.url !== item.url) return media;

                return {
                    ...media,
                    title: meta.title || media.title || media.name,
                    alt: meta.alt || "",
                    description: meta.description || "",
                };
            };

            this.mediaItems = this.mediaItems.map(update);
            this.recentMediaItems = this.recentMediaItems.map(update);
            this.favoriteMediaItems = this.favoriteMediaItems.map(update);

            if (
                this.pendingSelectedMedia &&
                this.pendingSelectedMedia.url === item.url
            ) {
                this.pendingSelectedMedia = update(this.pendingSelectedMedia);
            }

            this.saveLocalMediaList(
                "zigrow_recent_media",
                this.recentMediaItems,
            );
            this.saveLocalMediaList(
                "zigrow_favorite_media",
                this.favoriteMediaItems,
            );
        }

        removeMediaItem(item) {
            const remove = (media) => media && media.url !== item.url;

            this.mediaItems = this.mediaItems.filter(remove);
            this.recentMediaItems = this.recentMediaItems.filter(remove);
            this.favoriteMediaItems = this.favoriteMediaItems.filter(remove);

            this.saveLocalMediaList(
                "zigrow_recent_media",
                this.recentMediaItems,
            );
            this.saveLocalMediaList(
                "zigrow_favorite_media",
                this.favoriteMediaItems,
            );

            this.mediaPage = 1;
        }

        showToast(type, title, message) {
            if (typeof window.displayToast === "function") {
                window.displayToast(
                    type === "success" ? "bg-success" : "bg-danger",
                    title,
                    message,
                );
                return;
            }

            console.log(`${title}: ${message}`);
        }

        renameUploadedMedia(item) {
            alert("Rename will be connected in the next step.");
        }

        editUploadedMediaDetails(item) {
            alert(`File: ${item.name || "Media file"}\nURL: ${item.url || ""}`);
        }

        deleteUploadedMedia(item) {
            alert("Delete will be connected in the next step.");
        }

        getFilteredAiItems() {
            let items = this.aiItems.slice();

            const category = String(
                this.aiCategoryFilter || "all",
            ).toLowerCase();

            if (category !== "all") {
                items = items.filter((item) => {
                    const haystack =
                        `${item.style || ""} ${item.category || ""} ${item.name || ""} ${item.title || ""}`.toLowerCase();
                    return haystack.includes(category);
                });
            }

            const query = String(this.aiSearchQuery || "")
                .trim()
                .toLowerCase();

            if (query) {
                items = items.filter((item) => {
                    const haystack =
                        `${item.name || ""} ${item.title || ""} ${item.alt || ""} ${item.style || ""} ${item.category || ""} ${item.url || ""}`.toLowerCase();
                    return haystack.includes(query);
                });
            }

            return items;
        }

        renderAiLoading() {
            const grid = this.modal.querySelector("[data-nmm-ai-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <span class="nmm__mini-loader"></span>
      <strong>Loading AI Library...</strong>
      <p>Please wait while we load your generated images.</p>
    </div>
  `;
        }

        renderAiError() {
            const grid = this.modal.querySelector("[data-nmm-ai-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <strong>Could not load AI images</strong>
      <p>${this.escapeHtml(this.aiError || "Please try again.")}</p>
      <button type="button" class="nmm__small-action" data-nmm-ai-retry>Retry</button>
    </div>
  `;

            const retry = grid.querySelector("[data-nmm-ai-retry]");
            if (retry) {
                retry.addEventListener("click", () => this.loadAiLibrary(true));
            }
        }

        renderAiEmpty(
            title = "No AI images found",
            text = "Try a different search or category.",
        ) {
            const grid = this.modal.querySelector("[data-nmm-ai-grid]");
            if (!grid) return;

            grid.innerHTML = `
    <div class="nmm__media-state">
      <div class="nmm__state-icon">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
      </div>
      <strong>${this.escapeHtml(title)}</strong>
      <p>${this.escapeHtml(text)}</p>
    </div>
  `;
        }

        renderAiLibrary() {
            const grid = this.modal.querySelector("[data-nmm-ai-grid]");
            if (!grid) return;

            if (this.aiLoading) {
                this.renderAiLoading();
                return;
            }

            if (this.aiError) {
                this.renderAiError();
                return;
            }

            const items = this.getFilteredAiItems();

            const totalPages = Math.max(
                1,
                Math.ceil(items.length / this.aiPerPage),
            );
            this.aiPage = Math.min(this.aiPage || 1, totalPages);

            const start = (this.aiPage - 1) * this.aiPerPage;
            const pagedItems = items.slice(start, start + this.aiPerPage);

            if (!items.length) {
                this.renderAiEmpty();
                return;
            }

            grid.innerHTML = pagedItems
                .map((item) => {
                    const selected =
                        this.pendingSelectedMedia &&
                        this.pendingSelectedMedia.id === item.id;

                    return `
        <button type="button" class="nmm__ai-card ${selected ? "is-selected" : ""}" data-nmm-ai-id="${this.escapeAttr(item.id)}">
          <span class="nmm__ai-thumb">
            <img src="${this.escapeAttr(item.thumbnail || item.url)}" alt="${this.escapeAttr(item.alt || item.name)}" loading="lazy">
            <span class="nmm__media-check"><i class="fa-solid fa-check"></i></span>
          </span>
          <span class="nmm__ai-name">${this.escapeHtml(item.title || item.name)}</span>
          <small>${this.escapeHtml(item.category || "AI")}</small>
        </button>
      `;
                })
                .join("");

            grid.querySelectorAll("[data-nmm-ai-id]").forEach((card) => {
                card.addEventListener("click", () => {
                    const id = card.getAttribute("data-nmm-ai-id");
                    const item = this.aiItems.find((media) => media.id === id);
                    if (item) this.selectAiItem(item);
                });
            });

            this.renderAiPagination(totalPages);
        }

        renderAiPagination(totalPages = 1) {
            let pagination = this.modal.querySelector(
                "[data-nmm-ai-pagination]",
            );
            const grid = this.modal.querySelector("[data-nmm-ai-grid]");
            if (!grid) return;

            if (!pagination) {
                pagination = document.createElement("div");
                pagination.className = "nmm__stock-pagination";
                pagination.setAttribute("data-nmm-ai-pagination", "");
                pagination.innerHTML = `
      <button type="button" data-nmm-ai-prev aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span data-nmm-ai-page>1</span>
      <button type="button" data-nmm-ai-next aria-label="Next page">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    `;
                grid.insertAdjacentElement("afterend", pagination);
            }

            const pageLabel = pagination.querySelector("[data-nmm-ai-page]");
            const prev = pagination.querySelector("[data-nmm-ai-prev]");
            const next = pagination.querySelector("[data-nmm-ai-next]");

            pagination.hidden = totalPages <= 1;
            if (pageLabel) pageLabel.textContent = String(this.aiPage || 1);
            if (prev) prev.disabled = this.aiPage <= 1;
            if (next) next.disabled = this.aiPage >= totalPages;

            prev.onclick = () => {
                if (this.aiPage <= 1) return;
                this.aiPage -= 1;
                this.renderAiLibrary();
            };

            next.onclick = () => {
                if (this.aiPage >= totalPages) return;
                this.aiPage += 1;
                this.renderAiLibrary();
            };
        }

        selectAiItem(item) {
            if (
                this.pendingSelectedMedia &&
                item &&
                String(this.pendingSelectedMedia.id) === String(item.id)
            ) {
                this.clearSelectedMedia();
                return;
            }

            const saveCheckbox = this.modal.querySelector("[data-nmm-ai-save]");
            const saveToMyMedia = saveCheckbox ? !!saveCheckbox.checked : true;

            const aiAlt =
                item.alt ||
                item.title ||
                item.name ||
                this.getFileNameFromUrl(item.url || "");

            this.aiSelectedMedia = {
                ...item,
                alt: aiAlt,
                saveToMyMedia,
            };

            this.pendingSelectedMedia = {
                id: item.id,
                url: item.url,
                originalUrl: item.url,
                thumbnail: item.thumbnail,
                name: item.name || item.title || aiAlt,
                title: item.title || item.name || aiAlt,
                alt: aiAlt,
                type: "image",
                size: item.size || "AI generated",
                dimensions: item.dimensions || "Auto",
                source: "ai-library",
                sourceKind: "ai-library",
                format: item.format || "Image",
                raw: item.raw,
            };

            this.resetAdjustSettingsForSelectedMedia(this.pendingSelectedMedia);

            this.renderAiDetails(this.pendingSelectedMedia);
            this.syncSelectionPanelState();
            this.renderAiLibrary();
            this.syncFavoriteButtons();
            this.markMediaDirty();
        }

        renderAiDetails(item) {
            const preview = this.modal.querySelector("[data-nmm-ai-preview]");
            const title = this.modal.querySelector("[data-nmm-ai-title]");
            const meta = this.modal.querySelector("[data-nmm-ai-meta]");
            const style = this.modal.querySelector("[data-nmm-ai-style-text]");
            const category = this.modal.querySelector(
                "[data-nmm-ai-category-text]",
            );
            const size = this.modal.querySelector("[data-nmm-ai-size]");
            const format = this.modal.querySelector("[data-nmm-ai-format]");

            if (preview) {
                preview.innerHTML = `
      <img class="nmm__link-preview-media" src="${this.escapeAttr(item.url)}" alt="${this.escapeAttr(item.alt || item.name)}">
    `;
            }

            if (title)
                title.textContent = item.title || item.name || "AI image";
            if (style) style.textContent = item.style || "AI";
            if (category) category.textContent = item.category || "AI";
            if (size) {
                size.textContent = this.getMyMediaSecondMeta(item).value;
            }
            if (format) format.textContent = item.format || "Image";
            if (meta) meta.removeAttribute("hidden");
        }

        bindAdjustMediaEvents() {
            if (!this.modal) return;

            const altInput = this.modal.querySelector(
                "[data-nmm-adjust-image-alt]",
            );
            const posterInput = this.modal.querySelector(
                "[data-nmm-adjust-video-poster]",
            );
            const imageLinkInput = this.modal.querySelector(
                "[data-nmm-adjust-image-link]",
            );
            const imageLinkNewTab = this.modal.querySelector(
                "[data-nmm-adjust-image-link-newtab]",
            );

            if (altInput) {
                altInput.setAttribute("readonly", "readonly");
                altInput.setAttribute("aria-readonly", "true");
                altInput.classList.add("is-readonly");
            }

            if (posterInput) {
                posterInput.addEventListener("input", () => {
                    this.adjustSettings.videoPoster = posterInput.value || "";
                    this.markAdjustDirty();
                });
            }

            if (imageLinkInput) {
                imageLinkInput.addEventListener("input", () => {
                    this.adjustSettings.imageLinkUrl =
                        imageLinkInput.value || "";
                    this.setImageClickLinkError("");
                    this.markAdjustDirty();
                });

                imageLinkInput.addEventListener("blur", () => {
                    const validation = this.validateImageClickLink(
                        imageLinkInput.value,
                    );

                    if (!validation.valid) {
                        this.setImageClickLinkError(validation.message);
                        return;
                    }

                    this.setImageClickLinkError("");

                    if (
                        validation.value &&
                        imageLinkInput.value !== validation.value
                    ) {
                        imageLinkInput.value = validation.value;
                        this.adjustSettings.imageLinkUrl = validation.value;
                    }
                });
            }

            if (imageLinkNewTab) {
                imageLinkNewTab.addEventListener("change", () => {
                    this.adjustSettings.imageLinkNewTab =
                        !!imageLinkNewTab.checked;
                    this.markAdjustDirty();
                });
            }

            this.bindAdjustSwitch("[data-nmm-adjust-image-lazy]", () => {
                this.adjustSettings.imageLoading =
                    this.adjustSettings.imageLoading === "lazy"
                        ? "eager"
                        : "lazy";

                this.markAdjustDirty();
                return this.adjustSettings.imageLoading === "lazy";
            });

            this.bindAdjustSwitch("[data-nmm-adjust-video-autoplay]", () => {
                this.adjustSettings.videoAutoplay =
                    !this.adjustSettings.videoAutoplay;
                this.markAdjustDirty();
                return this.adjustSettings.videoAutoplay;
            });

            this.bindAdjustSwitch("[data-nmm-adjust-video-controls]", () => {
                this.adjustSettings.videoControls =
                    !this.adjustSettings.videoControls;
                this.markAdjustDirty();
                return this.adjustSettings.videoControls;
            });

            this.bindAdjustSwitch("[data-nmm-adjust-video-loop]", () => {
                this.adjustSettings.videoLoop = !this.adjustSettings.videoLoop;
                this.markAdjustDirty();
                return this.adjustSettings.videoLoop;
            });

            this.bindAdjustSwitch("[data-nmm-adjust-video-muted]", () => {
                this.adjustSettings.videoMuted =
                    !this.adjustSettings.videoMuted;
                this.markAdjustDirty();
                return this.adjustSettings.videoMuted;
            });
        }

        bindAdjustSwitch(selector, toggleCallback) {
            const button = this.modal.querySelector(selector);
            if (!button || typeof toggleCallback !== "function") return;

            button.addEventListener("click", () => {
                const isActive = !!toggleCallback();

                button.classList.toggle("is-on", isActive);
                button.setAttribute(
                    "aria-pressed",
                    isActive ? "true" : "false",
                );
            });
        }

        resetAdjustSettings() {
            this.adjustSettings = {
                imageAlt: "",
                imageLoading: "lazy",
                imageLinkUrl: "",
                imageLinkNewTab: false,

                videoAutoplay: false,
                videoControls: true,
                videoLoop: false,
                videoMuted: false,
                videoPoster: "",

                gifMode: "autoplay",
            };

            this.readAdjustSettingsFromLegacyCustomMedia();
            this.syncAdjustMediaUI();
        }

        readAdjustSettingsFromLegacyCustomMedia() {
            const customMedia = window.Vvveb && window.Vvveb.CustomMedia;

            if (!customMedia) return;

            const node = this.resolveMediaNode(this.selectedNode);
            const type =
                this.targetMediaType || this.currentMediaType || "image";
            const tagName =
                node && node.tagName ? node.tagName.toLowerCase() : "";

            if (type === "image" || type === "gif") {
                if (node && tagName === "img") {
                    this.adjustSettings.imageAlt =
                        node.getAttribute("alt") || "";
                    this.adjustSettings.imageLoading =
                        node.getAttribute("loading") || "lazy";

                    const linkParent =
                        node.parentElement &&
                        node.parentElement.tagName &&
                        node.parentElement.tagName.toLowerCase() === "a"
                            ? node.parentElement
                            : null;

                    this.adjustSettings.imageLinkUrl = linkParent
                        ? linkParent.getAttribute("href") || ""
                        : "";

                    this.adjustSettings.imageLinkNewTab = linkParent
                        ? linkParent.getAttribute("target") === "_blank"
                        : false;
                } else if (customMedia.imageProperties) {
                    this.adjustSettings.imageAlt =
                        customMedia.imageProperties.alt || "";
                    this.adjustSettings.imageLoading =
                        customMedia.imageProperties.loading || "lazy";
                }
            }

            if (node && tagName === "iframe") {
                if (this.readYouTubeAdjustSettingsFromIframe(node)) {
                    return;
                }

                if (
                    typeof customMedia.readIframePropertiesFromNode ===
                    "function"
                ) {
                    customMedia.readIframePropertiesFromNode(node);

                    this.adjustSettings.videoAutoplay =
                        !!customMedia.iframeProperties.autoplay;
                    this.adjustSettings.videoControls =
                        !!customMedia.iframeProperties.controls;
                    this.adjustSettings.videoLoop =
                        !!customMedia.iframeProperties.loop;
                    this.adjustSettings.videoMuted =
                        !!customMedia.iframeProperties.muted;
                    this.adjustSettings.videoPoster = "";
                    return;
                }
            }

            if (
                node &&
                tagName === "video" &&
                typeof customMedia.readVideoPropertiesFromNode === "function"
            ) {
                customMedia.readVideoPropertiesFromNode(node);

                this.adjustSettings.videoAutoplay =
                    !!customMedia.videoProperties.autoplay;
                this.adjustSettings.videoControls =
                    !!customMedia.videoProperties.controls;
                this.adjustSettings.videoLoop =
                    !!customMedia.videoProperties.loop;
                this.adjustSettings.videoMuted =
                    !!customMedia.videoProperties.muted;
                this.adjustSettings.videoPoster =
                    customMedia.videoProperties.poster || "";
                return;
            }

            if (type === "gif") {
                if (
                    customMedia.gifProperties &&
                    customMedia.gifProperties.mode
                ) {
                    this.adjustSettings.gifMode =
                        customMedia.gifProperties.mode || "autoplay";
                }
            }
        }

        getActiveAdjustMediaType() {
            if (this.pendingSelectedMedia && this.pendingSelectedMedia.type) {
                return this.pendingSelectedMedia.type;
            }

            return this.targetMediaType || this.currentMediaType || "image";
        }

        getYouTubeLogoSvg(extraClass = "") {
            return `
    <svg
      class="nmm__youtube-logo-svg ${extraClass}"
      viewBox="0 0 68 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        class="nmm__youtube-logo-bg"
        d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.18.3 34 .3 34 .3S12.82.3 7.5 1.72C4.57 2.5 2.26 4.81 1.48 7.74.06 13.06.06 24.16.06 24.16s0 11.1 1.42 16.42c.78 2.93 3.09 5.24 6.02 6.02C12.82 48.02 34 48.02 34 48.02s21.18 0 26.5-1.42c2.93-.78 5.24-3.09 6.02-6.02 1.42-5.32 1.42-16.42 1.42-16.42s0-11.1-1.42-16.42z"
      ></path>
      <path
        class="nmm__youtube-logo-play"
        d="M45.15 24.16 27.6 14.03v20.26l17.55-10.13z"
      ></path>
    </svg>
  `;
        }

        getYouTubeVideoId(url = "") {
            const value = String(url || "").trim();

            if (!value) return "";

            try {
                const parsed = new URL(value, window.location.origin);
                const host = parsed.hostname
                    .replace(/^www\./, "")
                    .toLowerCase();

                if (host === "youtu.be") {
                    return parsed.pathname.replace(/^\/+/, "").split("/")[0];
                }

                if (host.includes("youtube.com")) {
                    if (parsed.pathname.includes("/embed/")) {
                        return (
                            parsed.pathname
                                .split("/embed/")[1]
                                ?.split("/")[0] || ""
                        );
                    }

                    if (parsed.pathname.includes("/shorts/")) {
                        return (
                            parsed.pathname
                                .split("/shorts/")[1]
                                ?.split("/")[0] || ""
                        );
                    }

                    return parsed.searchParams.get("v") || "";
                }
            } catch (error) {
                const embedMatch = value.match(
                    /youtube\.com\/embed\/([^?&/"'>\s]+)/i,
                );
                if (embedMatch) return embedMatch[1];

                const shortMatch = value.match(/youtu\.be\/([^?&/"'>\s]+)/i);
                if (shortMatch) return shortMatch[1];

                const watchMatch = value.match(/[?&]v=([^?&/"'>\s]+)/i);
                if (watchMatch) return watchMatch[1];

                const shortsMatch = value.match(
                    /youtube\.com\/shorts\/([^?&/"'>\s]+)/i,
                );
                if (shortsMatch) return shortsMatch[1];
            }

            return "";
        }

        getYouTubeThumbnail(url = "") {
            const id = this.getYouTubeVideoId(url);

            if (!id) return "";

            return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        }

        isYouTubeUrl(url = "") {
            const value = String(url || "").toLowerCase();

            return (
                value.includes("youtube.com/watch") ||
                value.includes("youtube.com/embed") ||
                value.includes("youtu.be/")
            );
        }

        isYouTubeMediaItem(media = null) {
            if (!media) return false;

            return (
                media.sourceKind === "youtube" ||
                media.embedProvider === "youtube" ||
                media.provider === "youtube" ||
                this.isYouTubeUrl(
                    media.originalUrl || media.url || media.src || "",
                )
            );
        }

        isYouTubeIframeNode(node) {
            if (!node || !node.tagName) return false;

            const tagName = node.tagName.toLowerCase();

            if (tagName !== "iframe") return false;

            return this.isYouTubeUrl(
                node.getAttribute("src") || node.src || "",
            );
        }

        resetAdjustSettingsForSelectedMedia(media = null) {
            if (!media) return;

            const type = media.type || this.detectMediaTypeFromUrl(media.url);
            const isYoutube = this.isYouTubeMediaItem(media);

            const altSource =
                media.alt ||
                media.title ||
                media.name ||
                this.getFileNameFromUrl(media.url || "");

            const currentNode = this.resolveMediaNode(this.selectedNode);

            const currentImageLinkParent =
                currentNode &&
                currentNode.tagName &&
                currentNode.tagName.toLowerCase() === "img" &&
                currentNode.parentElement &&
                currentNode.parentElement.tagName &&
                currentNode.parentElement.tagName.toLowerCase() === "a"
                    ? currentNode.parentElement
                    : null;

            const currentImageLinkUrl =
                currentImageLinkParent &&
                currentImageLinkParent.hasAttribute("href")
                    ? currentImageLinkParent.getAttribute("href") || ""
                    : "";

            const currentImageLinkNewTab =
                currentImageLinkParent &&
                currentImageLinkParent.getAttribute("target") === "_blank";

            this.adjustSettings = {
                imageAlt:
                    type === "image" || type === "gif"
                        ? currentNode &&
                          currentNode.tagName &&
                          currentNode.tagName.toLowerCase() === "img"
                            ? currentNode.getAttribute("alt") || ""
                            : this.getAltTextFromMediaName(altSource)
                        : "",

                imageLoading: "lazy",

                // Important:
                // Preserve existing image link when user changes/replaces image.
                imageLinkUrl: currentImageLinkUrl,
                imageLinkNewTab: currentImageLinkNewTab,

                videoAutoplay: false,
                videoControls: true,
                videoLoop: false,
                videoMuted: isYoutube ? true : false,
                videoPoster: "",

                gifMode: "autoplay",
            };

            this.syncAdjustMediaUI();
        }

        syncAdjustMediaUI() {
            if (!this.modal) return;

            const type = this.getActiveAdjustMediaType();

            const isImage = type === "image";
            const isGif = type === "gif";
            const isVideo = type === "video";

            const node = this.resolveMediaNode(this.selectedNode);
            const tagName =
                node && node.tagName ? node.tagName.toLowerCase() : "";

            const hasPendingSelection = !!this.pendingSelectedMedia;

            const isYoutubeVideo =
                isVideo &&
                (this.isYouTubeMediaItem(this.pendingSelectedMedia) ||
                    (!hasPendingSelection && this.isYouTubeIframeNode(node)));

            const isIframeVideo =
                isVideo &&
                (isYoutubeVideo ||
                    (!hasPendingSelection && tagName === "iframe"));

            this.modal
                .querySelectorAll("[data-nmm-adjust-image]")
                .forEach((item) => {
                    item.hidden = !(isImage || isGif);
                });

            this.modal
                .querySelectorAll("[data-nmm-adjust-video]")
                .forEach((item) => {
                    item.hidden = !isVideo;
                });

            this.modal
                .querySelectorAll("[data-nmm-adjust-native-video]")
                .forEach((item) => {
                    item.hidden = !isVideo || isIframeVideo;
                });

            const altInput = this.modal.querySelector(
                "[data-nmm-adjust-image-alt]",
            );
            const posterInput = this.modal.querySelector(
                "[data-nmm-adjust-video-poster]",
            );

            if (altInput) altInput.value = this.adjustSettings.imageAlt || "";
            if (posterInput)
                posterInput.value = this.adjustSettings.videoPoster || "";

            const imageLinkInput = this.modal.querySelector(
                "[data-nmm-adjust-image-link]",
            );
            const imageLinkNewTab = this.modal.querySelector(
                "[data-nmm-adjust-image-link-newtab]",
            );

            if (imageLinkInput) {
                imageLinkInput.value = this.adjustSettings.imageLinkUrl || "";
            }

            if (imageLinkNewTab) {
                imageLinkNewTab.checked = !!this.adjustSettings.imageLinkNewTab;
            }

            this.syncAdjustSwitch(
                "[data-nmm-adjust-image-lazy]",
                this.adjustSettings.imageLoading === "lazy",
            );

            this.syncAdjustSwitch(
                "[data-nmm-adjust-video-autoplay]",
                this.adjustSettings.videoAutoplay,
            );

            this.syncAdjustSwitch(
                "[data-nmm-adjust-video-controls]",
                this.adjustSettings.videoControls,
            );

            this.syncAdjustSwitch(
                "[data-nmm-adjust-video-loop]",
                this.adjustSettings.videoLoop,
            );

            this.syncAdjustSwitch(
                "[data-nmm-adjust-video-muted]",
                this.adjustSettings.videoMuted,
            );

            this.updateAdjustAltCount();
        }

        syncAdjustSwitch(selector, active) {
            const button = this.modal.querySelector(selector);
            if (!button) return;

            button.classList.toggle("is-on", !!active);
            button.setAttribute("aria-pressed", active ? "true" : "false");
        }

        syncGifModeButtons() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-adjust-gif-mode]")
                .forEach((button) => {
                    const mode = button.getAttribute(
                        "data-nmm-adjust-gif-mode",
                    );
                    button.classList.toggle(
                        "is-active",
                        mode === this.adjustSettings.gifMode,
                    );
                });
        }

        updateAdjustAltCount() {
            const count =
                this.modal &&
                this.modal.querySelector("[data-nmm-adjust-alt-count]");
            if (!count) return;

            count.textContent = String(
                (this.adjustSettings.imageAlt || "").length,
            );
        }

        syncAdjustSettingsToLegacyCustomMedia(customMedia) {
            if (!customMedia) return;

            if (customMedia.imageProperties) {
                customMedia.imageProperties.alt =
                    this.adjustSettings.imageAlt || "";
                customMedia.imageProperties.loading =
                    this.adjustSettings.imageLoading || "lazy";
            }

            if (customMedia.videoProperties) {
                customMedia.videoProperties.autoplay =
                    !!this.adjustSettings.videoAutoplay;
                customMedia.videoProperties.controls =
                    !!this.adjustSettings.videoControls;
                customMedia.videoProperties.loop =
                    !!this.adjustSettings.videoLoop;
                customMedia.videoProperties.muted =
                    !!this.adjustSettings.videoMuted;
                customMedia.videoProperties.poster =
                    this.adjustSettings.videoPoster || "";
            }

            if (customMedia.iframeProperties) {
                customMedia.iframeProperties.autoplay =
                    !!this.adjustSettings.videoAutoplay;
                customMedia.iframeProperties.controls =
                    !!this.adjustSettings.videoControls;
                customMedia.iframeProperties.loop =
                    !!this.adjustSettings.videoLoop;
                customMedia.iframeProperties.muted =
                    !!this.adjustSettings.videoMuted;
            }

            if (customMedia.gifProperties) {
                customMedia.gifProperties.mode =
                    this.adjustSettings.gifMode || "autoplay";
            }

            if (customMedia.elements) {
                if (customMedia.elements.altInput) {
                    customMedia.elements.altInput.value =
                        this.adjustSettings.imageAlt || "";
                }

                if (customMedia.elements.videoPosterInput) {
                    customMedia.elements.videoPosterInput.value =
                        this.adjustSettings.videoPoster || "";
                }
            }

            if (typeof customMedia.setLazyLoading === "function") {
                customMedia.setLazyLoading(
                    this.adjustSettings.imageLoading || "lazy",
                );
            }

            if (typeof customMedia.setVideoToggle === "function") {
                const oldActiveTab = customMedia.activeTab;

                customMedia.activeTab = this.getActiveAdjustMediaType();

                customMedia.setVideoToggle(
                    "autoplay",
                    !!this.adjustSettings.videoAutoplay,
                );
                customMedia.setVideoToggle(
                    "controls",
                    !!this.adjustSettings.videoControls,
                );
                customMedia.setVideoToggle(
                    "loop",
                    !!this.adjustSettings.videoLoop,
                );
                customMedia.setVideoToggle(
                    "muted",
                    !!this.adjustSettings.videoMuted,
                );

                customMedia.activeTab = oldActiveTab;
            }

            if (typeof customMedia.setGifMode === "function") {
                customMedia.setGifMode(
                    this.adjustSettings.gifMode || "autoplay",
                );
            }

            if (customMedia.selectedMedia && this.adjustSettings.imageAlt) {
                customMedia.selectedMedia.alt = this.adjustSettings.imageAlt;
            }
        }

        applyAdjustSettingsToNode(node) {
            if (!node) return;

            const finalNode = this.resolveMediaNode(node);
            if (!finalNode || !finalNode.tagName) return;

            const type =
                this.pendingSelectedMedia?.type ||
                this.detectNodeMediaType(finalNode) ||
                this.targetMediaType;

            if (type === "image" || type === "gif") {
                this.applyImageAdjustSettings(finalNode, type);
                return;
            }

            if (type === "video") {
                this.applyVideoAdjustSettings(finalNode);
            }
        }

        // Normalizes the URL for an image link

        validateImageClickLink(value) {
            const raw = String(value || "").trim();

            // Empty is valid because empty removes the image link.
            if (!raw) {
                return {
                    valid: true,
                    value: "",
                    message: "",
                };
            }

            if (/\s/.test(raw)) {
                return {
                    valid: false,
                    value: raw,
                    message:
                        "Link cannot contain spaces. Please enter a valid URL.",
                };
            }

            const lower = raw.toLowerCase();

            if (
                lower.startsWith("javascript:") ||
                lower.startsWith("data:") ||
                lower.startsWith("vbscript:") ||
                lower.startsWith("file:") ||
                lower.startsWith("ftp:")
            ) {
                return {
                    valid: false,
                    value: raw,
                    message: "This link type is not allowed.",
                };
            }

            if (raw.startsWith("#")) {
                if (raw.length === 1) {
                    return {
                        valid: false,
                        value: raw,
                        message: "Please enter a valid section ID after #.",
                    };
                }

                return {
                    valid: true,
                    value: raw,
                    message: "",
                };
            }

            if (raw.startsWith("/")) {
                return {
                    valid: true,
                    value: raw,
                    message: "",
                };
            }

            if (lower.startsWith("mailto:")) {
                const email = raw.replace(/^mailto:/i, "").trim();

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    return {
                        valid: false,
                        value: raw,
                        message: "Please enter a valid email link.",
                    };
                }

                return {
                    valid: true,
                    value: raw,
                    message: "",
                };
            }

            if (lower.startsWith("tel:")) {
                const phone = raw.replace(/^tel:/i, "").trim();

                if (!/^\+?[0-9\-() ]{6,20}$/.test(phone)) {
                    return {
                        valid: false,
                        value: raw,
                        message: "Please enter a valid phone link.",
                    };
                }

                return {
                    valid: true,
                    value: raw,
                    message: "",
                };
            }

            let finalUrl = raw;

            if (!/^https?:\/\//i.test(finalUrl)) {
                finalUrl = "https://" + finalUrl;
            }

            try {
                const parsed = new URL(finalUrl);

                if (!parsed.hostname || !parsed.hostname.includes(".")) {
                    return {
                        valid: false,
                        value: raw,
                        message: "Please enter a valid website URL.",
                    };
                }

                return {
                    valid: true,
                    value: finalUrl,
                    message: "",
                };
            } catch (error) {
                return {
                    valid: false,
                    value: raw,
                    message: "Please enter a valid URL.",
                };
            }
        }

        setImageClickLinkError(message = "") {
            if (!this.modal) return;

            const input = this.modal.querySelector(
                "[data-nmm-adjust-image-link]",
            );
            const error = this.modal.querySelector(
                "[data-nmm-adjust-image-link-error]",
            );

            if (!input || !error) return;

            if (message) {
                input.classList.add("is-invalid");
                error.textContent = message;
                error.hidden = false;
            } else {
                input.classList.remove("is-invalid");
                error.textContent = "";
                error.hidden = true;
            }
        }

        validateImageClickLinkBeforeApply() {
            if (!this.modal) return true;

            const type = this.getActiveAdjustMediaType();

            if (type !== "image" && type !== "gif") {
                return true;
            }

            const input = this.modal.querySelector(
                "[data-nmm-adjust-image-link]",
            );
            if (!input) return true;

            const validation = this.validateImageClickLink(input.value);

            if (!validation.valid) {
                this.expandAdjustMedia();
                this.setImageClickLinkError(validation.message);

                setTimeout(() => {
                    try {
                        input.focus();
                    } catch (e) {}
                }, 0);

                return false;
            }

            this.setImageClickLinkError("");

            this.adjustSettings.imageLinkUrl = validation.value;

            if (validation.value && input.value !== validation.value) {
                input.value = validation.value;
            }

            return true;
        }

        normalizeImageLinkUrl(value) {
            const raw = String(value || "").trim();

            if (!raw) return "";

            if (
                raw.startsWith("#") ||
                raw.startsWith("/") ||
                /^mailto:/i.test(raw) ||
                /^tel:/i.test(raw) ||
                /^https?:\/\//i.test(raw)
            ) {
                return raw;
            }

            return "https://" + raw;
        }

        applyImageLinkOnlyToNode(node) {
            const finalNode = this.resolveMediaNode(node);

            if (
                !finalNode ||
                !finalNode.tagName ||
                finalNode.tagName.toLowerCase() !== "img"
            ) {
                return;
            }

            this.applyImageLinkSettings(finalNode);
        }

        applyImageLinkSettings(imgNode) {
            if (!imgNode || imgNode.tagName.toLowerCase() !== "img") return;

            const rawUrl = this.adjustSettings.imageLinkUrl || "";
            const validation = this.validateImageClickLink(rawUrl);

            if (!validation.valid) {
                this.setImageClickLinkError(validation.message);
                this.expandAdjustMedia();
                return;
            }

            const finalUrl = validation.value;
            const openNewTab = !!this.adjustSettings.imageLinkNewTab;

            let anchor =
                imgNode.parentElement &&
                imgNode.parentElement.tagName &&
                imgNode.parentElement.tagName.toLowerCase() === "a"
                    ? imgNode.parentElement
                    : null;

            // If there is no link value and image is not already wrapped,
            // do nothing. Do not create an empty anchor shell.
            if (!finalUrl && !anchor) {
                this._skipImageLinkInnerHtmlUndo = false;
                return;
            }

            const oldHref = anchor ? anchor.getAttribute("href") : null;
            const oldTarget = anchor ? anchor.getAttribute("target") : null;

            if (!anchor) {
                anchor = imgNode.ownerDocument.createElement("a");
                imgNode.parentNode.insertBefore(anchor, imgNode);
                anchor.appendChild(imgNode);
            }

            anchor.setAttribute("data-zg-image-link", "true");
            anchor.setAttribute("data-zg-image-link-shell", "true");

            if (!anchor.style.display) {
                anchor.style.display = "inline-block";
            }

            if (finalUrl) {
                anchor.setAttribute("href", finalUrl);

                if (openNewTab) {
                    anchor.setAttribute("target", "_blank");
                } else {
                    anchor.removeAttribute("target");
                }

                // Keep rel stable when href exists.
                // This avoids useless rel undo states.
                anchor.setAttribute("rel", "noopener noreferrer");
            } else {
                anchor.removeAttribute("href");
                anchor.removeAttribute("target");

                // Do not remove rel here.
                // Empty anchor shell will be cleaned during save if needed.
            }

            const newHref = anchor.getAttribute("href");
            const newTarget = anchor.getAttribute("target");

            const hasLinkAttrChange =
                oldHref !== newHref || oldTarget !== newTarget;

            // Prevent parent innerHTML undo for image link changes.
            // Image should not be recreated during undo/redo.
            this._skipImageLinkInnerHtmlUndo = hasLinkAttrChange;

            if (
                hasLinkAttrChange &&
                window.Vvveb?.Undo &&
                typeof Vvveb.Undo.addMutation === "function"
            ) {
                if (oldHref !== newHref) {
                    Vvveb.Undo.addMutation({
                        type: "attributes",
                        target: anchor,
                        attributeName: "href",
                        oldValue: oldHref,
                        newValue: newHref,
                    });
                }

                if (oldTarget !== newTarget) {
                    Vvveb.Undo.addMutation({
                        type: "attributes",
                        target: anchor,
                        attributeName: "target",
                        oldValue: oldTarget,
                        newValue: newTarget,
                    });
                }
            }
        }

        applyImageAdjustSettings(node, type = "image") {
            if (!node || node.tagName.toLowerCase() !== "img") return;

            if (this.adjustSettings.imageLoading === "lazy") {
                node.setAttribute("loading", "lazy");
            } else {
                node.setAttribute("loading", "eager");
            }

            if (type === "gif") {
                node.setAttribute("data-zg-media-type", "gif");
            } else {
                node.setAttribute("data-zg-media-type", "image");
            }

            this.applyImageLinkSettings(node);
        }

        applyVideoAdjustSettings(node) {
            if (!node || !node.tagName) return;

            const tagName = node.tagName.toLowerCase();

            if (tagName === "video") {
                this.setBooleanAttribute(
                    node,
                    "autoplay",
                    !!this.adjustSettings.videoAutoplay,
                );
                this.setBooleanAttribute(
                    node,
                    "controls",
                    !!this.adjustSettings.videoControls,
                );
                this.setBooleanAttribute(
                    node,
                    "loop",
                    !!this.adjustSettings.videoLoop,
                );
                this.setBooleanAttribute(
                    node,
                    "muted",
                    !!this.adjustSettings.videoMuted,
                );

                node.muted = !!this.adjustSettings.videoMuted;

                if (this.adjustSettings.videoPoster) {
                    node.setAttribute(
                        "poster",
                        this.adjustSettings.videoPoster,
                    );
                } else {
                    node.removeAttribute("poster");
                }

                node.setAttribute("data-zg-media-type", "video");

                if (typeof node.load === "function") {
                    try {
                        node.load();
                    } catch (error) {}
                }

                return;
            }

            if (tagName === "iframe") {
                this.applyIframeVideoAdjustSettings(node);
            }
        }

        applyIframeVideoAdjustSettings(iframe) {
            if (!iframe || iframe.tagName.toLowerCase() !== "iframe") return;

            let src = iframe.getAttribute("src") || "";

            if (!src) return;

            try {
                const url = new URL(src, window.location.origin);

                const autoplay = !!this.adjustSettings.videoAutoplay;
                const muted = !!this.adjustSettings.videoMuted;
                const loop = !!this.adjustSettings.videoLoop;
                const controls = !!this.adjustSettings.videoControls;

                url.searchParams.set("autoplay", autoplay ? "1" : "0");

                /**
                 * YouTube uses mute=1.
                 * Some readers/checkers use muted=1.
                 * Keep both so your modal can read it correctly after reopening.
                 */
                url.searchParams.set("mute", muted ? "1" : "0");
                url.searchParams.set("muted", muted ? "1" : "0");

                url.searchParams.set("loop", loop ? "1" : "0");
                url.searchParams.set("controls", controls ? "1" : "0");

                if (loop) {
                    const videoId = this.getYouTubeVideoId(url.toString());
                    if (videoId) {
                        url.searchParams.set("playlist", videoId);
                    }
                } else {
                    url.searchParams.delete("playlist");
                }

                iframe.setAttribute("src", url.toString());

                iframe.setAttribute("data-zg-media-type", "video");
                iframe.setAttribute("data-media-embed", "video");
                iframe.setAttribute("data-embed-provider", "youtube");

                iframe.setAttribute(
                    "data-zg-video-autoplay",
                    autoplay ? "1" : "0",
                );
                iframe.setAttribute("data-zg-video-muted", muted ? "1" : "0");
                iframe.setAttribute("data-zg-video-loop", loop ? "1" : "0");
                iframe.setAttribute(
                    "data-zg-video-controls",
                    controls ? "1" : "0",
                );

                const allow = iframe.getAttribute("allow") || "";
                if (!allow.includes("autoplay")) {
                    iframe.setAttribute(
                        "allow",
                        `${allow}; autoplay; encrypted-media; picture-in-picture`.replace(
                            /^;\s*/,
                            "",
                        ),
                    );
                }
            } catch (error) {
                console.warn(
                    "[NewMediaModal] Could not update iframe video params.",
                    error,
                );
            }
        }

        setBooleanAttribute(node, attribute, enabled) {
            if (!node) return;

            if (enabled) {
                node.setAttribute(attribute, "");
            } else {
                node.removeAttribute(attribute);
            }
        }

        setApplyEnabled(enabled) {
            const applyButton =
                this.modal && this.modal.querySelector(this.selectors.apply);
            if (!applyButton) return;

            applyButton.disabled = !enabled;
            applyButton.classList.toggle("is-disabled", !enabled);
        }

        updateApplyState() {
            const hasMediaSelection = !!(
                this.pendingSelectedMedia && this.pendingSelectedMedia.url
            );
            const hasMediaChanges = !!this.mediaDirty && hasMediaSelection;
            const hasAdjustChanges = !!this.adjustDirty;

            this.setApplyEnabled(hasMediaChanges || hasAdjustChanges);
        }

        markAdjustDirty() {
            this.adjustDirty = true;
            this.updateApplyState();
        }

        markMediaDirty() {
            this.mediaDirty = true;
            this.updateApplyState();
        }

        loadLocalMediaList(key) {
            try {
                return JSON.parse(localStorage.getItem(key) || "[]");
            } catch (error) {
                return [];
            }
        }

        saveLocalMediaList(key, items) {
            try {
                localStorage.setItem(key, JSON.stringify(items.slice(0, 50)));
            } catch (error) {}
        }

     rememberRecentMedia(item) {
    if (!item || !item.url) return;


  

            const normalized = {
                id: `recent-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                url: item.url,
                originalUrl: item.originalUrl || item.url,
                thumbnail: item.thumbnail || item.url,
                name: item.name || this.getFileNameFromUrl(item.url),
                title:
                    item.title ||
                    item.name ||
                    this.getFileNameFromUrl(item.url),
                alt: item.alt || "",
                type: item.type || this.detectMediaTypeFromUrl(item.url),
                size: item.size || "",
                dimensions: item.dimensions || "Auto",
                source: item.source || item.sourceKind || "link",
                sourceKind: item.sourceKind || item.source || "",
                format: item.format || this.getFileExtensionLabel(item.url),
                recentAt: new Date().toISOString(),
                raw: item.raw || item,
            };

            this.recentMediaItems = [
                normalized,
                ...this.recentMediaItems.filter(
                    (media) => media && media.url !== normalized.url,
                ),
            ].slice(0, 100);

            this.saveLocalMediaList(
                "zigrow_recent_media",
                this.recentMediaItems,
            );
        }

        resetModalViewState() {
            if (!this.modal) return;

            const scrollTargets = [
                this.modal,
                this.modal.querySelector(".nmm__dialog"),
                this.modal.querySelector(".nmm__body"),
                this.modal.querySelector(".nmm__content"),
                this.modal.querySelector(".nmm__workspace"),
                this.modal.querySelector(".nmm__source-panel.is-active"),
                this.modal.querySelector("[data-nmm-my-media-grid]"),
                this.modal.querySelector("[data-nmm-unsplash-grid]"),
                this.modal.querySelector("[data-nmm-ai-grid]"),
            ];

            scrollTargets.forEach((el) => {
                if (el) {
                    el.scrollTop = 0;
                    el.scrollLeft = 0;
                }
            });

            const adjustBody = this.modal.querySelector(
                this.selectors.adjustBody,
            );
            const adjustToggle = this.modal.querySelector(
                this.selectors.adjustToggle,
            );

            this.expandAdjustMedia();
        }

        stripMediaOverlayHelpersFromClone(root) {
            if (!root || !root.querySelectorAll) return root;

            root.querySelectorAll(
                ".zigrow-embed-edit-overlay, [data-media-overlay], [data-builder-only='true']",
            ).forEach((el) => el.remove());

            return root;
        }

        sanitizeMediaOverlayHtml(html = "") {
            if (!html || typeof html !== "string") return html || "";

            const template = document.createElement("template");
            template.innerHTML = html;

            this.stripMediaOverlayHelpersFromClone(template.content);

            return template.innerHTML;
        }

        sanitizeMediaUndoMutation(mutation) {
            if (!mutation || typeof mutation !== "object") return;

            ["oldValue", "newValue", "innerHTML", "outerHTML"].forEach(
                (key) => {
                    if (
                        typeof mutation[key] === "string" &&
                        (mutation[key].includes("zigrow-embed-edit-overlay") ||
                            mutation[key].includes("data-media-overlay") ||
                            mutation[key].includes("data-builder-only"))
                    ) {
                        mutation[key] = this.sanitizeMediaOverlayHtml(
                            mutation[key],
                        );
                    }
                },
            );
        }

        sanitizeRecentMediaUndoHistory() {
            const undo = window.Vvveb && window.Vvveb.Undo;
            if (!undo) return;

            const possibleLists = [
                undo.mutations,
                undo.stack,
                undo.undoStack,
                undo.redoStack,
                undo.history,
                undo.undoList,
                undo.redoList,
            ].filter(Array.isArray);

            possibleLists.forEach((list) => {
                list.slice(-10).forEach((mutation) => {
                    this.sanitizeMediaUndoMutation(mutation);
                });
            });

            this.sanitizeMediaUndoMutation(undo.currentMutation);
            this.sanitizeMediaUndoMutation(undo.lastMutation);
        }

        removeLiveMediaOverlayHelpers(root) {
            if (!root) return;

            const targetRoot = root.querySelectorAll
                ? root
                : root.parentElement;
            if (!targetRoot) return;

            targetRoot
                .querySelectorAll(
                    ".zigrow-embed-edit-overlay, [data-media-overlay], [data-builder-only='true']",
                )
                .forEach((el) => el.remove());
        }

        captureMediaDomSnapshot(node) {
            const target = this.resolveUndoSnapshotNode(node);

            if (!target || !target.tagName) return null;

            const cleanClone = target.cloneNode(true);
            this.stripMediaOverlayHelpersFromClone(cleanClone);

            return {
                target,
                tagName: target.tagName.toLowerCase(),
                innerHTML: cleanClone.innerHTML || "",
                outerHTML: cleanClone.outerHTML || "",
                attributes: this.captureElementAttributes(target),
            };
        }

        captureElementAttributes(node) {
            const attributes = {};

            if (!node || !node.attributes) return attributes;

            Array.from(node.attributes).forEach((attr) => {
                attributes[attr.name] = attr.value;
            });

            return attributes;
        }

        resolveUndoSnapshotNode(node) {
            const mediaNode = this.resolveMediaNode(node);

            if (!mediaNode) return node;

            const tagName = (mediaNode.tagName || "").toLowerCase();

            // For linked images, always snapshot the wrapper outside the <a>,
            // not the <a> itself. This keeps undo/redo as one stable parent.innerHTML change.
            if (tagName === "img") {
                const linkParent =
                    mediaNode.parentElement &&
                    mediaNode.parentElement.tagName &&
                    mediaNode.parentElement.tagName.toLowerCase() === "a" &&
                    (mediaNode.parentElement.hasAttribute(
                        "data-zg-image-link",
                    ) ||
                        mediaNode.parentElement.querySelector(":scope > img"))
                        ? mediaNode.parentElement
                        : null;

                if (linkParent && linkParent.parentElement) {
                    return linkParent.parentElement;
                }
            }

            const wrapper =
                mediaNode.closest?.("[data-zg-media-wrapper]") ||
                mediaNode.closest?.(".zg-media-wrapper") ||
                mediaNode.closest?.(".img-wrapper-style") ||
                mediaNode.closest?.(".image-wrapper") ||
                mediaNode.closest?.(".media-wrapper") ||
                mediaNode.closest?.(".video-wrapper") ||
                mediaNode.closest?.(".ratio") ||
                mediaNode.parentElement;

            return wrapper || mediaNode;
        }

        addMediaDomUndoSnapshot(node, beforeSnapshot, afterSnapshot) {
            if (!beforeSnapshot || !afterSnapshot) return;
            if (
                !window.Vvveb?.Undo ||
                typeof Vvveb.Undo.addMutation !== "function"
            )
                return;

            const target = beforeSnapshot.target || node;

            if (
                target &&
                target.tagName &&
                target.tagName.toLowerCase() !== "a" &&
                ["href", "target", "rel", "data-zg-image-link"].some((attr) =>
                    Object.prototype.hasOwnProperty.call(
                        afterSnapshot.attributes || {},
                        attr,
                    ),
                )
            ) {
                delete afterSnapshot.attributes.href;
                delete afterSnapshot.attributes.target;
                delete afterSnapshot.attributes.rel;
                delete afterSnapshot.attributes["data-zg-image-link"];
            }

            if (!target) return;

            const beforeHtml = this.sanitizeMediaOverlayHtml(
                beforeSnapshot.innerHTML || "",
            );
            const afterHtml = this.sanitizeMediaOverlayHtml(
                afterSnapshot.innerHTML || "",
            );

            if (beforeHtml !== afterHtml) {
                // Image link wrapping should not use innerHTML undo.
                // It recreates the <img>, causing hidden/delayed image display.
                if (this._skipImageLinkInnerHtmlUndo) {
                    this._skipImageLinkInnerHtmlUndo = false;
                    return;
                }

                Vvveb.Undo.addMutation({
                    type: "characterData",
                    target,
                    oldValue: beforeHtml,
                    newValue: afterHtml,
                });
                return;
            }

            const beforeAttrs = beforeSnapshot.attributes || {};
            const afterAttrs = afterSnapshot.attributes || {};

            const importantAttrs = [
                "src",
                "srcset",
                "alt",
                "title",
                "loading",
                "poster",
                "controls",
                "autoplay",
                "muted",
                "loop",
                "data-zg-media-type",
            ];

            for (const attrName of importantAttrs) {
                const oldValue = beforeAttrs[attrName] ?? null;
                const newValue = afterAttrs[attrName] ?? null;

                if (oldValue !== newValue) {
                    Vvveb.Undo.addMutation({
                        type: "attributes",
                        target,
                        attributeName: attrName,
                        oldValue,
                        newValue,
                    });
                    return;
                }
            }
        }

        readYouTubeAdjustSettingsFromIframe(iframe) {
            if (!iframe || iframe.tagName.toLowerCase() !== "iframe")
                return false;

            const src = iframe.getAttribute("src") || "";

            if (!this.isYouTubeUrl(src)) return false;

            try {
                const url = new URL(src, window.location.origin);

                const getStored = (attr, paramNames = []) => {
                    const dataValue = iframe.getAttribute(attr);

                    if (dataValue === "1") return true;
                    if (dataValue === "0") return false;

                    for (const param of paramNames) {
                        const value = url.searchParams.get(param);

                        if (value === "1") return true;
                        if (value === "0") return false;
                    }

                    return false;
                };

                this.adjustSettings.videoAutoplay = getStored(
                    "data-zg-video-autoplay",
                    ["autoplay"],
                );
                this.adjustSettings.videoMuted = getStored(
                    "data-zg-video-muted",
                    ["mute", "muted"],
                );
                this.adjustSettings.videoLoop = getStored(
                    "data-zg-video-loop",
                    ["loop"],
                );

                const controlsData = iframe.getAttribute(
                    "data-zg-video-controls",
                );
                const controlsParam = url.searchParams.get("controls");

                if (controlsData === "0" || controlsParam === "0") {
                    this.adjustSettings.videoControls = false;
                } else {
                    this.adjustSettings.videoControls = true;
                }

                this.adjustSettings.videoPoster = "";

                return true;
            } catch (error) {
                return false;
            }
        }

        getBackgroundImageSource(node) {
            if (!node || !node.style) return "";

            let bg = node.style.backgroundImage || "";

            if (!bg && window.getComputedStyle) {
                try {
                    bg = window.getComputedStyle(node).backgroundImage || "";
                } catch (error) {
                    bg = "";
                }
            }

            if (!bg || bg === "none") return "";

            const match = bg.match(/url\(["']?(.*?)["']?\)/i);
            return match && match[1] ? match[1] : "";
        }

        getFavoriteContextItem(context = "selected") {
            if (context === "unsplash") {
                return this.unsplashSelectedMedia || this.pendingSelectedMedia;
            }

            if (context === "ai") {
                return this.aiSelectedMedia || this.pendingSelectedMedia;
            }

       if (context === "link") {
    return this.linkCheckedMedia || this.pendingSelectedMedia;
}

if (context === "giphy") {
    return this.giphySelectedMedia || this.pendingSelectedMedia;
}

return this.pendingSelectedMedia;
        }

        normalizeFavoriteMediaItem(item) {
            if (!item || !item.url) return null;

            return {
                id: item.id || `favorite-${Date.now()}`,
                url: item.url,
                originalUrl: item.originalUrl || item.url,
                thumbnail: item.thumbnail || item.url,
                name: item.name || this.getFileNameFromUrl(item.url),
                title:
                    item.title ||
                    item.name ||
                    this.getFileNameFromUrl(item.url),
                alt: item.alt || "",
                type: item.type || this.detectMediaTypeFromUrl(item.url),
                size: item.size || "",
                dimensions: item.dimensions || "Auto",
                source: item.source || item.sourceKind || "my-media",
                sourceKind: item.sourceKind || item.source || "",
                format: item.format || this.getFileExtensionLabel(item.url),
                favoriteAt: new Date().toISOString(),
                raw: item.raw || item,
            };
        }

        isFavoriteMedia(item) {
            if (!item || !item.url) return false;

            return this.favoriteMediaItems.some(
                (media) => media && media.url === item.url,
            );
        }

       toggleFavoriteMedia(item) {
    if (!item || !item.url) return;


    const exists = this.isFavoriteMedia(item);

            if (exists) {
                this.favoriteMediaItems = this.favoriteMediaItems.filter(
                    (media) => {
                        return media && media.url !== item.url;
                    },
                );
            } else {
                const normalized = this.normalizeFavoriteMediaItem(item);

                if (!normalized) return;

                this.favoriteMediaItems = [
                    normalized,
                    ...this.favoriteMediaItems.filter(
                        (media) => media && media.url !== normalized.url,
                    ),
                ].slice(0, 100);
            }

            this.saveLocalMediaList(
                "zigrow_favorite_media",
                this.favoriteMediaItems,
            );
        }

        syncFavoriteButtons() {
            if (!this.modal) return;

            this.modal
                .querySelectorAll("[data-nmm-favorite-toggle]")
                .forEach((button) => {
                    const context =
                        button.getAttribute("data-nmm-favorite-toggle") ||
                        "selected";
                    const item = this.getFavoriteContextItem(context);
                

button.hidden = false;
                    const active = this.isFavoriteMedia(item);

                    button.classList.toggle("is-favorite", active);
                    button.setAttribute(
                        "aria-pressed",
                        active ? "true" : "false",
                    );

                    const tooltipText = active
                        ? "Remove from favourites"
                        : "Add to favourites";
                    button.setAttribute("title", tooltipText);
                    button.setAttribute("aria-label", tooltipText);
                    button.setAttribute("data-bs-original-title", tooltipText);

                    if (window.bootstrap?.Tooltip) {
                        const tooltip = bootstrap.Tooltip.getInstance(button);
                        if (tooltip) {
                            tooltip.setContent({
                                ".tooltip-inner": tooltipText,
                            });
                        }
                    }

                    const icon = button.querySelector("i");

                    if (icon) {
                        icon.classList.toggle("fa-regular", !active);
                        icon.classList.toggle("fa-solid", active);
                        icon.classList.toggle("fa-heart", true);
                        icon.classList.remove("fa-star");
                    }
                });
        }

        applyPerPageConfigByMode() {
            const config =
                this.mode === "background-image"
                    ? this.perPageConfig.backgroundImage
                    : this.perPageConfig.replaceMedia;

            this.mediaPerPage = config.myMedia;
            this.unsplashPerPage = config.unsplash;
            this.aiPerPage = config.aiLibrary;
        }

        expandAdjustMedia() {
            if (!this.modal) return;

            const adjustBody = this.modal.querySelector(
                this.selectors.adjustBody,
            );
            const adjustToggle = this.modal.querySelector(
                this.selectors.adjustToggle,
            );

            if (adjustBody) {
                adjustBody.removeAttribute("hidden");
            }

            if (adjustToggle) {
                adjustToggle.setAttribute("aria-expanded", "true");
                adjustToggle.classList.add("is-open");
            }
        }

        getMyMediaSecondMeta(media = {}) {
            const raw = media.raw || {};

            const rawSize =
                media.rawSize ||
                media.sizeBytes ||
                media.bytes ||
                media.fileSize ||
                media.filesize ||
                raw.sizeBytes ||
                raw.bytes ||
                raw.fileSize ||
                raw.filesize ||
                raw.size ||
                media.size ||
                "";

            if (this.isYouTubeMediaItem(media)) {
                return {
                    label: "Size",
                    value: "Streaming",
                };
            }

            const normalizedSize = String(rawSize || "").trim();

            const semanticValues = [
                "",
                "auto",
                "external",
                "unknown",
                "not available",
                "template asset",
                "ai generated",
            ];

            if (!semanticValues.includes(normalizedSize.toLowerCase())) {
                const numericSize = Number(normalizedSize);

                return {
                    label: "Size",
                    value:
                        typeof rawSize === "number" ||
                        (normalizedSize && Number.isFinite(numericSize))
                            ? this.formatMediaSize(numericSize)
                            : normalizedSize,
                };
            }

            return {
                label: "Size",
                value: "Not available",
            };
        }

        capitalize(value) {
            return (
                String(value || "")
                    .charAt(0)
                    .toUpperCase() + String(value || "").slice(1)
            );
        }

        shortenText(value, maxLength) {
            const text = String(value || "");
            if (text.length <= maxLength) return text;
            return `${text.slice(0, maxLength - 3)}...`;
        }

        escapeAttr(value) {
            return String(value || "")
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
    }

    // Create one global instance that works even if the builder namespace is unavailable in console.
    const newMediaModalInstance = new NewMediaModal();

    // Direct browser-console access:
    // window.NewMediaModal.open();
    window.NewMediaModal = newMediaModalInstance;

    // Vvveb namespace access:
    // Vvveb.NewMediaModal.open();
    window.Vvveb = window.Vvveb || {};
    window.Vvveb.NewMediaModal = newMediaModalInstance;

    // Optional class reference, useful only for debugging.
    window.NewMediaModalClass = NewMediaModal;
})(window, document);
