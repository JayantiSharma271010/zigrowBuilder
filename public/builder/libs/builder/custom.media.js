if (!window.Vvveb) {
  console.error("Vvveb is not available for CustomMedia");
} else {
  Vvveb.CustomMedia = {
    isInit: false,
    activeTab: "image",
    sourceMode: "upload",
    selectedNode: null,
    elements: {},
    selectedMedia: {
      src: "",
      alt: "",
      title: "",
      description: "",
    },

    imageProperties: {
      alt: "",
      loading: "lazy",
    },

    iframeProperties: {
      autoplay: false,
      controls: true,
      loop: false,
      muted: false,
    },

    videoProperties: {
      autoplay: false,
      controls: true,
      loop: false,
      muted: false,
      poster: "",
    },

    gifProperties: {
      // mode: "autoplay", // autoplay | hover | click
    },
    mediaContext: {
      originalType: "image",
      activeTabType: "image",
      pendingType: null,
      pendingSrc: "",
      pendingEmbedType: null,
      videoMode: "native",
      embedProvider: null,
      conversionRequired: false,
      canApply: false,
    },

    init: function () {
      if (this.isInit) return;

      this.cacheDom();
      this.bindEvents();
      this.isInit = true;
    },

    cacheDom: function () {
      this.elements.popup = document.getElementById("custom-media-popup");
      if (!this.elements.popup) return;

      this.elements.overlay = this.elements.popup.querySelector(
        ".zg-custom-media-overlay",
      );
      this.elements.modal = this.elements.popup.querySelector(
        ".zg-custom-media-modal",
      );
      this.elements.closeBtn = document.getElementById("custom-media-close");
      this.elements.cancelBtn = document.getElementById("custom-media-cancel");
      this.elements.applyBtn = document.getElementById("custom-media-apply");

      this.elements.tabs =
        this.elements.popup.querySelectorAll("[data-media-tab]");
      this.elements.panels =
        this.elements.popup.querySelectorAll("[data-media-panel]");

      // image properties
      this.elements.altInput = document.getElementById(
        "custom-media-image-alt",
      );
      this.elements.lazyToggle = document.getElementById(
        "custom-media-image-lazy-toggle",
      );

      this.elements.sourceButtons =
        this.elements.popup.querySelectorAll("[data-source-mode]");
      this.elements.sourcePanels = this.elements.popup.querySelectorAll(
        "[data-source-panel]",
      );

      this.elements.notice = document.getElementById(
        "custom-media-conversion-notice",
      );
      this.elements.noticeTitle = document.getElementById(
        "custom-media-conversion-title",
      );
      this.elements.noticeText = document.getElementById(
        "custom-media-conversion-text",
      );

      this.elements.videoAutoplayToggle = document.getElementById(
        "custom-media-video-autoplay-toggle",
      );
      this.elements.videoControlsToggle = document.getElementById(
        "custom-media-video-controls-toggle",
      );
      this.elements.videoLoopToggle = document.getElementById(
        "custom-media-video-loop-toggle",
      );
      this.elements.videoMutedToggle = document.getElementById(
        "custom-media-video-muted-toggle",
      );
      this.elements.videoPosterInput = document.getElementById(
        "custom-media-video-poster",
      );

      // GIF properties
      this.elements.gifModeGroup = document.getElementById(
        "custom-media-gif-mode-group",
      );
      this.elements.gifModeButtons =
        this.elements.popup.querySelectorAll("[data-gif-mode]");

      // media-gallery button elements
      this.elements.openGalleryBtn = document.getElementById(
        "custom-media-open-gallery",
      );

      this.elements.urlInput = this.elements.popup.querySelector(
        ".zg-custom-media-url-input",
      );

      this.elements.urlError = document.getElementById(
        "custom-media-url-error",
      );
    },

    bindEvents: function () {
      let self = this;

      if (this.elements.closeBtn) {
        this.elements.closeBtn.addEventListener("click", function () {
          self.close();
        });
      }

      if (this.elements.cancelBtn) {
        this.elements.cancelBtn.addEventListener("click", function () {
          self.close();
        });
      }

      if (this.elements.overlay) {
        this.elements.overlay.addEventListener("click", function () {
          self.close();
        });
      }

      if (this.elements.tabs) {
        this.elements.tabs.forEach(function (tabBtn) {
          tabBtn.addEventListener("click", function () {
            self.setTab(this.dataset.mediaTab);
          });
        });
      }

      if (this.elements.sourceButtons) {
        this.elements.sourceButtons.forEach(function (btn) {
          btn.addEventListener("click", function () {
            self.setSourceMode(this.dataset.sourceMode);
          });
        });
      }

      if (this.elements.openGalleryBtn) {
        this.elements.openGalleryBtn.addEventListener("click", function () {
          self.openMediaGallery();
        });
      }

      if (this.elements.applyBtn) {
        this.elements.applyBtn.addEventListener("click", function () {
          self.applySelectedMedia();
        });
      }

      if (this.elements.altInput) {
        this.elements.altInput.addEventListener("input", function () {
          self.imageProperties.alt = this.value || "";
        });
      }

      if (this.elements.lazyToggle) {
        this.elements.lazyToggle.addEventListener("click", function () {
          self.setLazyLoading(
            self.imageProperties.loading === "lazy" ? "eager" : "lazy",
          );
        });
      }

      if (this.elements.videoAutoplayToggle) {
        this.elements.videoAutoplayToggle.addEventListener(
          "click",
          function () {
            const target =
              self.mediaContext.videoMode === "embed"
                ? self.iframeProperties
                : self.videoProperties;

            self.setVideoToggle("autoplay", !target.autoplay);
          },
        );
      }

      if (this.elements.videoControlsToggle) {
        this.elements.videoControlsToggle.addEventListener(
          "click",
          function () {
            const target =
              self.mediaContext.videoMode === "embed"
                ? self.iframeProperties
                : self.videoProperties;

            self.setVideoToggle("controls", !target.controls);
          },
        );
      }
      if (this.elements.videoLoopToggle) {
        this.elements.videoLoopToggle.addEventListener("click", function () {
          const target =
            self.mediaContext.videoMode === "embed"
              ? self.iframeProperties
              : self.videoProperties;

          self.setVideoToggle("loop", !target.loop);
        });
      }

      if (this.elements.videoMutedToggle) {
        this.elements.videoMutedToggle.addEventListener("click", function () {
          const target =
            self.mediaContext.videoMode === "embed"
              ? self.iframeProperties
              : self.videoProperties;

          self.setVideoToggle("muted", !target.muted);
        });
      }

      if (this.elements.videoPosterInput) {
        this.elements.videoPosterInput.addEventListener("input", function () {
          self.videoProperties.poster = this.value || "";
        });
      }

      // GIF events
      if (this.elements.gifModeButtons) {
        this.elements.gifModeButtons.forEach((btn) => {
          btn.addEventListener("click", () => {
            this.setGifMode(btn.dataset.gifMode);
          });
        });
      }

      if (this.elements.urlInput) {
        this.elements.urlInput.addEventListener("input", () => {
          this.handleUrlInputChange();
        });
      }
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && self.isOpen()) {
          self.close();
        }
      });
    },

    open: function (tab, node) {
      this.init();

      if (!this.elements.popup) return;

      this.selectedNode = this.resolveActualMediaNode(
        node || (Vvveb.Builder ? Vvveb.Builder.selectedNode : null) || null,
      );

      let originalType = this.getNodeMediaType(this.selectedNode);

      this.mediaContext = {
        originalType: originalType,
        activeTabType: tab || "image",
        pendingType: null,
        pendingSrc: "",
        pendingEmbedType: null,
        videoMode: "native",
        embedProvider: null,
        conversionRequired: false,
        canApply: false,
      };

      this.setSourceMode("url");

      // important: preload current node state before tab logic
      if (originalType === "image" || originalType === "gif") {
        this.readCurrentNodeState();

        if (originalType === "image") {
          this.readImagePropertiesFromNode();
        }
      }
  let initialTab = tab || originalType || "image";

// If a stale video overlay is clicked but the real node is GIF/image,
// trust the real node type instead of the passed overlay tab.
if (tab === "video" && originalType !== "video") {
  initialTab = originalType;
}

this.mediaContext.activeTabType = initialTab;
this.setTab(initialTab);

      this.elements.popup.classList.add("show");
    },

    close: function () {
      if (!this.elements.popup) return;

      this.mediaContext.pendingType = null;
      this.mediaContext.pendingSrc = "";
      this.mediaContext.conversionRequired = false;
      this.mediaContext.canApply = true;
      this.mediaContext.pendingEmbedType = null;
      this.mediaContext.videoMode = "native";
      this.mediaContext.embedProvider = null;

      this.hideNotice();
      this.hideUrlError();
      this.elements.popup.classList.remove("is-focused-conversion");
      this.elements.popup.classList.remove("show");
    },

    isOpen: function () {
      return (
        this.elements.popup && this.elements.popup.classList.contains("show")
      );
    },

    setTab(tab) {
      this.activeTab = tab;
      this.mediaContext.activeTabType = tab;

         this.setSourceMode("url");

      if (this.elements.tabs) {
        this.elements.tabs.forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.mediaTab === tab);
        });
      }

      if (this.elements.panels) {
        this.elements.panels.forEach((panel) => {
          const isMatch = panel.dataset.mediaPanel === this.activeTab;
          panel.classList.toggle("is-active", isMatch);
          panel.style.display = isMatch ? "block" : "none";
        });
      }

      if (tab === "video") {
        this.updateVideoMode();

        if (
          this.mediaContext.originalType === "video" &&
          this.selectedNode &&
          this.selectedNode.tagName
        ) {
          const tag = this.selectedNode.tagName.toLowerCase();

          if (tag === "video") {
            this.readVideoPropertiesFromNode(this.selectedNode);
          } else if (tag === "iframe") {
            this.readIframePropertiesFromNode(this.selectedNode);
          } else {
            this.resetVideoProperties();
          }
        } else {
          this.resetVideoProperties();
        }
      }

      if (tab === "gif") {
        this.readGifPropertiesFromNode(this.selectedNode);
      }

      this.hideUrlError();
      this.refreshUiState();
    },

    setSourceMode: function (mode) {
      this.sourceMode = mode;

      this.hideUrlError();

      if (this.elements.sourceButtons) {
        this.elements.sourceButtons.forEach(function (btn) {
          btn.classList.toggle("is-active", btn.dataset.sourceMode === mode);
        });
      }

      if (this.elements.sourcePanels) {
        this.elements.sourcePanels.forEach(function (panel) {
          let isMatch = panel.dataset.sourcePanel === mode;
          panel.classList.toggle("is-active", isMatch);
          panel.style.display = isMatch ? "block" : "none";
        });
      }
    },

    ensureMediaModal: function () {
      if (!window.Vvveb) return false;

      if (!window.Vvveb.MediaModal) {
        if (typeof MediaModal === "undefined") {
          console.error("MediaModal class is not available");
          return false;
        }

        Vvveb.MediaModal = new MediaModal(true);
        Vvveb.MediaModal.mediaPath = window.mediaPath;
      }

      return true;
    },

  openMediaGallery: function () {
  let self = this;

  if (!this.ensureMediaModal()) return;

  try {
    const mediaModal = document.getElementById("MediaModal");

    // Clear old Bootstrap tooltips before opening gallery
    document.querySelectorAll(".tooltip.show").forEach((tooltip) => {
      tooltip.remove();
    });

    if (mediaModal) {
      // Force gallery to a clean upload state before Bootstrap shows it
      mediaModal.querySelectorAll(".media-modal-nav-item").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === "uploads");
      });

      mediaModal.querySelectorAll(".display-panel").forEach((panel) => {
        const isUploads = panel.dataset.tab === "uploads";
        panel.style.display = isUploads ? "" : "none";
      });
    }

    Vvveb.MediaModal.open(
      {
        targetInput: null,
        targetThumb: null,
        insertType: this.activeTab, // image | video | gif
        sourceMode: "url",
        initialTab: "uploads",
      },
        function (imageData) {
  const payload =
    typeof imageData === "string" ? { src: imageData } : imageData || {};

  const src = payload.src || payload.url || "";
  if (!src) return;

  self.handleGallerySelection(payload);

  requestAnimationFrame(function () {
    if (!self.selectedNode) return;
    self.applySelectedMedia();
  });
},
    );

    // Safety sync after open, but without visible delay issue
    requestAnimationFrame(function () {
      const mediaModal = document.getElementById("MediaModal");
      if (!mediaModal) return;

      const uploadsNav = mediaModal.querySelector(
        '.media-modal-nav-item[data-tab="uploads"]',
      );

      if (uploadsNav && !uploadsNav.classList.contains("active")) {
        uploadsNav.click();
      }

      document.querySelectorAll(".tooltip.show").forEach((tooltip) => {
        tooltip.remove();
      });
    });
  } catch (e) {
    console.error("Failed to open media gallery", e);
  }
},

    handleGallerySelection: function (mediaData) {
      let payload =
        typeof mediaData === "string" ? { src: mediaData } : mediaData || {};
      const src = payload.src || payload.url || "";
      if (!src) return;

      if (this.activeTab === "video") {
        this.mediaContext.pendingType = "video";
        this.mediaContext.pendingSrc = src;
        this.refreshUiState();
        return;
      }

      if (this.activeTab === "gif") {
        this.mediaContext.pendingType = "gif";
        this.mediaContext.pendingSrc = src;

        this.refreshUiState();
        return;
      }

      if (
        this.activeTab === "image" &&
        (this.mediaContext.originalType === "video" ||
          this.mediaContext.originalType === "gif")
      ) {
        this.mediaContext.pendingType = "image";
        this.mediaContext.pendingSrc = src;
        this.selectedMedia.src = src;
        this.refreshUiState();
        return;
      }

      this.selectedMedia = {
        src: src,
        alt: payload.alt || "",
        title: payload.title || "",
        description: payload.description || "",
      };

      if (payload.alt && !this.imageProperties.alt) {
        this.imageProperties.alt = payload.alt;
        if (this.elements.altInput) {
          this.elements.altInput.value = payload.alt;
        }
      }

      if (this.elements.urlInput) {
        this.elements.urlInput.value = src;
      }

      this.syncPreviewState();
    },

    readCurrentNodeState: function () {
      const node = this.selectedNode;
      if (!node) return;

      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "";
      const title = node.getAttribute("title") || "";

      this.selectedMedia = {
        src: src,
        alt: alt,
        title: title,
        description: "",
      };

      if (this.elements.urlInput) {
        this.elements.urlInput.value = src;
      }
    },
    syncPreviewState: function () {
      if (this.elements.urlInput && this.sourceMode === "url") {
        this.elements.urlInput.value = this.selectedMedia.src || "";
      }
    },

    applySelectedMedia: function () {
      const node = this.selectedNode;
      if (!node) return;

      if (this.elements.urlError && this.elements.urlError.textContent.trim()) {
        this.updateApplyState();
        return;
      }

      if (
        this.mediaContext.conversionRequired &&
        !this.mediaContext.pendingSrc
      ) {
        this.updateApplyState();
        return;
      }

      // image -> video conversion
      if (
        this.mediaContext.originalType === "image" &&
        this.activeTab === "video"
      ) {
        let newNode = null;

        if (this.mediaContext.pendingEmbedType === "youtube") {
          newNode = this.convertImageNodeToYouTubeIframe(node);
        } else {
          newNode = this.convertImageNodeToVideo(node);
        }

        if (newNode && window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(newNode);
        }

        this.close();
        return;
      }

      // video -> video editing or conversion to video with URL

      if (
        this.mediaContext.originalType === "video" &&
        this.activeTab === "video" &&
        this.selectedNode &&
        this.selectedNode.tagName &&
        this.selectedNode.tagName.toLowerCase() === "iframe"
      ) {
        if (this.mediaContext.pendingEmbedType === "youtube") {
          this.applyIframeVideoProperties(this.selectedNode);

          if (window.Vvveb && Vvveb.Builder) {
            Vvveb.Builder.selectNode(this.selectedNode);
          }

          this.close();
          return;
        }

        if (this.mediaContext.pendingSrc) {
          const newVideo = this.convertImageNodeToVideo(this.selectedNode);

          if (newVideo && window.Vvveb && Vvveb.Builder) {
            Vvveb.Builder.selectNode(newVideo);
          }

          this.close();
          return;
        }

        this.applyIframeVideoProperties(this.selectedNode);

        if (window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(this.selectedNode);
        }

        this.close();
        return;
      }

      if (
        this.mediaContext.originalType === "video" &&
        this.activeTab === "video"
      ) {
        if (this.mediaContext.pendingEmbedType === "youtube") {
          const newIframe = this.convertVideoNodeToYouTubeIframe(node);

          if (newIframe && window.Vvveb && Vvveb.Builder) {
            Vvveb.Builder.selectNode(newIframe);
          }

          this.close();
          return;
        }

        this.applyVideoPropertiesToNode(node);

        if (window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(node);
        }

        this.close();
        return;
      }

      // video -> image conversion
      if (
        this.mediaContext.originalType === "video" &&
        this.activeTab === "image"
      ) {
        let newImage = this.convertVideoNodeToImage(node);

        if (newImage && window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(newImage);
        }

        this.close();
        return;
      }

      // image -> gif conversion
      if (
        this.mediaContext.originalType === "image" &&
        this.activeTab === "gif"
      ) {
        const gifSrc =
          this.mediaContext.pendingSrc ||
          this.elements.urlInput?.value?.trim() ||
          "";

        const oldSrc = node.getAttribute("src") || "";
if (gifSrc) {
  node.setAttribute("src", gifSrc);
  node.setAttribute("data-zg-media-type", "gif");
}

        const newSrc = node.getAttribute("src") || "";
        this.addAttributeUndo(node, "src", oldSrc, newSrc);

        if (window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(node);
        }

        this.close();
        return;
      }

      // video -> gif conversion
    // video / iframe -> gif conversion
if (
    this.mediaContext.originalType === "video" &&
    this.activeTab === "gif"
) {
    const newGif = this.convertVideoNodeToGif(node);

    if (newGif && window.Vvveb && Vvveb.Builder) {
        Vvveb.Builder.selectNode(newGif);
    }

    this.close();
    return;
}
      // gif -> gif editing or conversion to gif with URL
      if (
        this.mediaContext.originalType === "gif" &&
        this.activeTab === "gif"
      ) {
        const gifSrc =
          this.sourceMode === "url" && this.elements.urlInput
            ? this.elements.urlInput.value.trim()
            : this.selectedMedia.src || node.getAttribute("src") || "";

        const oldSrc = node.getAttribute("src") || "";

        if (gifSrc) {
          node.setAttribute("src", gifSrc);
        }

        const newSrc = node.getAttribute("src") || "";
        this.addAttributeUndo(node, "src", oldSrc, newSrc);

        if (window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(node);
        }

        this.close();
        return;
      }

      // gif -> video conversion
      if (
        this.mediaContext.originalType === "gif" &&
        this.activeTab === "video"
      ) {
        let newNode = null;

        if (this.mediaContext.pendingEmbedType === "youtube") {
          newNode = this.convertImageNodeToYouTubeIframe(node);
        } else {
          newNode = this.convertImageNodeToVideo(node);
        }

        if (newNode && window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(newNode);
        }

        this.close();
        return;
      }

      // gif -> image conversion or editing (same as image flow since both use <img> tag)
      if (
        this.mediaContext.originalType === "gif" &&
        this.activeTab === "image"
      ) {
        const imageSrc =
          this.mediaContext.pendingSrc ||
          this.elements.urlInput?.value?.trim() ||
          "";

        const oldSrc = node.getAttribute("src") || "";

      if (imageSrc) {
  node.setAttribute("src", imageSrc);
  node.removeAttribute("data-zg-media-type");
}

        const newSrc = node.getAttribute("src") || "";
        this.addAttributeUndo(node, "src", oldSrc, newSrc);

        if (window.Vvveb && Vvveb.Builder) {
          Vvveb.Builder.selectNode(node);
        }

        this.close();
        return;
      }

      // existing image flow
      let nextSrc = "";

      if (this.sourceMode === "url" && this.elements.urlInput) {
        nextSrc = (this.elements.urlInput.value || "").trim();
      } else {
        nextSrc = (
          this.selectedMedia.src ||
          node.getAttribute("src") ||
          ""
        ).trim();
      }

      let oldSrc = node.getAttribute("src") || "";
      let oldAlt = node.getAttribute("alt") || "";
      let oldTitle = node.getAttribute("title") || "";

      if (nextSrc) {
        node.setAttribute("src", nextSrc);
      }

      if (this.selectedMedia.alt) {
        node.setAttribute("alt", this.selectedMedia.alt);
      }

      if (this.selectedMedia.title) {
        node.setAttribute("title", this.selectedMedia.title);
      }

      this.applyImageProperties();

      if (
        window.Vvveb &&
        Vvveb.Undo &&
        typeof Vvveb.Undo.addMutation === "function"
      ) {
        this.addAttributeUndo(
          node,
          "src",
          oldSrc,
          node.getAttribute("src") || "",
        );

        this.addAttributeUndo(
          node,
          "alt",
          oldAlt,
          node.getAttribute("alt") || "",
        );

        this.addAttributeUndo(
          node,
          "title",
          oldTitle,
          node.getAttribute("title") || "",
        );
      }

      if (window.Vvveb && Vvveb.Builder) {
        Vvveb.Builder.selectNode(node);
      }

      this.close();
    },

    applyImageProperties() {
      const node = this.selectedNode;
      if (!node) return;

      const oldAlt = node.getAttribute("alt") || "";
      const oldLoading = node.getAttribute("loading") || "";

      node.setAttribute("alt", (this.imageProperties.alt || "").trim());
      node.setAttribute("loading", this.imageProperties.loading || "lazy");

      const newAlt = node.getAttribute("alt") || "";
      const newLoading = node.getAttribute("loading") || "";

      this.addAttributeUndo(node, "alt", oldAlt, newAlt);
      this.addAttributeUndo(node, "loading", oldLoading, newLoading);
    },

    setLazyLoading: function (value) {
      this.imageProperties.loading = value || "lazy";

      if (this.elements.lazyToggle) {
        let isLazy = this.imageProperties.loading === "lazy";
        this.elements.lazyToggle.classList.toggle("is-active", isLazy);
        this.elements.lazyToggle.setAttribute(
          "aria-pressed",
          isLazy ? "true" : "false",
        );
      }
    },

    readImagePropertiesFromNode() {
      const node = this.selectedNode;
      if (!node) return;

      this.imageProperties.alt = node.getAttribute("alt") || "";
      this.imageProperties.loading = node.getAttribute("loading") || "lazy";

      if (this.elements.altInput) {
        this.elements.altInput.value = this.imageProperties.alt;
      }

      this.setLazyLoading(this.imageProperties.loading);
    },

  convertVideoNodeToGif: function (videoNode) {
    if (!videoNode) return null;

    const realNode = this.resolveActualMediaNode(videoNode);
    if (!realNode || !realNode.tagName) return null;

    const tag = realNode.tagName.toLowerCase();

    if (tag !== "video" && tag !== "iframe") {
        return null;
    }

    const gifSrc =
        this.mediaContext.pendingSrc ||
        this.elements.urlInput?.value?.trim() ||
        "";

    if (!gifSrc) return null;

    const parent = realNode.parentNode;
    const nextSibling = realNode.nextSibling;

    // Important: remove old iframe/video overlay before replacement
    this.removeMediaEditOverlaysForNode(realNode);

    const doc = realNode.ownerDocument;
    const img = doc.createElement("img");

    img.className = realNode.className || "";
    img.style.cssText = realNode.style.cssText || "";

    if (realNode.id) {
        img.id = realNode.id;
    }

    const vvvebId = realNode.getAttribute("data-vvveb-id");
    if (vvvebId) {
        img.setAttribute("data-vvveb-id", vvvebId);
    }

    img.setAttribute("src", gifSrc);
    img.setAttribute("alt", this.imageProperties.alt || "");
    img.setAttribute("loading", this.imageProperties.loading || "lazy");
    img.setAttribute("data-zg-media-type", "gif");

    img.style.display = "block";

    realNode.replaceWith(img);
    this.addReplaceNodeUndo(realNode, img, parent, nextSibling);

    // Important: remove any overlay that remained in the same wrapper
    this.removeMediaEditOverlaysForNode(img);

    this.selectedNode = img;

    return img;
},

getNodeMediaType: function (node) {
    if (!node || !node.tagName) return "image";

    const tag = node.tagName.toLowerCase();

    if (
        node.getAttribute("data-zg-media-type") === "gif" ||
        node.classList?.contains("zg-gif-player")
    ) {
        return "gif";
    }

    if (tag === "video") return "video";

    if (tag === "img") {
        const src = (node.getAttribute("src") || "").toLowerCase();

        if (
            src.endsWith(".gif") ||
            src.includes(".gif?") ||
            node.getAttribute("data-zg-media-type") === "gif"
        ) {
            return "gif";
        }

        return "image";
    }

    if (
        tag === "iframe" &&
        node.getAttribute("src") &&
        (
            node.getAttribute("src").includes("youtube.com") ||
            node.getAttribute("src").includes("youtu.be") ||
            node.getAttribute("src").includes("vimeo.com")
        )
    ) {
        return "video";
    }

    return "image";
},

    evaluateCompatibility: function () {
      let originalType = this.mediaContext.originalType;
      let activeTab = this.mediaContext.activeTabType;

      this.mediaContext.conversionRequired = false;
      this.mediaContext.canApply = true;

      this.hideNotice();

      if (originalType === "image" && activeTab === "image") {
        this.mediaContext.conversionRequired = false;
        this.mediaContext.canApply = true;
        return;
      }

      if (originalType === "image" && activeTab === "gif") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "gif";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert image to GIF",
            "To convert this image into a GIF, first choose a GIF from Upload or paste a GIF URL in From URL. Apply will enable after a valid GIF is selected.",
          );
        }

        return;
      }

      if (originalType === "image" && activeTab === "video") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "video";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert image to video",
            "To convert this image into a video, first choose a video from Upload or paste a video URL in From URL. Apply will enable after a valid video is selected.",
          );
        }

        return;
      }

      if (originalType === "video" && activeTab === "video") {
        this.mediaContext.conversionRequired = false;
        this.mediaContext.canApply = true;
        return;
      }

      if (originalType === "video" && activeTab === "image") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "image";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert video to image",
            "To convert this video into an image, first choose an image from Upload or paste an image URL in From URL. Apply will enable after a valid image is selected.",
          );
        }

        return;
      }

      if (originalType === "video" && activeTab === "gif") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "gif";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert video to GIF",
            "To convert this video into a GIF, first choose a GIF from Upload or paste a GIF URL in From URL. Apply will enable after a valid GIF is selected.",
          );
        }

        return;
      }

      if (originalType === "gif" && activeTab === "gif") {
        this.mediaContext.conversionRequired = false;
        this.mediaContext.canApply = true;
        return;
      }

      if (originalType === "gif" && activeTab === "image") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "image";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert GIF to image",
            "To convert this GIF into an image, first choose an image from Upload or paste an image URL in From URL. Apply will enable after a valid image is selected.",
          );
        }

        return;
      }

      if (originalType === "gif" && activeTab === "video") {
        this.mediaContext.conversionRequired = true;
        this.mediaContext.canApply =
          !!this.mediaContext.pendingSrc &&
          this.mediaContext.pendingType === "video";

        if (!this.mediaContext.pendingSrc) {
          this.showNotice(
            "Convert GIF to video",
            "To convert this GIF into a video, first choose a video from Upload or paste a video URL in From URL. Apply will enable after a valid video is selected.",
          );
        }

        return;
      }
      this.mediaContext.canApply = true;
    },

    showNotice: function (title, text) {
      if (!this.elements.notice) return;

      if (this.elements.noticeTitle) {
        this.elements.noticeTitle.textContent = title || "Notice";
      }

      if (this.elements.noticeText) {
        this.elements.noticeText.textContent = text || "";
      }

      this.elements.notice.style.display = "block";
    },

    hideNotice: function () {
      if (this.elements.notice) {
        this.elements.notice.style.display = "none";
      }
    },

    updateApplyState: function () {
      if (!this.elements.applyBtn) return;

      let canApply = !!this.mediaContext.canApply;

      this.elements.applyBtn.disabled = !canApply;
      this.elements.applyBtn.classList.toggle("is-disabled", !canApply);

      if (!canApply) {
        this.elements.applyBtn.setAttribute("aria-disabled", "true");
      } else {
        this.elements.applyBtn.removeAttribute("aria-disabled");
      }
    },

    setVideoToggle: function (key, value) {
      const target =
        this.mediaContext.videoMode === "embed"
          ? this.iframeProperties
          : this.videoProperties;

      target[key] = !!value;

      const map = {
        autoplay: this.elements.videoAutoplayToggle,
        controls: this.elements.videoControlsToggle,
        loop: this.elements.videoLoopToggle,
        muted: this.elements.videoMutedToggle,
      };

      const el = map[key];
      if (!el) return;

      el.classList.toggle("is-active", !!value);
      el.setAttribute("aria-pressed", value ? "true" : "false");
    },

    resetVideoProperties: function () {
      this.videoProperties = {
        autoplay: false,
        controls: true,
        loop: false,
        muted: false,
        poster: "",
      };

      this.iframeProperties = {
        autoplay: false,
        controls: true,
        loop: false,
        muted: false,
      };

      this.setVideoToggle("autoplay", false);
      this.setVideoToggle("controls", true);
      this.setVideoToggle("loop", false);
      this.setVideoToggle("muted", false);

      if (this.elements.videoPosterInput) {
        this.elements.videoPosterInput.value = "";
      }
    },

    readVideoPropertiesFromNode: function (node) {
      if (!node || !node.tagName || node.tagName.toLowerCase() !== "video")
        return;

      const src = node.getAttribute("src") || "";

      this.selectedMedia = {
        src: src,
        alt: "",
        title: "",
        description: "",
      };

      this.videoProperties.autoplay = node.hasAttribute("autoplay");
      this.videoProperties.controls = node.hasAttribute("controls");
      this.videoProperties.loop = node.hasAttribute("loop");
      this.videoProperties.muted = node.hasAttribute("muted");
      this.videoProperties.poster = node.getAttribute("poster") || "";

      this.setVideoToggle("autoplay", this.videoProperties.autoplay);
      this.setVideoToggle("controls", this.videoProperties.controls);
      this.setVideoToggle("loop", this.videoProperties.loop);
      this.setVideoToggle("muted", this.videoProperties.muted);

      if (this.elements.videoPosterInput) {
        this.elements.videoPosterInput.value = this.videoProperties.poster;
      }

      if (this.elements.urlInput) {
        this.elements.urlInput.value = src;
      }
    },

    readIframePropertiesFromNode: function (node) {
      if (!node || !node.tagName || node.tagName.toLowerCase() !== "iframe") {
        return;
      }

      const src = node.getAttribute("src") || "";

      this.selectedMedia = {
        src: src,
        alt: "",
        title: "",
        description: "",
      };

      this.iframeProperties = {
        autoplay: false,
        controls: true,
        loop: false,
        muted: false,
      };

      if (!src) {
        this.setVideoToggle("autoplay", false);
        this.setVideoToggle("controls", true);
        this.setVideoToggle("loop", false);
        this.setVideoToggle("muted", false);
        return;
      }

      let url;
      try {
        url = new URL(src);
      } catch (e) {
        this.setVideoToggle("autoplay", false);
        this.setVideoToggle("controls", true);
        this.setVideoToggle("loop", false);
        this.setVideoToggle("muted", false);
        return;
      }

      if (
        url.hostname.includes("youtube.com") ||
        url.hostname.includes("youtu.be")
      ) {
        const autoplay = url.searchParams.get("autoplay");
        const controls = url.searchParams.get("controls");
        const loop = url.searchParams.get("loop");
        const mute = url.searchParams.get("mute");

        this.iframeProperties.autoplay = autoplay === "1";
        this.iframeProperties.controls = controls !== "0";
        this.iframeProperties.loop = loop === "1";
        this.iframeProperties.muted = mute === "1";
      }

      this.setVideoToggle("autoplay", this.iframeProperties.autoplay);
      this.setVideoToggle("controls", this.iframeProperties.controls);
      this.setVideoToggle("loop", this.iframeProperties.loop);
      this.setVideoToggle("muted", this.iframeProperties.muted);

      if (this.elements.urlInput && this.sourceMode === "url") {
        this.elements.urlInput.value = src;
      }
    },

    applyVideoPropertiesToNode: function (node, skipUndo = false) {
      if (!node || !node.tagName || node.tagName.toLowerCase() !== "video")
        return;

      let oldSrc = node.getAttribute("src") || "";
      let oldPoster = node.getAttribute("poster") || "";
      let oldAutoplay = node.hasAttribute("autoplay");
      let oldControls = node.hasAttribute("controls");
      let oldLoop = node.hasAttribute("loop");
      let oldMuted = node.hasAttribute("muted");

      let nextSrc = "";

      if (this.sourceMode === "url" && this.elements.urlInput) {
        nextSrc = (this.elements.urlInput.value || "").trim();
      } else if (this.mediaContext.pendingSrc) {
        nextSrc = this.mediaContext.pendingSrc.trim();
      } else {
        nextSrc = node.getAttribute("src") || "";
      }

      if (nextSrc) {
        node.setAttribute("src", nextSrc);
      }

      if (this.videoProperties.poster && this.videoProperties.poster.trim()) {
        node.setAttribute("poster", this.videoProperties.poster.trim());
      } else {
        node.removeAttribute("poster");
      }

      if (this.videoProperties.autoplay) node.setAttribute("autoplay", "");
      else node.removeAttribute("autoplay");

      if (this.videoProperties.controls) node.setAttribute("controls", "");
      else node.removeAttribute("controls");

      if (this.videoProperties.loop) node.setAttribute("loop", "");
      else node.removeAttribute("loop");

      if (this.videoProperties.muted) node.setAttribute("muted", "");
      else node.removeAttribute("muted");

      try {
        node.load();
      } catch (e) {}

      if (
        !skipUndo &&
        window.Vvveb &&
        Vvveb.Undo &&
        typeof Vvveb.Undo.addMutation === "function"
      ) {
        this.addAttributeUndo(
          node,
          "src",
          oldSrc,
          node.getAttribute("src") || "",
        );

        this.addAttributeUndo(
          node,
          "poster",
          oldPoster,
          node.getAttribute("poster") || "",
        );

        this.addAttributeUndo(
          node,
          "autoplay",
          oldAutoplay ? "" : null,
          node.hasAttribute("autoplay") ? "" : null,
        );

        this.addAttributeUndo(
          node,
          "controls",
          oldControls ? "" : null,
          node.hasAttribute("controls") ? "" : null,
        );

        this.addAttributeUndo(
          node,
          "loop",
          oldLoop ? "" : null,
          node.hasAttribute("loop") ? "" : null,
        );

        this.addAttributeUndo(
          node,
          "muted",
          oldMuted ? "" : null,
          node.hasAttribute("muted") ? "" : null,
        );
      }
    },

    convertImageNodeToVideo: function (imgNode) {
      if (!imgNode || !imgNode.tagName) return null;

      const sourceTag = imgNode.tagName.toLowerCase();
      if (sourceTag !== "img" && sourceTag !== "iframe") {
        return null;
      }

      if (!this.mediaContext.pendingSrc) return null;

      const parent = imgNode.parentNode;
      const nextSibling = imgNode.nextSibling;

      let doc = imgNode.ownerDocument;
      let video = doc.createElement("video");

      video.className = imgNode.className || "";
      video.style.cssText = imgNode.style.cssText || "";

      if (imgNode.id) {
        video.id = imgNode.id;
      }

      let vvvebId = imgNode.getAttribute("data-vvveb-id");
      if (vvvebId) {
        video.setAttribute("data-vvveb-id", vvvebId);
      }

      video.setAttribute("src", this.mediaContext.pendingSrc);

      this.applyVideoPropertiesToNode(video, true);

      imgNode.replaceWith(video);
      this.addReplaceNodeUndo(imgNode, video, parent, nextSibling);

      return video;
    },

    getPendingTypeForActiveTab() {
      if (this.activeTab === "video") return "video";
      if (this.activeTab === "gif") return "gif";
      return "image";
    },

    handleUrlInputChange() {
      if (!this.elements.urlInput) return;

      const value = (this.elements.urlInput.value || "").trim();
      const originalType = this.mediaContext.originalType;
      const activeTab = this.activeTab;
      const targetType = this.getPendingTypeForActiveTab();

      this.mediaContext.pendingSrc = "";
      this.mediaContext.pendingType = null;

      if (!value) {
        this.hideUrlError();

        if (originalType === "image" && activeTab === "image") {
          this.selectedMedia.src = "";
        }

        this.evaluateCompatibility();
        this.updateApplyState();
        this.updatePanelVisibility?.();
        return;
      }

      const validation = this.validateMediaUrlByTab(value, activeTab);

      if (!validation.valid) {
        this.showUrlError(validation.message);

        this.mediaContext.pendingSrc = "";
        this.mediaContext.pendingType = null;
        this.mediaContext.pendingEmbedType = null;
        this.mediaContext.canApply = false;

        if (originalType === "image" && activeTab === "image") {
          this.selectedMedia.src = "";
        }

        this.updateApplyState();
        this.updatePanelVisibility?.();
        return;
      }

      this.hideUrlError();

      // image -> image
      if (originalType === "image" && activeTab === "image") {
        this.selectedMedia.src = value;
        this.evaluateCompatibility();
        this.updateApplyState();
        this.updatePanelVisibility?.();
        return;
      }

      // video tab supports direct video urls + youtube
      if (activeTab === "video") {
        if (this.isYouTubeInput(value)) {
          const embedSrc = this.extractYouTubeEmbedSrc(value);

          if (!embedSrc) {
            this.showUrlError("Please enter a valid YouTube URL or iframe.");
            this.evaluateCompatibility();
            this.updateApplyState();
            this.updatePanelVisibility?.();
            return;
          }

          this.mediaContext.pendingType = "video";
          this.mediaContext.pendingSrc = embedSrc;
          this.mediaContext.pendingEmbedType = "youtube";

          this.evaluateCompatibility();
          this.updateApplyState();
          this.updatePanelVisibility?.();
          return;
        }

        this.mediaContext.pendingType = "video";
        this.mediaContext.pendingSrc = value;
        this.mediaContext.pendingEmbedType = null;

        this.evaluateCompatibility();
        this.updateApplyState();
        this.updatePanelVisibility?.();
        return;
      }

      this.mediaContext.pendingType = targetType;
      this.mediaContext.pendingSrc = value;
      this.mediaContext.pendingEmbedType = null;

      this.evaluateCompatibility();
      this.updateApplyState();
      this.updatePanelVisibility?.();
    },

    refreshUrlField() {
      if (!this.elements.urlInput) return;

      const originalType = this.mediaContext.originalType;
      const activeTab = this.activeTab;

      // conversion flow: image -> video
      if (originalType === "image" && activeTab === "video") {
        this.elements.urlInput.value =
          this.mediaContext.pendingType === "video"
            ? this.mediaContext.pendingSrc || ""
            : "";
        return;
      }

      // conversion flow: video -> image
      if (originalType === "video" && activeTab === "image") {
        this.elements.urlInput.value =
          this.mediaContext.pendingType === "image"
            ? this.mediaContext.pendingSrc || ""
            : "";
        return;
      }

      // conversion flow: video -> gif
      if (originalType === "video" && activeTab === "gif") {
        this.elements.urlInput.value =
          this.mediaContext.pendingType === "gif"
            ? this.mediaContext.pendingSrc || ""
            : "";
        return;
      }

      // same-type image editing
      if (originalType === "image" && activeTab === "image") {
        this.elements.urlInput.value = this.selectedMedia.src || "";
        return;
      }

      // same-type video editing
      if (originalType === "video" && activeTab === "video") {
        this.elements.urlInput.value =
          this.mediaContext.pendingSrc ||
          this.selectedNode?.getAttribute("src") ||
          "";
        return;
      }

      // same-type gif editing
      if (originalType === "gif" && activeTab === "gif") {
        this.elements.urlInput.value =
          this.selectedMedia.src ||
          this.selectedNode?.getAttribute("src") ||
          "";
        return;
      }

      // default safe blank state
      this.elements.urlInput.value = "";
    },

  convertVideoNodeToImage: function (videoNode) {
  if (!videoNode || !videoNode.tagName) {
    return null;
  }

  const realNode = this.resolveActualMediaNode(videoNode);
  if (!realNode || !realNode.tagName) {
    return null;
  }

  const sourceTag = realNode.tagName.toLowerCase();
  if (sourceTag !== "video" && sourceTag !== "iframe") {
    return null;
  }

  if (!this.mediaContext.pendingSrc) return null;

  const parent = realNode.parentNode;
  const nextSibling = realNode.nextSibling;

  this.removeMediaEditOverlaysForNode(realNode);

  let doc = realNode.ownerDocument;
  let img = doc.createElement("img");

  img.className = realNode.className || "";
  img.style.cssText = realNode.style.cssText || "";

  if (realNode.id) {
    img.id = realNode.id;
  }

  let vvvebId = realNode.getAttribute("data-vvveb-id");
  if (vvvebId) {
    img.setAttribute("data-vvveb-id", vvvebId);
  }

  img.setAttribute("src", this.mediaContext.pendingSrc);
  img.setAttribute("alt", this.imageProperties.alt ? this.imageProperties.alt.trim() : "");
  img.setAttribute("loading", this.imageProperties.loading || "lazy");
  img.removeAttribute("data-zg-media-type");
  img.style.display = "block";

  realNode.replaceWith(img);
  this.addReplaceNodeUndo(realNode, img, parent, nextSibling);

  this.removeMediaEditOverlaysForNode(img);

  this.selectedNode = img;

  return img;
},

    // call this method to re-evaluate compatibility and update UI states after any change in media context (like pending source/type updates)
    refreshUiState() {
      this.updateVideoMode();
      this.updateVideoUiMode();
      this.evaluateCompatibility();
      this.refreshUrlField();
      this.updateApplyState();
      this.updatePanelVisibility();
    },

    updatePanelVisibility() {
      if (!this.elements.panels) return;

      const originalType = this.mediaContext.originalType;
      const activeTab = this.activeTab;

      const waitingForConversionSource =
        this.mediaContext.conversionRequired && !this.mediaContext.pendingSrc;

      this.elements.panels.forEach((panel) => {
        const panelType = panel.dataset.mediaPanel;
        const isActive = panelType === activeTab;

        // always hide inactive panels
        if (!isActive) {
          panel.classList.remove("is-active");
          panel.style.display = "none";
          return;
        }

        // if user is in a conversion flow and has not selected media yet,
        // hide even the active settings panel
        if (waitingForConversionSource) {
          panel.classList.remove("is-active");
          panel.style.display = "none";
          return;
        }

        // otherwise show active panel
        panel.classList.add("is-active");
        panel.style.display = "block";
      });
    },

    /* -------------------------------------------------------------------------- */
    /*                  // validation helpers for URL input mode                  */
    /* -------------------------------------------------------------------------- */
    showUrlError(message) {
      if (!this.elements.urlError) return;
      this.elements.urlError.textContent = message || "";
      this.elements.urlError.style.display = message ? "block" : "none";
    },

    hideUrlError() {
      if (!this.elements.urlError) return;
      this.elements.urlError.textContent = "";
      this.elements.urlError.style.display = "none";
    },

    isValidUrl(value) {
      try {
        const url = new URL(value);
        return !!url.href;
      } catch (e) {
        return false;
      }
    },

    getUrlMeta(value) {
      try {
        const url = new URL(value);
        const pathname = url.pathname.toLowerCase();
        const extMatch = pathname.match(/\.([a-z0-9]+)$/i);
        const ext = extMatch ? extMatch[1] : "";

        const fm = (
          url.searchParams.get("fm") ||
          url.searchParams.get("format") ||
          ""
        ).toLowerCase();
        const host = url.hostname.toLowerCase();

        return {
          url,
          host,
          ext,
          fm,
          pathname,
        };
      } catch (e) {
        return null;
      }
    },

    isImageUrl(value) {
      const meta = this.getUrlMeta(value);
      if (!meta) return false;

      const imageTypes = ["jpg", "jpeg", "png", "webp", "svg"];
      if (imageTypes.includes(meta.ext)) return true;
      if (imageTypes.includes(meta.fm)) return true;

      if (meta.host.includes("images.unsplash.com")) return true;

      return false;
    },

    isGifUrl(value) {
      const meta = this.getUrlMeta(value);
      if (!meta) return false;

      return meta.ext === "gif" || meta.fm === "gif";
    },

    isDirectVideoUrl(value) {
      const meta = this.getUrlMeta(value);
      if (!meta) return false;

      const videoTypes = ["mp4", "webm", "ogg"];
      return videoTypes.includes(meta.ext) || videoTypes.includes(meta.fm);
    },

    validateMediaUrlByTab(value, activeTab) {
      if (!value) {
        return { valid: false, message: "Please enter a media URL." };
      }

      if (!this.isValidUrl(value)) {
        return { valid: false, message: "Please enter a valid URL." };
      }

      if (activeTab === "image") {
        if (!this.isImageUrl(value)) {
          return {
            valid: false,
            message: "Please enter a valid image URL.",
          };
        }
      }

      if (activeTab === "video") {
        if (!this.isDirectVideoUrl(value) && !this.isYouTubeInput(value)) {
          return {
            valid: false,
            message: "Please enter a valid video URL or YouTube URL / iframe.",
          };
        }
      }

      if (activeTab === "gif") {
        if (!this.isGifUrl(value)) {
          return {
            valid: false,
            message: "Please enter a valid GIF URL.",
          };
        }
      }

      return { valid: true, message: "" };
    },

    /* ----------------------------- Youtube Iframe helpers ----------------------------- */

    isYouTubeInput(value) {
      if (!value) return false;

      const lower = value.toLowerCase();

      return (
        lower.includes("youtube.com/watch") ||
        lower.includes("youtu.be/") ||
        lower.includes("youtube.com/embed/") ||
        lower.includes("<iframe")
      );
    },

    extractYouTubeEmbedSrc(value) {
      if (!value) return "";

      const trimmed = value.trim();

      // iframe pasted
      if (trimmed.toLowerCase().includes("<iframe")) {
        const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
        return srcMatch ? srcMatch[1] : "";
      }

      try {
        const url = new URL(trimmed);
        const host = url.hostname.toLowerCase();

        if (host.includes("youtu.be")) {
          const id = url.pathname.replace("/", "").trim();
          return id ? `https://www.youtube.com/embed/${id}` : "";
        }

        if (host.includes("youtube.com")) {
          if (url.pathname.startsWith("/embed/")) {
            return url.toString();
          }

          const videoId = url.searchParams.get("v");
          if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
          }
        }
      } catch (e) {
        return "";
      }

      return "";
    },

    convertImageNodeToYouTubeIframe(imgNode) {
      if (!imgNode || !this.mediaContext.pendingSrc) return null;

      const parent = imgNode.parentNode;
      const nextSibling = imgNode.nextSibling;

      const doc = imgNode.ownerDocument;
      const iframe = doc.createElement("iframe");

      iframe.className = imgNode.className || "";
      iframe.style.cssText = imgNode.style.cssText || "";

      if (imgNode.id) {
        iframe.id = imgNode.id;
      }

      const vvvebId = imgNode.getAttribute("data-vvveb-id");
      if (vvvebId) {
        iframe.setAttribute("data-vvveb-id", vvvebId);
      }

      iframe.setAttribute("src", this.mediaContext.pendingSrc);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      );
      iframe.setAttribute("allowfullscreen", "");

      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "315");
      iframe.style.display = "block";
      iframe.style.width = iframe.style.width || "100%";
      iframe.style.minHeight = iframe.style.minHeight || "315px";
      iframe.style.border = "0";

      iframe.setAttribute("data-media-embed", "video");
      iframe.setAttribute("data-embed-provider", "youtube");

      imgNode.replaceWith(iframe);
      this.addReplaceNodeUndo(imgNode, iframe, parent, nextSibling);

      return iframe;
    },

    convertVideoNodeToYouTubeIframe(videoNode) {
      if (!videoNode || !this.mediaContext.pendingSrc) return null;

      const parent = videoNode.parentNode;
      const nextSibling = videoNode.nextSibling;

      const doc = videoNode.ownerDocument;
      const iframe = doc.createElement("iframe");

      iframe.className = videoNode.className || "";
      iframe.style.cssText = videoNode.style.cssText || "";

      if (videoNode.id) {
        iframe.id = videoNode.id;
      }

      const vvvebId = videoNode.getAttribute("data-vvveb-id");
      if (vvvebId) {
        iframe.setAttribute("data-vvveb-id", vvvebId);
      }

      iframe.setAttribute("src", this.mediaContext.pendingSrc);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      );
      iframe.setAttribute("allowfullscreen", "");

      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "315");
      iframe.style.display = "block";
      iframe.style.width = iframe.style.width || "100%";
      iframe.style.minHeight = iframe.style.minHeight || "315px";
      iframe.style.border = "0";

      iframe.setAttribute("data-media-embed", "video");
      iframe.setAttribute("data-embed-provider", "youtube");

      videoNode.replaceWith(iframe);
      this.addReplaceNodeUndo(videoNode, iframe, parent, nextSibling);

      return iframe;
    },

    updateVideoMode() {
      const node = this.selectedNode;
      const pendingEmbedType = this.mediaContext.pendingEmbedType;

      if (this.activeTab !== "video") {
        this.mediaContext.videoMode = "native";
        return;
      }

      if (pendingEmbedType === "youtube" || pendingEmbedType === "vimeo") {
        this.mediaContext.videoMode = "embed";
        return;
      }

      if (node && node.tagName && node.tagName.toLowerCase() === "iframe") {
        this.mediaContext.videoMode = "embed";
        return;
      }

      this.mediaContext.videoMode = "native";
    },

    updateVideoUiMode() {
      const posterField = this.elements.videoPosterInput?.closest(
        ".zg-custom-media-field-card",
      );
      if (!posterField) return;

      posterField.style.display =
        this.mediaContext.videoMode === "embed" ? "none" : "block";
    },

    applyIframeVideoProperties(node) {
      if (!node || node.tagName.toLowerCase() !== "iframe") return;

      let src = this.mediaContext.pendingSrc || node.getAttribute("src") || "";
      if (!src) return;

      const oldSrc = node.getAttribute("src") || "";

      let url;
      try {
        url = new URL(src);
      } catch (e) {
        return;
      }

      if (url.hostname.includes("youtube.com")) {
        url.searchParams.set(
          "autoplay",
          this.iframeProperties.autoplay ? "1" : "0",
        );
        url.searchParams.set(
          "controls",
          this.iframeProperties.controls ? "1" : "0",
        );
        url.searchParams.set("mute", this.iframeProperties.muted ? "1" : "0");

        if (this.iframeProperties.loop) {
          url.searchParams.set("loop", "1");
          const match = url.pathname.match(/\/embed\/([^/?]+)/);
          const videoId = match ? match[1] : "";
          if (videoId) {
            url.searchParams.set("playlist", videoId);
          }
        } else {
          url.searchParams.set("loop", "0");
          url.searchParams.delete("playlist");
        }

        node.setAttribute("src", url.toString());

        const newSrc = node.getAttribute("src") || "";
        this.addAttributeUndo(node, "src", oldSrc, newSrc);
      }
    },

    setGifMode: function (mode) {
      this.gifProperties.mode = mode || "autoplay";

      if (this.elements.gifModeButtons) {
        this.elements.gifModeButtons.forEach((btn) => {
          const isActive = btn.dataset.gifMode === this.gifProperties.mode;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
      }

      this.updateApplyState();
    },

    readGifPropertiesFromNode: function (node) {
      if (!node) return;

      const wrapper = node.classList?.contains("zg-gif-player")
        ? node
        : node.closest?.(".zg-gif-player");

      if (!wrapper) {
        this.gifProperties.mode = "autoplay";
        this.setGifMode("autoplay");
        return;
      }

      this.gifProperties.mode =
        wrapper.getAttribute("data-gif-mode") || "autoplay";

      this.setGifMode(this.gifProperties.mode);
    },

    buildGifPlayer: function (node, gifSrc) {
      if (!node || !gifSrc) return null;

      const doc = node.ownerDocument;
      const wrapper = doc.createElement("div");
      const video = doc.createElement("video");
      const trigger = doc.createElement("button");
      const poster = doc.createElement("div");

      wrapper.className = `zg-gif-player ${node.className || ""}`.trim();
      wrapper.setAttribute("data-gif-src", gifSrc);
      wrapper.setAttribute(
        "data-gif-mode",
        this.gifProperties.mode || "autoplay",
      );
      wrapper.setAttribute("data-gif-state", "paused");
      wrapper.setAttribute("data-gif-alt", node.getAttribute("alt") || "");
      wrapper.setAttribute("data-gif-title", node.getAttribute("title") || "");

      if (node.id) wrapper.id = node.id;

      const vvvebId = node.getAttribute("data-vvveb-id");
      if (vvvebId) wrapper.setAttribute("data-vvveb-id", vvvebId);

      wrapper.style.cssText = node.style.cssText || "";
      wrapper.style.position = wrapper.style.position || "relative";
      wrapper.style.display = wrapper.style.display || "block";
      wrapper.style.overflow = wrapper.style.overflow || "hidden";
      wrapper.style.borderRadius =
        wrapper.style.borderRadius || node.style.borderRadius || "";
      wrapper.style.width = wrapper.style.width || node.style.width || "";
      wrapper.style.height = wrapper.style.height || node.style.height || "";

      video.className = "zg-gif-video";
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("preload", "metadata");
      video.loop = true;
      video.controls = false;
      video.autoplay = this.gifProperties.mode === "autoplay";
      video.defaultMuted = true;
      video.muted = true;
      video.src = gifSrc;

      video.style.width = "100%";
      video.style.height = "100%";
      video.style.display = "block";
      video.style.objectFit = "cover";
      video.style.borderRadius = "inherit";
      video.style.pointerEvents = "none";

      poster.className = "zg-gif-poster";
      poster.textContent = "";
      poster.style.position = "absolute";
      poster.style.inset = "0";
      poster.style.zIndex = "1";
      poster.style.borderRadius = "inherit";
      poster.style.background = "transparent";
      poster.style.pointerEvents = "none";
      poster.style.display =
        this.gifProperties.mode === "autoplay" ? "none" : "block";

      trigger.type = "button";
      trigger.className = "zg-gif-trigger";
      trigger.textContent = "GIF";
      trigger.style.position = "absolute";
      trigger.style.left = "50%";
      trigger.style.top = "50%";
      trigger.style.transform = "translate(-50%, -50%)";
      trigger.style.zIndex = "2";
      trigger.style.display =
        this.gifProperties.mode === "autoplay" ? "none" : "inline-flex";
      trigger.style.alignItems = "center";
      trigger.style.justifyContent = "center";
      trigger.style.pointerEvents = "none";

      wrapper.appendChild(video);
      wrapper.appendChild(poster);
      wrapper.appendChild(trigger);

      node.replaceWith(wrapper);

      return wrapper;
    },

    addAttributeUndo: function (node, attributeName, oldValue, newValue) {
      if (
        !window.Vvveb ||
        !Vvveb.Undo ||
        typeof Vvveb.Undo.addMutation !== "function" ||
        !node ||
        oldValue === newValue
      ) {
        return;
      }

      Vvveb.Undo.addMutation({
        type: "attributes",
        target: node,
        attributeName: attributeName,
        oldValue: oldValue,
        newValue: newValue,
      });
    },

    addReplaceNodeUndo: function (oldNode, newNode, parent, nextSibling) {
      if (
        !window.Vvveb ||
        !Vvveb.Undo ||
        typeof Vvveb.Undo.addMutation !== "function" ||
        !oldNode ||
        !newNode ||
        !parent
      ) {
        return;
      }

      Vvveb.Undo.addMutation({
        type: "childList",
        target: parent,
        addedNodes: [newNode],
        removedNodes: [oldNode],
        nextSibling: nextSibling || null,
      });
    },

    resolveActualMediaNode: function (node) {
      if (!node) return null;

      // direct gif wrapper
      if (node.classList?.contains("zg-gif-player")) {
        return node;
      }

      // inside gif wrapper
      const gifWrapper = node.closest?.(".zg-gif-player");
      if (gifWrapper) {
        return gifWrapper;
      }

      // already valid media node
      if (node.tagName) {
        const tag = node.tagName.toLowerCase();
        if (tag === "img" || tag === "video" || tag === "iframe") {
          return node;
        }
      }

      // if some overlay/helper element was clicked, try nearest real media
      const parent = node.parentElement;
      const fallback =
        parent?.querySelector?.(".zg-gif-player, img, video, iframe") ||
        node
          .closest?.("figure, .image, .video, .media-wrapper, .img-container")
          ?.querySelector?.(".zg-gif-player, img, video, iframe");

      return fallback || node;
    },

    // call this method to remove any existing edit overlays related to a media node before applying new ones - helps prevent duplicates and stale overlays after media type conversions
    removeMediaEditOverlaysForNode: function (node) {
    if (!node || !node.ownerDocument) return;

    const doc = node.ownerDocument;
    const vvvebId = node.getAttribute?.("data-vvveb-id") || "";

    // Remove overlay directly linked to this media node
    if (vvvebId) {
        doc.querySelectorAll(
            `.zigrow-embed-edit-overlay[data-media-target-id="${vvvebId}"]`
        ).forEach((overlay) => overlay.remove());
    }

    // Also remove stale overlays from the same wrapper/container
    const wrapper = node.parentElement;
    if (wrapper) {
        wrapper
            .querySelectorAll(".zigrow-embed-edit-overlay")
            .forEach((overlay) => overlay.remove());
    }
},
  };

  document.addEventListener("DOMContentLoaded", function () {
    if (window.Vvveb && Vvveb.CustomMedia) {
      Vvveb.CustomMedia.init();
    }
  });
}
