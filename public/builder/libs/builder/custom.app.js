const ImageMaskEditor = {
    shapes: [
        { name: "none", path: "none" },
        { name: "circle", path: "circle(50% at 50% 50%)" },
        { name: "ellipse", path: "ellipse(50% 40% at 50% 50%)" },
        { name: "triangle", path: "polygon(50% 0%, 0% 100%, 100% 100%)" },
        { name: "diamond", path: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" },
        { name: "pentagon", path: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" },
        { name: "hexagon", path: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" },
        { name: "star", path: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" },
        { name: "chevron", path: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)" },
        { name: "rhombus", path: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" },
        { name: "trapezium-up", path: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" },
        { name: "trapezium-down", path: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)" },
        { name: "rounded-square", path: "inset(0% round 10%)" }
    ],

    init: function () {
        this.addStyles();
        this.renderShapes();
        this.bindEvents();
    },

    addStyles: function () {
        const style = document.createElement('style');
        style.innerHTML = `
            .shapes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; max-height: 100px; overflow-y: auto; padding-right: 5px; margin-bottom: 10px; }
            .shape-item { width: 100%; aspect-ratio: 1; background: #f8f9fa; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 2px solid transparent; transition: border-color 0.2s; }
            .shape-item.active, .shape-item:hover { border-color: #0d6efd; }
            .shape { width: 25px; height: 25px; background: #4d555e; }
            .shape.none { background: transparent; position: relative;}
            .shape.none::after { content: '🚫'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #dc3545; font-size: 20px; font-weight: bold; }
            .mask-popup { display: none; position: absolute; bottom: 100%; left: 0; z-index: 1101; background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid #dee2e6; border-radius: 6px; padding: 12px; width: 260px; margin-bottom: 10px; }
            .mask-popup.show { display: block; }
            ${this.shapes.map(s => s.name !== 'none' ? `.shape.${s.name} { clip-path: ${s.path}; }` : '').join('\n')}
        `;
        document.head.appendChild(style);
    },

    renderShapes: function () {
        const shapesGrid = document.querySelector('.shapes-grid');
        if (shapesGrid) {
            shapesGrid.innerHTML = '';
            this.shapes.forEach((shape, index) => {
                const item = document.createElement('div');
                item.className = `shape-item ${index === 0 ? 'active' : ''}`;
                item.dataset.shape = shape.path;
                item.innerHTML = `<div class="shape ${shape.name}"></div>`;
                shapesGrid.appendChild(item);
            });
        }
    },

    bindEvents: function () {
        const maskingBtn = document.getElementById("masking-btn");
        const maskPopup = document.querySelector(".mask-popup");
        const shapesGrid = document.querySelector('.shapes-grid');
        const imagePosition = document.getElementById("image-mask-position");

        if (maskingBtn && maskPopup) {
            maskingBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                this.syncSelectedShape();

                const topDistance = maskingBtn.getBoundingClientRect().top;
                if (topDistance > 270) {
                    maskPopup.style.bottom = "100%";
                    maskPopup.style.top = "auto";
                } else {
                    maskPopup.style.bottom = "auto";
                    maskPopup.style.top = "110%";
                }
                maskPopup.classList.toggle("show");
            });

            maskPopup.addEventListener("click", (e) => e.stopPropagation());
        }

        if (shapesGrid) {
            shapesGrid.addEventListener("click", (e) => {
                const item = e.target.closest('.shape-item');
                if (!item) return;

                shapesGrid.querySelectorAll('.shape-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');

                this.applyStyleToSelected("clip-path", item.dataset.shape);
            });
        }

        if (imagePosition) {
            imagePosition.addEventListener("input", (e) => {
                this.applyStyleToSelected("object-position", e.target.value);
            });
        }
    },

    applyStyleToSelected: function (property, value) {
        const selectedEl = window.Vvveb ? Vvveb.Builder.selectedEl : null;

        if (selectedEl && selectedEl.tagName === "IMG") {
            const oldStyle = selectedEl.getAttribute("style") || "";

            if (property === "clip-path") {
                if (value === "none") {
                    selectedEl.style.removeProperty("clip-path");
                    selectedEl.style.removeProperty("-webkit-clip-path");
                } else {
                    selectedEl.style.clipPath = value;
                    selectedEl.style.WebkitClipPath = value;
                }
            } else if (property === "object-position") {
                if (!value || value.trim() === "") {
                    selectedEl.style.removeProperty("object-position");
                } else {
                    selectedEl.style.objectPosition = value;
                }
            }

            
            if (window.Vvveb && Vvveb.Undo) {
                Vvveb.Undo.addMutation({
                    type: "attributes",
                    target: selectedEl,
                    attributeName: "style",
                    oldValue: oldStyle,
                    newValue: selectedEl.getAttribute("style") || ""
                });
            }
        }
    },

    syncSelectedShape: function () {
        const selectedEl = window.Vvveb ? Vvveb.Builder.selectedEl : null;
        const shapesGrid = document.querySelector('.shapes-grid');

        if (!selectedEl || !shapesGrid || selectedEl.tagName !== "IMG") return;

        
        let currentClipPath =
            selectedEl.style.clipPath ||
            window.getComputedStyle(selectedEl).clipPath ||
            "none";

        
        if (
            !currentClipPath ||
            currentClipPath === "initial" ||
            currentClipPath === "unset"
        ) {
            currentClipPath = "none";
        }

        let matchedItem = null;

        shapesGrid.querySelectorAll('.shape-item').forEach(item => {
            item.classList.remove('active');

            if (item.dataset.shape === currentClipPath) {
                matchedItem = item;
            }
        });

        
        if (!matchedItem) {
            matchedItem = shapesGrid.querySelector('[data-shape="none"]');
        }

        matchedItem?.classList.add('active');
    }
};

const CustomEmojiPicker = {
    dictionary: {
        smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😮‍💨", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🫣", "🤗", "🫡", "🤔", "🤫", "🫠", "🤥", "😶", "😶‍🌫️", "😐", "😑", "😬", "🫨", "😮", "😯", "😲", "🥱", "😴", "🤤", "😪", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😾"],
        gestures: ["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🫰", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "💋", "🩸"],
        clothing: ["👑", "👒", "🎩", "🎓", "🧢", "🪖", "⛑️", "📿", "💄", "💍", "💎", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👕", "👖", "👔", "👗", "🥼", "🦺", "🧥", "🧦", "🥾", "👟", "🥿", "👠", "👡", "👢", "🛼", "🛹"],
        nature: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄️", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦤", "🦩", "🦚", "🦜", "🦢", "🦘", "🦬", "🐄", "🐖", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐁", "🐀", "🐇", "🐿️", "🦫", "🦔", "🦇", "🦥", "🦦", "🦨", "🦡", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🪵", "🌱", "🌿", "☘️", "🍀", "🎍", "🪴", "🎋", "🍃", "🍂", "🍁", "🍄", "🐚", "🪨", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻"],
        food: ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🫑", "🌽", "🥕", "🫒", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🥞", "🧇", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🫔", "🥙", "🧆", "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🦪", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🥛", "☕", "🫖", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🧋", "🧃", "🧉", "🧊"],
        activities: ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛼", "🛷", "⛸️", "🥌", "🎿", "⛷️", "🏂", "🪂", "🏋️", "🤼", "🤸", "⛹️", "🤾", "🧗", "🤺", "🧘", "🏄", "🏊", "🤽", "🚣", "🏇", "🚴", "🚵", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖️", "🏵️", "🎗️", "🎫", "🎟️", "🎪", "🤹", "🎭", "🩰", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🪘", "🎷", "🎺", "🎸", "🪕", "🎻", "🎲", "♟️", "🎯", "🎳", "🎮", "🎰", "🧩"],
        travel: ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🛵", "🚲", "🛴", "🦽", "🦼", "🛺", "🚉", "🚊", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚏", "🚢", "🛳️", "🛥️", "🚤", "⛴️", "⛵", "✈️", "🛩️", "🛫", "🛬", "💺", "🚁", "🚟", "🚠", "🚡", "🚀", "🛸", "🛰️", "🗺️", "🧭", "🏔️", "⛰️", "🌋", "🗻", "🏕️", "🏖️", "🏜️", "🏝️", "🏟️", "🏛️", "🏗️", "🧱", "🏘️", "🏚️", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🛕", "🕍", "⛩️", "🕋"],
        objects: ["⌚", "📱", "📲", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽️", "🎞️", "📞", "📟", "📠", "📺", "📻", "🎙️", "🎚️", "🎛️", "⏱️", "⏲️", "⏰", "🕰️", "⌛", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯️", "🪔", "🧯", "🛢️", "💸", "💵", "💴", "💶", "💷", "🪙", "💰", "💳", "⚖️", "🪜", "🧰", "🪛", "🔧", "🔨", "⚒️", "🛠️", "⛏️", "🪓", "🪚", "🔩", "⚙️", "🪤", "⛓️", "🧲", "🔫", "💣", "🧨", "🔪", "🗡️", "⚔️", "🛡️", "🚬", "⚰️", "🪦", "⚱️", "🏺", "🔮", "🧿", "💈", "🧪", "🔬", "🔭", "💉", "💊", "🩹", "🩺", "🩻", "🧬"],
        symbols: ["💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "❤️‍🔥", "❤️‍🩹", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤎", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "🌐", "🌀", "♠️", "♥️", "♦️", "♣️", "🃏", "🀄", "🎴", "🔇", "🔈", "🔉", "🔊", "📢", "📣", "📯", "🔔", "🔕", "🎵", "🎶", "✴️", "✳️", "➕", "➖", "➗", "✖️", "♾️", "💲", "💱", "™️", "©️", "®️", "👁️", "🔤", "🔡", "🔠", "🔣"],
        flags: ["🏁", "🚩", "🎌", "🏴", "🏳️", "🏳️‍⚧️", "🏴‍☠️"]
    },

    keywords: {
        "smile happy face grin joy laugh haha": ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃"],
        "wink flirt tease eye": ["😉", "😜", "😝", "😛", "😋"],
        "love heart kiss romance affection crush infatuate": ["😍", "🥰", "😘", "😗", "😙", "😚"],
        "cool glasses nerd smart sunglasses genius": ["😎", "🤓", "🧐", "🥸"],
        "party celebrate birthday fun": ["🥳"],
        "smirk cheeky sly proud": ["😏", "😌"],
        "sad cry tear sorrow bad depressed upset disappointed": ["🥲", "😢", "😭", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖"],
        "tired exhaust wear weary sigh groan": ["😫", "😩", "😮‍💨"],
        "plead beg puppy eyes cute": ["🥺", "🥹"],
        "angry mad hate rage furious annoyed curse swear": ["😤", "😠", "😡", "🤬", "👿", "😾"],
        "shock surprise wow gasp explode mind blown": ["🤯", "😳", "😱", "😨", "😰", "😥", "😓", "😮", "😯", "😲"],
        "scare peek hide shy": ["🫣", "🫣"],
        "hug embrace care open": ["🤗"],
        "salute respect sir army": ["🫡"],
        "think wonder ponder chin": ["🤔"],
        "shh quiet secret hush silence": ["🤫", "🤐", "😶"],
        "melt liquid disappear soft": ["🫠"],
        "lie pinocchio nose fake": ["🤥"],
        "neutral straight face blank sigh": ["😐", "😑"],
        "awkward cringe yikes teeth": ["😬"],
        "shake tremble earthquake vibrate": ["🫨"],
        "sleep tired bed snore yawn sleepy awake rest": ["😴", "🤤", "😪", "🥱", "💤"],
        "dizzy confused spinning hypnosis cross eyes": ["😵", "😵‍💫"],
        "drunk woozy tipy": ["🥴"],
        "sick ill vomit cold hot fever gross health medicine": ["🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🥶", "🥵"],
        "money rich dollar wealthy cash": ["🤑"],
        "cowboy hat western texas": ["🤠"],
        "evil devil horn bad demon": ["😈", "👿", "👹", "👺"],
        "clown joke circus funny": ["🤡"],
        "poop shit crap funny gross toilet": ["💩"],
        "ghost scary spooky spirit halloween skull death bone": ["👻", "💀", "☠️", "🎃"],
        "alien space ufo martian extraterrestrial": ["👽", "👾", "🛸"],
        "robot bot tech ai mechanical machine": ["🤖", "⚙️"],
        "cat kitty kitten meow feline pet": ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😾"],
        "hand point gesture wave stop hello hi greeting bye": ["👋", "🤚", "🖐️", "✋", "🖖"],
        "ok yes approve good perfect check correct tick": ["👍", "👌", "✅", "💯", "✔️", "☑️"],
        "no stop cancel bad wrong cross x fail down": ["👎", "✋", "🚫", "🛑", "❌", "✖️", "❎"],
        "pinch tiny small little": ["🤌", "🤏"],
        "peace victory v two scissors": ["✌️", "🤞"],
        "love finger heart snap sign": ["🫰", "🤟", "🤘", "🤙"],
        "point direction look index left right up down": ["👈", "👉", "👆", "🖕", "👇", "☝️"],
        "fist punch hit bro bump strike": ["✊", "👊", "🤛", "🤜"],
        "clap applause bravo hand wash wash open pray please thanks": ["👏", "🙌", "👐", "🤲", "🤝", "🙏"],
        "write pen sign nail polish beauty makeup selfie phone": ["✍️", "💅", "🤳"],
        "muscle strong arm flex bicep leg foot kick step body": ["💪", "🦾", "🦿", "🦵", "🦶"],
        "ear hear listen nose smell scent breath organ": ["👂", "🦻", "👃", "🫁"],
        "brain mind think smart organ heart vein teeth bone skeleton": ["🧠", "🫀", "🦷", "🦴", "🩸"],
        "eye see look watch vision tongue lick lips kiss mouth": ["👀", "👁️", "👅", "👄", "💋"],
        "crown king queen royal hat cap graduation magic hat": ["👑", "👒", "🎩", "🎓", "🧢", "🪖", "⛑️"],
        "jewelry ring diamond pearl marry wedding makeup lipstick": ["📿", "💄", "💍", "💎"],
        "shirt clothes pants dress tie suit jacket coat sock underwear": ["👚", "👕", "👖", "👔", "👗", "🥼", "🦺", "🧥", "🧦", "🩱", "🩲", "🩳", "👙"],
        "shoes boot heel run sneaker walk skate": ["🥾", "👟", "🥿", "👠", "👡", "👢", "🛼", "🛹"],
        "animal pet dog puppy hound": ["🐶", "🦮", "🐩"],
        "cat kitten feline meow": ["🐱", "🐈", "🐈‍⬛"],
        "mouse rat hamster rodent": ["🐭", "🐁", "🐀", "🐹"],
        "rabbit bunny hop spring": ["🐰", "🐇"],
        "fox orange wild forest": ["🦊"],
        "bear panda koala polar brown": ["🐻", "🐼", "🐻‍❄️", "🐨"],
        "tiger lion roar wild cat": ["🐯", "🦁"],
        "cow pig farm bacon pork moo": ["🐮", "🐄", "🐷", "🐖", "🐽"],
        "frog toad green pond hop": ["🐸"],
        "monkey ape gorilla primate chimp": ["🐵", "🙈", "🙉", "🙊", "🐒", "🦍", "🦧"],
        "chicken bird duck fly wings eagle owl feather": ["🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦤", "🦩", "🦚", "🦜", "🦢"],
        "sheep goat ram wool": ["🐏", "🐑", "🐐"],
        "camel desert sand animal": ["🐪", "🐫", "🦙"],
        "elephant rhino hippo giraffe heavy large zoo": ["🦒", "🐘", "🦣", "🦏", "🦛"],
        "squirrel hedgehog beaver badger bat sloth otter skunk kangaroo paw": ["🐿️", "🦫", "🦔", "🦇", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾"],
        "dragon dinosaur lizard monster fire": ["🐉", "🐲"],
        "tree plant wood leaf nature green spring fall autumn flower grass garden": ["🌵", "🎄", "🌲", "🌳", "🌴", "🪵", "🌱", "🌿", "☘️", "🍀", "🎍", "🪴", "🎋", "🍃", "🍂", "🍁"],
        "flower rose tulip sunflower blossom bloom bouquet": ["💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻"],
        "mushroom rock stone shell beach nature": ["🍄", "🐚", "🪨"],
        "food fruit sweet fresh apple pear orange lemon banana watermelon grape strawberry cherry peach mango pineapple coconut kiwi": ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝"],
        "veg vegetable healthy tomato eggplant avocado broccoli lettuce cucumber pepper corn carrot onion garlic potato sweet": ["🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🫑", "🌽", "🥕", "🫒", "🧄", "🧅", "🥔", "🍠"],
        "bread carb bake toast croissant bagel pretzel pancake waffle": ["🥐", "🥯", "🍞", "🥖", "🥨", "🥞", "🧇"],
        "meat cook beef chicken bacon pork steak hotdog burger fries pizza sandwich taco burrito": ["🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🫔", "🥙", "🧆"],
        "egg cook breakfast pan pot soup salad popcorn butter salt can bento rice noodle pasta sushi seafood": ["🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🦪"],
        "dessert sweet sugar ice cream donut cookie cake pie chocolate candy lollipop honey": ["🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯"],
        "drink liquid water milk coffee tea hot cold juice cup alcohol wine beer cocktail cheers ice bobba": ["🥛", "☕", "🫖", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🧋", "🧃", "🧉", "🧊"],
        "sport play game ball soccer football basketball baseball tennis volleyball rugby pool ping pong hockey cricket golf box martial board ski skate surf swim gym bowl dart": ["⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛼", "🛷", "⛸️", "🥌", "🎿", "⛷️", "🏂", "🪂", "🏋️", "🤼", "🤸", "⛹️", "🤾", "🧗", "🤺", "🧘", "🏄", "🏊", "🤽", "🚣", "🏇", "🚴", "🚵", "🎯", "🎳"],
        "win prize medal trophy ribbon ticket event circus juggle mask art paint movie mic sing music headphone piano drum guitar violin": ["🏆", "🥇", "🥈", "🥉", "🏅", "🎖️", "🏵️", "🎗️", "🎫", "🎟️", "🎪", "🤹", "🎭", "🩰", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🪘", "🎷", "🎺", "🎸", "🪕", "🎻"],
        "video game console controller dice chess puzzle luck play": ["🎲", "♟️", "🎮", "🎰", "🧩"],
        "car auto vehicle drive road taxi bus police ambulance fire truck tractor bike scooter train wheel metro station stop": ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🛵", "🚲", "🛴", "🦽", "🦼", "🛺", "🚉", "🚊", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚏"],
        "boat ship sail water cruise plane fly flight travel air helicopter rocket space satellite map compass": ["🚢", "🛳️", "🛥️", "🚤", "⛴️", "⛵", "✈️", "🛩️", "🛫", "🛬", "💺", "🚁", "🚟", "🚠", "🚡", "🚀", "🛸", "🛰️", "🗺️", "🧭"],
        "mountain hill volcano earth camp tent beach island stadium building house home city bank hospital school factory castle tower church temple": ["🏔️", "⛰️", "🌋", "🗻", "🏕️", "🏖️", "🏜️", "🏝️", "🏟️", "🏛️", "🏗️", "🧱", "🏘️", "🏚️", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🛕", "🕍", "⛩️", "🕋"],
        "watch time clock phone mobile text call screen laptop pc computer keyboard print mouse tape disc camera photo video movie radio tv mic sound compass hourglass battery plug wire light bulb flash candle": ["⌚", "📱", "📲", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "🖲️", "🕹️", "🗜️", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽️", "🎞️", "📞", "📟", "📠", "📺", "📻", "🎙️", "🎚️", "🎛️", "⏱️", "⏲️", "⏰", "🕰️", "⌛", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯️", "🪔"],
        "fire flame burn extinguisher oil barrel tool fix measure hammer wrench axe saw screw gear magnet tool ladder scale box": ["🧯", "🛢️", "⚖️", "🪜", "🧰", "🪛", "🔧", "🔨", "⚒️", "🛠️", "⛏️", "🪓", "🪚", "🔩", "⚙️", "🪤", "⛓️", "🧲"],
        "money cash dollar pay buy rich bill coin card jewel gem crystal": ["💸", "💵", "💴", "💶", "💷", "🪙", "💰", "💳", "💎"],
        "weapon gun bomb explosion knife sword shield dead coffin grave urn crystal magic pill blood needle health doctor dna": ["🔫", "💣", "🧨", "🔪", "🗡️", "⚔️", "🛡️", "🚬", "⚰️", "🪦", "⚱️", "🏺", "🔮", "🧿", "💈", "🧪", "🔬", "🔭", "💉", "💊", "🩹", "🩺", "🩻", "🧬"],
        "heart love shape emotion break heal fire color pink red orange yellow green blue purple black white brown": ["💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "❤️‍🔥", "❤️‍🩹", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤎", "🤍"],
        "100 perfect score anger comic splash sleep hole chat text talk thought globe spin card suit loud sound bell note math add subtract multiply divide infinity money brand trademark copyright eye text symbol abc": ["💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "🌐", "🌀", "♠️", "♥️", "♦️", "♣️", "🃏", "🀄", "🎴", "🔇", "🔈", "🔉", "🔊", "📢", "📣", "📯", "🔔", "🔕", "🎵", "🎶", "✴️", "✳️", "➕", "➖", "➗", "✖️", "♾️", "💲", "💱", "™️", "©️", "®️", "👁️", "🔤", "🔡", "🔠", "🔣"],
        "flag race country pride pirate japan white flag": ["🏁", "🚩", "🎌", "🏴", "🏳️", "🏳️‍⚧️", "🏴‍☠️"]
    },

    maxRecentEmojis: 21,
    savedRange: null,
    isInitialized: false,

    init: function () {
        this.bindEvents();
    },

    getRecentEmojis: function () {
        const recents = localStorage.getItem("vvveb-recent-emojis");
        return recents ? JSON.parse(recents) : ["😀", "👍", "❤️", "✨", "🔥", "😂", "🎉"];
    },

    saveRecentEmoji: function (emoji) {
        let recents = this.getRecentEmojis();
        recents = recents.filter(e => e !== emoji);
        recents.unshift(emoji);
        if (recents.length > this.maxRecentEmojis) recents = recents.slice(0, this.maxRecentEmojis);
        localStorage.setItem("vvveb-recent-emojis", JSON.stringify(recents));
    },

    renderRecentSection: function () {
        const viewport = document.querySelector(".emoji-scroll-viewport");
        if (!viewport) return;
        let recentSection = viewport.querySelector('[data-cat-id="recent"]');

        if (!recentSection) {
            recentSection = document.createElement("div");
            recentSection.className = "emoji-category-section active";
            recentSection.dataset.catId = "recent";
            viewport.insertBefore(recentSection, viewport.firstChild);
        }

        recentSection.innerHTML = "";
        this.getRecentEmojis().forEach(emojiString => {
            const btn = document.createElement("button");
            btn.className = "emoji-btn";
            btn.type = "button";
            btn.textContent = emojiString;
            recentSection.appendChild(btn);
        });
    },

    initializePickerUI: function () {
        const container = document.getElementById("emoji-picker-container");
        if (!container) return;
        container.classList.add("phone-emoji-picker");

        container.innerHTML = `
            <div class="emoji-search-wrapper">
                <input type="text" class="emoji-search-input" placeholder="Search emoji..." autocomplete="off">
            </div>
            <div class="emoji-scroll-viewport"></div>
            <div class="outer-emoji-category-tabs">
            <div class="emoji-category-tabs">
                <button class="category-tab active" data-category="recent" title="Recently Used">🕒</button>
                <button class="category-tab" data-category="smileys" title="Smileys">😀</button>
                <button class="category-tab" data-category="gestures" title="Gestures">👍</button>
                <button class="category-tab" data-category="clothing" title="Clothing">👕</button>
                <button class="category-tab" data-category="nature" title="Nature">🐱</button>
                <button class="category-tab" data-category="food" title="Food">🍎</button>
                <button class="category-tab" data-category="activities" title="Activities">⚽</button>
                <button class="category-tab" data-category="travel" title="Travel">🚗</button>
                <button class="category-tab" data-category="objects" title="Objects">💡</button>
                <button class="category-tab" data-category="symbols" title="Symbols">❤️</button>
                <button class="category-tab" data-category="flags" title="Flags">🏁</button>
            </div>
            </div>
        `;

        const viewport = container.querySelector(".emoji-scroll-viewport");
        const searchInput = container.querySelector(".emoji-search-input");
        const tabsContainer = container.querySelector(".emoji-category-tabs");

        this.renderRecentSection();

        Object.keys(this.dictionary).forEach((categoryName) => {
            const section = document.createElement("div");
            section.className = "emoji-category-section";
            section.dataset.catId = categoryName;

            this.dictionary[categoryName].forEach(emojiString => {
                const btn = document.createElement("button");
                btn.className = "emoji-btn";
                btn.type = "button";
                btn.textContent = emojiString;
                section.appendChild(btn);
            });
            viewport.appendChild(section);
        });

        const searchResults = document.createElement("div");
        searchResults.className = "emoji-category-section";
        searchResults.dataset.catId = "search-results";
        viewport.appendChild(searchResults);

        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const allSections = viewport.querySelectorAll(".emoji-category-section");

            if (!query) {
                allSections.forEach(sec => sec.classList.remove("active"));
                const activeTab = tabsContainer.querySelector(".category-tab.active");
                if (activeTab) {
                    viewport.querySelector(`[data-cat-id="${activeTab.dataset.category}"]`).classList.add("active");
                }
                return;
            }

            allSections.forEach(sec => sec.classList.remove("active"));
            searchResults.classList.add("active");
            searchResults.innerHTML = "";

            let matchedEmojis = new Set();
            let exactMatchesFound = false;

            Object.keys(this.keywords).forEach(keywordString => {
                const keywords = keywordString.split(" ");
                const isMatch = keywords.some(word => word.startsWith(query));

                if (isMatch) {
                    this.keywords[keywordString].forEach(emj => matchedEmojis.add(emj));
                    exactMatchesFound = true;
                }
            });

            if (!exactMatchesFound) {
                Object.keys(this.dictionary).forEach(cat => {
                    if (cat.includes(query)) {
                        this.dictionary[cat].forEach(emj => matchedEmojis.add(emj));
                    }
                });
            }

            if (matchedEmojis.size > 0) {
                matchedEmojis.forEach(emojiString => {
                    const btn = document.createElement("button");
                    btn.className = "emoji-btn";
                    btn.type = "button";
                    btn.textContent = emojiString;
                    searchResults.appendChild(btn);
                });
            } else {
                searchResults.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 30px 10px; color: #8e8e93; font-family: sans-serif;">
                        <div style="font-size: 24px; margin-bottom: 8px;">🤔</div>
                        <div style="font-size: 14px;">No emojis found for "${query}"</div>
                    </div>`;
            }
        });

        searchInput.addEventListener("click", (e) => e.stopPropagation());

        viewport.addEventListener("click", (event) => {
            const btn = event.target.closest(".emoji-btn");
            if (!btn) return;

            const chosenEmoji = btn.textContent;
            this.saveRecentEmoji(chosenEmoji);
            this.insertEmojiAtCursor(chosenEmoji);

            searchInput.value = "";
            searchInput.dispatchEvent(new Event('input'));

            container.style.display = "none";
        });

        tabsContainer.addEventListener("click", (e) => {
            const tab = e.target.closest(".category-tab");
            if (!tab) return;

            searchInput.value = "";

            tabsContainer.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const targetCategory = tab.dataset.category;
            if (targetCategory === "recent") this.renderRecentSection();

            viewport.querySelectorAll(".emoji-category-section").forEach(sec => {
                sec.classList.toggle("active", sec.dataset.catId === targetCategory);
            });

            viewport.scrollTop = 0;
        });

        this.isInitialized = true;
    },

    bindEvents: function () {
        const emoticonPicker = document.getElementById("emoticon-picker");

        if (emoticonPicker) {
            emoticonPicker.addEventListener("click", (e) => {
                e.stopPropagation();

                const container = document.getElementById("emoji-picker-container");
                if (!container) return;

                if (container.style.display === "flex" || container.style.display === "block") {
                    container.style.display = "none";
                    return;
                }

                if (window.Vvveb && window.Vvveb.Builder && window.Vvveb.Builder.iframe) {
                    const iframeWindow = Vvveb.Builder.iframe.contentWindow;
                    const selection = iframeWindow.getSelection();

                    if (selection.rangeCount > 0) {
                        this.savedRange = selection.getRangeAt(0);
                    }
                }

                if (!this.isInitialized) {
                    this.initializePickerUI();
                } else {
                    this.renderRecentSection();
                    const tabsContainer = container.querySelector(".emoji-category-tabs");
                    tabsContainer.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
                    tabsContainer.querySelector('[data-category="recent"]').classList.add("active");

                    container.querySelectorAll(".emoji-category-section").forEach(sec => {
                        sec.classList.toggle("active", sec.dataset.catId === "recent");
                    });
                }

                container.style.display = "flex";

                const rect = emoticonPicker.getBoundingClientRect();
                const pickerHeight = 360;
                const gap = 10;

                const spaceAbove = rect.top;
                const spaceBelow = window.innerHeight - rect.bottom;

                container.style.left = `0px`;

                if (spaceAbove >= (pickerHeight + gap) && spaceAbove > spaceBelow) {
                    container.style.bottom = `100%`;
                    container.style.top = `auto`;
                    container.classList.add("open-top");
                    container.classList.remove("open-bottom");
                } else {
                    container.style.top = `100%`;
                    container.style.bottom = `auto`;
                    container.classList.add("open-bottom");
                    container.classList.remove("open-top");
                }
            });
        }

        document.addEventListener("click", (e) => {
            const container = document.getElementById("emoji-picker-container");
            if (container && (container.style.display === "block" || container.style.display === "flex") && !container.contains(e.target)) {
                container.style.display = "none";
            }
        });
    },

    insertEmojiAtCursor: function (emoji) {
        if (!window.Vvveb || !window.Vvveb.Builder || !window.Vvveb.Builder.iframe) return;

        const iframeWindow = Vvveb.Builder.iframe.contentWindow;
        const iframeDoc = iframeWindow.document;

        iframeWindow.focus();

        if (!this.savedRange) return;

        const selection = iframeWindow.getSelection();

        selection.removeAllRanges();
        selection.addRange(this.savedRange);

        const textNode = iframeDoc.createTextNode(emoji);

        this.savedRange.deleteContents();
        this.savedRange.insertNode(textNode);

        this.savedRange.setStartAfter(textNode);
        this.savedRange.setEndAfter(textNode);

        selection.removeAllRanges();
        selection.addRange(this.savedRange);

        Vvveb.Builder.selectNode(
            textNode.parentElement || textNode.parentNode
        );
    }
};



document.addEventListener("click", () => {
    const maskPanel = document.getElementById("mask-popup");
    if (maskPanel.classList.contains("show")) {
        maskPanel.classList.remove("show");
    }
});









const SurfaceStyleEditor = {
    selector: '[data-zg-editable="surface"], .clonable-card',

    element: null,
    hoveredSurface: null,
    selectedSurface: null,
    doc: null,
    win: null,

    button: null,
    popup: null,

    buttonId: "zg-surface-style-btn",
    popupId: "zg-surface-style-popup",

    activeTab: "color",
    isPopupOpen: false,

    isInitialized: false,
    parentEventsBound: false,
    isButtonHover: false,
    hideTimer: null,
    positionButtonBound: null,

    isMediaPicking: false,
isMediaReturning: false,
ignoreSurfaceCloseUntil: 0,
mediaReturnTimer: null,
isMediaReturnHoverLocked: false,



    isPopupHover: false,
surfaceSwitchTimer: null,

isColorPickerActive: false,
colorPickerTimer: null,

    originalStyle: "",
    appliedMode: null,

    colorState: {
        color: "#5B3DF2",
        opacity: 100,
    },

    gradientState: {
        start: "#5B3DF2",
        end: "#FB7185",
        angle: 135,
        opacity: 100,
    },

    imageState: {
    url: "",
    position: "center center",
    size: "cover",
    overlayColor: "#000000",
    overlayOpacity: 40,
    overlayEnabled: true,
},

textSelector: `
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span:not(.vvveb-add-btn-text):not(.vvveb-add-btn-plus),
    a:not([data-btn]),
    li:not(nav li):not(.navbar li):not(.nav li),
    blockquote,
    small,
    strong
`,

originalTextStyles: [],
originalButtonStyles: [],

smartTextColor: null,
contrastRequestId: 0,

    recentColorsKey: "zg-surface-recent-colors",

    layoutClasses: [
        "container",
        "container-fluid",
        "row",
        "swiper",
        "swiper-wrapper",
        "carousel",
        "carousel-inner",
        "carousel-item",
        "img-wrapper",
        "img-wrapper-style",
        "image-wrapper",
        "button-wrapper",
        "icon-wrapper",
        "vvveb-add-link-helper",
        "add-card-btn",
    ],

    invalidTags: [
        "html",
        "body",
        "section",
        "header",
        "footer",
        "main",
        "nav",
        "form",
        "img",
        "picture",
        "video",
        "iframe",
        "svg",
        "i",
        "button",
        "a",
        "input",
        "textarea",
        "select",
        "label",
    ],

    defaultThemeColors: [
        "#5B3DF2",
        "#2563EB",
        "#3B82F6",
        "#22C55E",
        "#F59E0B",
        "#F97316",
        "#EF4444",
        "#111827",
        "#FFFFFF",
    ],

    init: function () {
        if (this.isInitialized) return;

        this.isInitialized = true;

        this.cacheElements();
        this.bindParentEvents();
        this.bindPopupEvents();
        this.bindIframeLoadEvents();
        this.bindIframeEvents();
        this.renderThemeColors();
        this.renderRecentColors();
        document.addEventListener("zigrow:global-colors-updated", () => {
    this.renderThemeColors();
});
    },

    cacheElements: function () {
        this.button = document.getElementById(this.buttonId);
        this.popup = document.getElementById(this.popupId);

        if (!this.button) {
            console.warn("[SurfaceStyleEditor] Missing #zg-surface-style-btn in editor.html");
        }

        if (!this.popup) {
            console.warn("[SurfaceStyleEditor] Missing #zg-surface-style-popup in editor.html");
        }

        const iconImg = this.button?.querySelector(".zg-surface-editor-icon-img");

        if (iconImg) {
            iconImg.addEventListener("error", () => {
                this.button.classList.add("use-fallback");
            });
        }
    },

    getBuilder: function () {
        return window.Vvveb && window.Vvveb.Builder
            ? window.Vvveb.Builder
            : null;
    },

    bindParentEvents: function () {
        if (this.parentEventsBound) return;

        this.parentEventsBound = true;

        this.positionButtonBound = () => {
            this.positionButton();
        };

        window.addEventListener("resize", this.positionButtonBound, {
            passive: true,
        });

        window.addEventListener("scroll", this.positionButtonBound, {
            passive: true,
            capture: true,
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;

            if (this.isPopupOpen) {
                this.closePopup(true);
                return;
            }

            this.hoveredSurface = null;
            this.selectedSurface = null;
            this.element = null;
            this.syncBuilderState();
            this.hideButton();
        });

    

document.addEventListener("click", () => {
    this.scheduleSurfaceRefresh();
}, true);

document.addEventListener("mousedown", () => {
    this.scheduleSurfaceRefresh();
}, true);

document.addEventListener("keyup", (event) => {
    if (event.key !== "Escape") return;

    this.scheduleSurfaceRefresh();
});

document.addEventListener("click", (event) => {
    const previewButton =
        event.target.closest(".btn-preview-mode");

    if (!previewButton) return;

   
    setTimeout(() => {
        const isPreview =
            !!window.Vvveb?.Builder?.isPreview;

        if (isPreview) {
           
            if (this.isPopupOpen) {
                this.closePopup(true);
            }

            this.hoveredSurface = null;
            this.selectedSurface = null;
            this.element = null;

            this.syncBuilderState();
            this.hideButton();
            return;
        }

        this.updateButtonState();
    }, 0);
});


   document.addEventListener("mousedown", (event) => {
    if (!this.isPopupOpen) return;

    if (
    this.isMediaPicking ||
    this.isMediaReturning ||
      this.isColorPickerActive ||
    Date.now() < this.ignoreSurfaceCloseUntil
) {
    return;
}

    if (this.popup && this.popup.contains(event.target)) return;
    if (this.button && this.button.contains(event.target)) return;

   
    if (
        event.target.closest(
            [
                "#new-media-modal",
                "#ai-writer-menu",
                "#ai-prompt-panel",
                "#ai-quick-panel",
                "#wysiwyg-editor",
                "#emoji-picker-container",
                "#link-popup",
                ".vvv-link-modal",
                ".zg-custom-media-popup",
                "#section-editor",
                "#insert-modal"
            ].join(", ")
        )
    ) {
        return;
    }

    this.closePopup(true);
}, true);

        this.button?.addEventListener("mouseenter", () => {
            this.isButtonHover = true;

            if (this.hideTimer) {
                clearTimeout(this.hideTimer);
                this.hideTimer = null;
            }

            this.positionButton();
        });

     this.button?.addEventListener("mouseleave", () => {
    this.isButtonHover = false;

    if (!this.isPopupOpen) {
        this.hoveredSurface = null;
    }

    this.updateButtonState();
});

        this.button?.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const surface = this.getActiveSurface();

            if (!surface) return;

            this.open(surface);
        });
    },

    bindPopupEvents: function () {
        if (!this.popup || this.popup.__zgSurfaceEventsBound) return;

        this.popup.__zgSurfaceEventsBound = true;

        this.popup.addEventListener("pointerdown", (event) => {
    const input = event.target.closest(
        'input[type="color"][data-zg-surface-input]'
    );

    if (!input) return;

    this.isColorPickerActive = true;
    this.ignoreSurfaceCloseUntil = Date.now() + 1200;

    if (this.colorPickerTimer) {
        clearTimeout(this.colorPickerTimer);
    }
}, true);

this.popup.addEventListener("focusin", (event) => {
    const input = event.target.closest(
        'input[type="color"][data-zg-surface-input]'
    );

    if (!input) return;

    this.isColorPickerActive = true;
    this.ignoreSurfaceCloseUntil = Date.now() + 1200;
}, true);

this.popup.addEventListener("input", (event) => {
    const input = event.target.closest(
        'input[type="color"][data-zg-surface-input]'
    );

    if (!input) return;

    this.isColorPickerActive = true;
    this.ignoreSurfaceCloseUntil = Date.now() + 1200;
}, true);

this.popup.addEventListener("change", (event) => {
    const input = event.target.closest(
        'input[type="color"][data-zg-surface-input]'
    );

    if (!input) return;

    this.ignoreSurfaceCloseUntil = Date.now() + 500;

    if (this.colorPickerTimer) {
        clearTimeout(this.colorPickerTimer);
    }

    this.colorPickerTimer = setTimeout(() => {
        this.isColorPickerActive = false;
        this.colorPickerTimer = null;
    }, 350);
}, true);

this.popup.addEventListener("focusout", (event) => {
    const input = event.target.closest(
        'input[type="color"][data-zg-surface-input]'
    );

    if (!input) return;

    this.ignoreSurfaceCloseUntil = Date.now() + 500;

    if (this.colorPickerTimer) {
        clearTimeout(this.colorPickerTimer);
    }

    this.colorPickerTimer = setTimeout(() => {
        this.isColorPickerActive = false;
        this.colorPickerTimer = null;
    }, 350);
}, true);

        this.popup.addEventListener("mouseenter", () => {
    this.isPopupHover = true;

    if (this.surfaceSwitchTimer) {
        clearTimeout(this.surfaceSwitchTimer);
        this.surfaceSwitchTimer = null;
    }
});

this.popup.addEventListener("mouseleave", () => {
    this.isPopupHover = false;
});

        this.popup.addEventListener("click", (event) => {
            event.stopPropagation();

            const tab = event.target.closest("[data-zg-surface-tab]");
            const action = event.target.closest("[data-zg-surface-action]");
            const colorSwatch = event.target.closest("[data-zg-color]");
            const gradientPreset = event.target.closest(".zg-surface-gradient-preset");

            if (tab) {
                this.setActiveTab(tab.getAttribute("data-zg-surface-tab"));
                return;
            }

            if (colorSwatch) {
                this.setColorValue(colorSwatch.getAttribute("data-zg-color"));
                this.previewColor();
                return;
            }

            if (gradientPreset) {
                this.setGradientPreset(gradientPreset);
                this.previewGradient();
                return;
            }

            if (!action) return;

            const actionName = action.getAttribute("data-zg-surface-action");

      if (actionName === "close" || actionName === "cancel") {
    this.closePopup(true);
    return;
}

if (actionName === "chooseSurfaceImage") {
    this.chooseImageFromMedia();
    return;
}

if (actionName === "toggleSurfaceOverlay") {
    this.toggleSurfaceOverlay();
    return;
}

if (actionName === "reset") {
    this.previewReset();
    return;
}

if (actionName === "apply") {
    this.applyChanges();
    return;
}


        });

        this.popup.addEventListener("input", (event) => {
            const inputName = event.target.getAttribute("data-zg-surface-input");

            if (!inputName) return;

            this.handleInputChange(inputName, event.target.value);
        });

        this.popup.addEventListener("change", (event) => {
            const inputName = event.target.getAttribute("data-zg-surface-input");

            if (!inputName) return;

            this.handleInputChange(inputName, event.target.value);
        });
    },

    bindIframeLoadEvents: function () {
        window.addEventListener("vvveb.iframe.loaded", () => {
            this.resetIframeBinding();
            this.bindIframeEvents();
            this.updateButtonState();
        });

        window.addEventListener("Vvveb.iframe.loaded", () => {
            this.resetIframeBinding();
            this.bindIframeEvents();
            this.updateButtonState();
        });

        window.addEventListener("load", () => {
            setTimeout(() => {
                this.bindIframeEvents();
                this.updateButtonState();
            }, 500);
        });
    },

    resetIframeBinding: function () {
        const doc = this.getFrameDocument();

        if (doc) {
            doc.__zigrowSurfaceEditorIconBound = false;
        }
    },

    getIframeElement: function () {
        const builder = this.getBuilder();

        if (!builder || !builder.iframe) return null;

        const iframe = builder.iframe;

        if (iframe[0]) return iframe[0];

        return iframe;
    },

    getFrameDocument: function () {
        const iframe = this.getIframeElement();

        return (
            iframe?.contentDocument ||
            iframe?.contentWindow?.document ||
            window.FrameDocument ||
            null
        );
    },

  bindIframeEvents: function () {
    const doc = this.getFrameDocument();

    if (!doc || !doc.body) return;

    this.doc = doc;
    this.win = doc.defaultView || doc.parentWindow;

   
    if (!doc.__zigrowSurfaceUndoRestoreBound) {
        doc.__zigrowSurfaceUndoRestoreBound = true;

        doc.body.addEventListener("vvveb.undo.restore", (event) => {
            const mutation = event.detail;

            if (
                !mutation ||
                !mutation.zgSurfaceStyleChanges ||
                !Array.isArray(mutation.zgSurfaceStyleChanges)
            ) {
                return;
            }

            const markerValue = mutation.target?.getAttribute(
                mutation.attributeName
            );

           
            const useNewValues = markerValue === mutation.newValue;

           mutation.zgSurfaceStyleChanges.forEach(
    (change) => {
        let target =
            change.target;

       
        if (
            (
                !target ||
                !target.isConnected
            ) &&
            change.isIcon &&
            change.vvvebId
        ) {
            target =
                resolveVvvebTargetById(
                    change.vvvebId,
                );

            if (target) {
                change.target =
                    target;
            }
        }

        if (
            !target ||
            !target.isConnected
        ) {
            return;
        }

              const value = useNewValues
    ? change.newValue
    : change.oldValue;

if (
    !change.attributeName ||
    change.attributeName === "style"
) {
    if (value) {
        change.target.setAttribute(
            "style",
            value,
        );
    } else {
        change.target.removeAttribute(
            "style",
        );
    }

    return;
}

const engine =
    this.getButtonContrastEngine();

if (
    engine &&
    typeof engine.setAttributeValue ===
        "function"
) {
    engine.setAttributeValue(
        change.target,
        change.attributeName,
        value,
    );
} else if (
    value === null ||
    value === undefined
) {
    change.target.removeAttribute(
        change.attributeName,
    );
} else {
    change.target.setAttribute(
        change.attributeName,
        value,
    );
}
            });

            const buttonEngine =
    this.getButtonContrastEngine();

if (
    buttonEngine &&
    typeof buttonEngine
        .rebuildButtonStyles === "function"
) {
    buttonEngine.rebuildButtonStyles();
}

           
            if (mutation.zgSurfaceOldMarkerValue !== null) {
                mutation.target.setAttribute(
                    mutation.attributeName,
                    mutation.zgSurfaceOldMarkerValue
                );
            } else {
                mutation.target.removeAttribute(
                    mutation.attributeName
                );
            }
        });
    }

    if (doc.__zigrowSurfaceEditorIconBound) {
        this.updateButtonState();
        return;
    }

    doc.__zigrowSurfaceEditorIconBound = true;

    doc.body.addEventListener("mousemove", (event) => {
        this.handleSurfaceHover(event);
    }, true);

    doc.body.addEventListener("click", (event) => {
        this.handleSurfaceClick(event);
    }, true);

    doc.body.addEventListener("mouseleave", () => {
        this.handleIframeMouseLeave();
    }, true);

    if (this.win) {
       this.win.addEventListener("scroll", () => {
    if (this.isPopupOpen) {
        this.positionPopup();
    } else {
        this.positionButton();
    }
}, {
    passive: true,
});

        this.win.addEventListener("resize", () => {
            this.positionButton();
        }, {
            passive: true,
        });
    }
},

 handleSurfaceHover: function (event) {
    if (window.Vvveb?.Builder?.isPreview) {
        this.hoveredSurface = null;
        this.syncBuilderState();
        this.hideButton();
        return;
    }

    if (
    this.isMediaPicking ||
    this.isMediaReturning ||
    Date.now() < this.ignoreSurfaceCloseUntil
) {
    if (this.surfaceSwitchTimer) {
        clearTimeout(this.surfaceSwitchTimer);
        this.surfaceSwitchTimer = null;
    }

    return;
}

    const surface = this.getSurfaceFromTarget(event.target);

   
if (
    this.isPopupOpen &&
    surface &&
    surface !== this.selectedSurface
) {
   
    if (this.isMediaReturnHoverLocked) {
        if (this.surfaceSwitchTimer) {
            clearTimeout(this.surfaceSwitchTimer);
            this.surfaceSwitchTimer = null;
        }

        return;
    }

    if (this.isPopupHover) return;

    if (this.surfaceSwitchTimer) return;

    this.surfaceSwitchTimer = setTimeout(() => {
        this.surfaceSwitchTimer = null;

        if (this.isPopupHover) return;

        this.closePopup(true);

        this.selectedSurface = null;
        this.element = null;
        this.hoveredSurface = surface;

        this.syncBuilderState();
        this.updateButtonState();
    }, 140);

    return;
}

    if (this.surfaceSwitchTimer) {
        clearTimeout(this.surfaceSwitchTimer);
        this.surfaceSwitchTimer = null;
    }

    if (surface) {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }

        this.hoveredSurface = surface;
    } else if (
        !this.isButtonHover &&
        !this.isPopupOpen
    ) {
        this.hoveredSurface = null;
    }

    this.syncBuilderState();
    this.updateButtonState();
},

  handleSurfaceClick: function (event) {

    if (
    this.isMediaPicking ||
    this.isMediaReturning ||
    Date.now() < this.ignoreSurfaceCloseUntil
) {
    event.preventDefault();
    event.stopPropagation();
    return;
}

    const surface = this.getSurfaceFromTarget(event.target);

   
 if (this.isPopupOpen) {
    if (surface && surface !== this.selectedSurface) {
        event.preventDefault();
        event.stopPropagation();

        this.isMediaReturnHoverLocked = false;

        this.closePopup(true);

        this.selectedSurface = null;
        this.element = null;
        this.hoveredSurface = surface;

        this.syncBuilderState();
        this.updateButtonState();
        return;
    }

        if (!surface) {
            this.closePopup(true);

            this.selectedSurface = null;
            this.element = null;
            this.hoveredSurface = null;

            this.syncBuilderState();
            this.hideButton();
            return;
        }

       
        return;
    }

   
    if (surface) {
        this.hoveredSurface = surface;
        this.selectedSurface = null;
        this.element = null;
    } else {
        this.hoveredSurface = null;
        this.selectedSurface = null;
        this.element = null;
    }

    this.syncBuilderState();
    this.updateButtonState();
},

    handleIframeMouseLeave: function () {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
        }

        this.hideTimer = setTimeout(() => {
            if (this.isButtonHover || this.isPopupOpen) return;

            this.hoveredSurface = null;
            this.syncBuilderState();
            this.updateButtonState();
        }, 120);
    },

    syncBuilderState: function () {
        const builder = this.getBuilder();

        if (!builder) return;

        builder.hoveredSurface = this.hoveredSurface;
        builder.selectedSurface = this.selectedSurface;
    },

    getStyleTarget: function (surface) {
    if (!surface || surface.nodeType !== 1) return null;

    if (surface.classList.contains("clonable-card")) {
        const firstChild = surface.firstElementChild;

        if (firstChild && firstChild.nodeType === 1) {
            return firstChild;
        }
    }

    return surface;
},

 getActiveSurface: function () {
   
    if (
        this.isPopupOpen &&
        this.selectedSurface &&
        this.selectedSurface.isConnected &&
        this.isValidSurface(this.selectedSurface)
    ) {
        return this.selectedSurface;
    }

   
    if (
        this.hoveredSurface &&
        this.hoveredSurface.isConnected &&
        this.isValidSurface(this.hoveredSurface)
    ) {
        return this.hoveredSurface;
    }

    return null;
},

isBlockingEditorVisible: function () {
    const blockingSelectors = [
        "#ai-writer-menu",
        "#ai-prompt-panel",
        "#ai-quick-panel",
        "#section-editor",
        "#link-popup",
        ".vvv-link-modal",
        ".zg-custom-media-popup",
        "#new-media-modal",
        "#insert-modal",
        "#form-editor-modal",
        ".modal.show"
    ];

    return blockingSelectors.some((selector) => {
        const element = document.querySelector(selector);

        if (!element) return false;

        if (element.classList.contains("is-hidden")) {
            return false;
        }

        const style = window.getComputedStyle(element);

        if (
            style.display === "none" ||
            style.visibility === "hidden" ||
            style.opacity === "0"
        ) {
            return false;
        }

        return element.getClientRects().length > 0;
    });
},

scheduleSurfaceRefresh: function () {
    requestAnimationFrame(() => {
        this.updateButtonState();
    });

    setTimeout(() => {
        this.updateButtonState();
    }, 120);
},

shouldSuppressButton: function () {
    if (
        window.Vvveb?.Builder?.isPreview ||
        document
            .getElementById("vvveb-builder")
            ?.classList.contains("preview")
    ) {
        return true;
    }

    if (this.isBlockingEditorVisible()) {
        return true;
    }

    if (document.body.classList.contains("zg-exit-modal-open")) {
        return true;
    }

    return false;
}, 

    updateButtonState: function () {
        const surface = this.getActiveSurface();

        if (!surface || this.shouldSuppressButton()) {
            this.hideButton();
            return;
        }

        this.positionButton();
    },

hideButton: function () {
    if (!this.button) return;

    const tooltip =
        window.bootstrap?.Tooltip?.getInstance(this.button);

    if (tooltip) {
        tooltip.hide();
    }

    this.button.classList.remove("is-visible");
    this.button.style.top = "";
    this.button.style.left = "";
},

 positionButton: function () {
    const surface = this.getActiveSurface();

    if (
        this.shouldSuppressButton() ||
        this.isPopupOpen
    ) {
        this.hideButton();

        if (
            this.isPopupOpen &&
            !window.Vvveb?.Builder?.isPreview
        ) {
            this.positionPopup();
        }

        return;
    }

    if (
        !this.button ||
        !surface ||
        !surface.isConnected
    ) {
        this.hideButton();
        return;
    }

    const iframe = this.getIframeElement();

    if (!iframe) {
        this.hideButton();
        return;
    }

    const iframeRect =
        iframe.getBoundingClientRect();

    const surfaceRect =
        surface.getBoundingClientRect();

    if (
        !surfaceRect.width ||
        !surfaceRect.height
    ) {
        this.hideButton();
        return;
    }

    const topPanel =
        document.getElementById("top-panel");

    const bottomPanel =
        document.getElementById("bottom-panel");

    const topPanelRect =
        topPanel?.getBoundingClientRect();

    const bottomPanelRect =
        bottomPanel?.getBoundingClientRect();

    const topPanelVisible =
        topPanel &&
        window.getComputedStyle(topPanel).display !== "none";

    const bottomPanelVisible =
        bottomPanel &&
        window.getComputedStyle(bottomPanel).display !== "none";

   
    const canvasTop = Math.max(
        iframeRect.top,
        topPanelVisible
            ? topPanelRect.bottom
            : iframeRect.top
    );

    const canvasBottom = Math.min(
        iframeRect.bottom,
        bottomPanelVisible
            ? bottomPanelRect.top
            : iframeRect.bottom
    );

    const canvasLeft = Math.max(
        iframeRect.left,
        0
    );

    const canvasRight = Math.min(
        iframeRect.right,
        window.innerWidth
    );

    const surfaceTop =
        iframeRect.top +
        surfaceRect.top;

    const surfaceBottom =
        iframeRect.top +
        surfaceRect.bottom;

    if (
        surfaceBottom <= canvasTop ||
        surfaceTop >= canvasBottom
    ) {
        this.hideButton();
        return;
    }

    const size = 34;
    const gap = 8;

    const top =
        surfaceTop +
        gap;

    const left =
        iframeRect.left +
        surfaceRect.right -
        size -
        gap;

   
    if (
        top < canvasTop + gap ||
        top + size > canvasBottom - gap ||
        left < canvasLeft + gap ||
        left + size > canvasRight - gap
    ) {
        this.hideButton();
        return;
    }

    this.button.style.top =
        `${Math.round(top)}px`;

    this.button.style.left =
        `${Math.round(left)}px`;

this.button.setAttribute(
    "aria-label",
    "Edit card"
);

    this.button.classList.add("is-visible");
},

  open: function (surface) {

    if (window.Vvveb?.Builder?.isPreview) return;
    if (!surface || !surface.isConnected || !this.popup) return;

    const target = this.getStyleTarget(surface);

    if (!target) return;

    this.selectedSurface = surface;
    this.element = surface;
    this.originalStyle = target.getAttribute("style") || "";
    this.isPopupOpen = true;
    this.isMediaReturnHoverLocked = false;
    this.contrastRequestId += 1;

    this.captureOriginalTextStyles(
    surface,
    target,
);

this.captureOriginalButtonStyles(
    surface,
    target,
);

    this.syncBuilderState();
    this.updatePopupTitle(surface);
    this.syncControlsFromSurface(surface);
 this.setActiveTab(this.activeTab || "color");
this.positionButton();

this.popup.classList.add("is-visible");

const popupBody =
    this.popup.querySelector(".zg-surface-popup-body") ||
    this.popup.querySelector(".zg-surface-body") ||
    this.popup;

popupBody.scrollTop = 0;

this.popup
    .querySelectorAll("[data-zg-surface-panel]")
    .forEach((panel) => {
        panel.scrollTop = 0;
    });

this.positionPopup();
},

    updatePopupTitle: function (surface) {
        if (!this.popup || !surface) return;

        const label = this.getSurfaceLabel(surface);
        const title = this.popup.querySelector(".zg-surface-popup-title");
        const subtitle = this.popup.querySelector(".zg-surface-popup-subtitle");

        if (title) {
            title.textContent = label || "Card Style";
        }

        if (subtitle) {
            subtitle.textContent = surface.getAttribute("data-zg-surface-label")
                ? "Custom editable surface"
                : "Edit this card background";
        }

        this.popup.setAttribute("aria-label", label || "Card style editor");
    },

    setActiveTab: function (tabName) {
        if (!this.popup) return;

        const safeTab = ["color", "gradient", "image"].includes(tabName)
            ? tabName
            : "color";

        this.activeTab = safeTab;

        this.popup.querySelectorAll("[data-zg-surface-tab]").forEach((tab) => {
            tab.classList.toggle(
                "active",
                tab.getAttribute("data-zg-surface-tab") === safeTab
            );
        });

        this.popup.querySelectorAll("[data-zg-surface-panel]").forEach((panel) => {
            panel.classList.toggle(
                "active",
                panel.getAttribute("data-zg-surface-panel") === safeTab
            );
        });

        const popupBody =
    this.popup.querySelector(".zg-surface-popup-body") ||
    this.popup.querySelector(".zg-surface-body") ||
    this.popup;

popupBody.scrollTop = 0;

this.popup
    .querySelectorAll("[data-zg-surface-panel]")
    .forEach((panel) => {
        panel.scrollTop = 0;
    });
    },

  closePopup: function (shouldRevert) {
   
    this.contrastRequestId += 1;

    if (shouldRevert) {
        this.restoreOriginalStyle();
        this.restoreOriginalTextStyles();
        this.restoreOriginalButtonStyles();
    }

    this.isPopupOpen = false;

    this.isPopupHover = false;
    this.isMediaPicking = false;
this.isMediaReturning = false;
this.ignoreSurfaceCloseUntil = 0;

this.isMediaReturnHoverLocked = false;


this.isColorPickerActive = false;

if (this.colorPickerTimer) {
    clearTimeout(this.colorPickerTimer);
    this.colorPickerTimer = null;
}

if (this.mediaReturnTimer) {
    clearTimeout(this.mediaReturnTimer);
    this.mediaReturnTimer = null;
}

if (this.mediaCloseWatchTimer) {
    clearInterval(this.mediaCloseWatchTimer);
    this.mediaCloseWatchTimer = null;
}

this.mediaAppliedFromPicker = false;
this.mediaModalWasVisible = false;

if (this.surfaceSwitchTimer) {
    clearTimeout(this.surfaceSwitchTimer);
    this.surfaceSwitchTimer = null;
}

    if (this.popup) {
        this.popup.classList.remove("is-visible");
        this.popup.style.top = "";
        this.popup.style.left = "";
        this.popup.style.visibility = "";
    }

    this.updateButtonState();
},

positionPopup: function () {

    if (!this.popup || !this.isPopupOpen) {
        return;
    }


    if (
        this.isMediaPicking ||
        (
            this.isMediaReturning &&
            !this.popup.classList.contains("is-visible")
        )
    ) {
        this.popup.style.visibility = "hidden";
        return;
    }


    if (
        window.Vvveb?.Builder?.isPreview ||
        document
            .getElementById("vvveb-builder")
            ?.classList.contains("preview")
    ) {
        this.closePopup(true);
        return;
    }


    const surface =
        this.getActiveSurface();


    if (
        !surface ||
        !surface.isConnected
    ) {
        this.closePopup(true);
        return;
    }


    const iframe =
        this.getIframeElement();


    if (!iframe) {
        this.closePopup(true);
        return;
    }


    const iframeRect =
        iframe.getBoundingClientRect();


    const surfaceRect =
        surface.getBoundingClientRect();


    const topPanel =
        document.getElementById(
            "top-panel"
        );


    const bottomPanel =
        document.getElementById(
            "bottom-panel"
        );


    const topPanelVisible =
        topPanel &&
        window
            .getComputedStyle(topPanel)
            .display !== "none";


    const bottomPanelVisible =
        bottomPanel &&
        window
            .getComputedStyle(bottomPanel)
            .display !== "none";


    const topPanelRect =
        topPanel?.getBoundingClientRect();


    const bottomPanelRect =
        bottomPanel?.getBoundingClientRect();


    const canvasTop =
        Math.max(
            iframeRect.top,

            topPanelVisible
                ? topPanelRect.bottom
                : iframeRect.top
        );


    const canvasBottom =
        Math.min(
            iframeRect.bottom,

            bottomPanelVisible
                ? bottomPanelRect.top
                : iframeRect.bottom
        );


    const canvasLeft =
        Math.max(
            iframeRect.left,
            0
        );


    const canvasRight =
        Math.min(
            iframeRect.right,
            window.innerWidth
        );


    const surfaceTop =
        iframeRect.top +
        surfaceRect.top;


    const surfaceBottom =
        iframeRect.top +
        surfaceRect.bottom;


    const surfaceLeft =
        iframeRect.left +
        surfaceRect.left;


    const surfaceRight =
        iframeRect.left +
        surfaceRect.right;


    const popupWidth =
        this.popup.offsetWidth || 330;


    const popupHeight =
        this.popup.offsetHeight || 360;


    const cardGap = 18;

    const canvasGap = 12;


   
    if (
        surfaceBottom <= canvasTop ||
        surfaceTop >= canvasBottom
    ) {
        this.popup.style.visibility =
            "hidden";

        return;
    }


   
    let left =
        surfaceRight +
        cardGap;


   
    if (
        left + popupWidth >
        canvasRight - canvasGap
    ) {
        left =
            surfaceLeft -
            popupWidth -
            cardGap;
    }


   
    left =
        Math.max(
            canvasLeft + canvasGap,

            Math.min(
                left,

                canvasRight -
                popupWidth -
                canvasGap
            )
        );


    let top =
        surfaceTop +
        8;


   
    if (
        top + popupHeight >
        canvasBottom - canvasGap
    ) {
        top =
            canvasBottom -
            popupHeight -
            canvasGap;
    }


   
    if (
        top <
        canvasTop + canvasGap
    ) {
        top =
            canvasTop +
            canvasGap;
    }


   
    if (
        top < canvasTop + canvasGap ||
        top + popupHeight >
            canvasBottom - canvasGap
    ) {
        this.popup.style.visibility =
            "hidden";

        return;
    }


    this.popup.style.visibility =
        "visible";


    this.popup.style.top =
        `${Math.round(top)}px`;


    this.popup.style.left =
        `${Math.round(left)}px`;

},


    handleInputChange: function (inputName, value) {
     if (inputName === "colorPicker") {
    this.setColorValue(value, {
        updateHex: true,
        updatePicker: false,
    });
    this.previewColor();
    return;
}

if (inputName === "colorHex") {
    this.setColorHexFromInput(value);
    return;
}

        if (inputName === "colorOpacity") {
            this.colorState.opacity = this.clampNumber(value, 0, 100);
            this.updateValueLabel("colorOpacity", `${this.colorState.opacity}%`);
            this.previewColor();
            return;
        }

    if (inputName === "gradientStartPicker") {
    this.setGradientStart(value, {
        updateHex: true,
        updatePicker: false,
    });
    this.previewGradient();
    return;
}

if (inputName === "gradientStartHex") {
    this.setGradientStartHexFromInput(value);
    return;
}

if (inputName === "gradientEndPicker") {
    this.setGradientEnd(value, {
        updateHex: true,
        updatePicker: false,
    });
    this.previewGradient();
    return;
}

if (inputName === "gradientEndHex") {
    this.setGradientEndHexFromInput(value);
    return;
}

        if (inputName === "gradientAngle") {
            this.gradientState.angle = this.clampNumber(value, 0, 360);
            this.updateValueLabel("gradientAngle", `${this.gradientState.angle}°`);
            this.previewGradient();
            return;
        }

        if (inputName === "gradientOpacity") {
            this.gradientState.opacity = this.clampNumber(value, 0, 100);
            this.updateValueLabel("gradientOpacity", `${this.gradientState.opacity}%`);
            this.previewGradient();
        }

        if (
    [
        "surfaceImagePosition",
        "surfaceOverlayColorPicker",
        "surfaceOverlayColorHex",
        "surfaceOverlayOpacity",
    ].includes(inputName) &&
    !this.imageState.url
) {
    return;
}

        if (inputName === "surfaceImagePosition") {
    this.imageState.position = value || "center center";
    this.previewImage();
    return;
}

if (inputName === "surfaceOverlayColorPicker") {
    this.setOverlayColor(value, {
        updateHex: true,
        updatePicker: false,
    });
    this.previewImage();
    return;
}

if (inputName === "surfaceOverlayColorHex") {
    this.setOverlayHexFromInput(value);
    return;
}

if (inputName === "surfaceOverlayOpacity") {
    this.imageState.overlayOpacity = this.clampNumber(value, 0, 100);
    this.updateValueLabel("surfaceOverlayOpacity", `${this.imageState.overlayOpacity}%`);
    this.previewImage();
}
    },

   setColorValue: function (value, options = {}) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    const updateHex = options.updateHex !== false;
    const updatePicker = options.updatePicker !== false;

    this.colorState.color = hex;

    if (updatePicker) {
        this.setInputValue("colorPicker", hex);
    }

    if (updateHex) {
        this.setInputValue("colorHex", hex);
    }

    this.markActiveColor(hex);
},

  setGradientStart: function (value, options = {}) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    const updateHex = options.updateHex !== false;
    const updatePicker = options.updatePicker !== false;

    this.gradientState.start = hex;

    if (updatePicker) {
        this.setInputValue("gradientStartPicker", hex);
    }

    if (updateHex) {
        this.setInputValue("gradientStartHex", hex);
    }
},

  setGradientEnd: function (value, options = {}) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    const updateHex = options.updateHex !== false;
    const updatePicker = options.updatePicker !== false;

    this.gradientState.end = hex;

    if (updatePicker) {
        this.setInputValue("gradientEndPicker", hex);
    }

    if (updateHex) {
        this.setInputValue("gradientEndHex", hex);
    }
},

    setGradientPreset: function (preset) {
        if (!preset) return;

        const start = preset.getAttribute("data-gradient-start");
        const end = preset.getAttribute("data-gradient-end");
        const angle = preset.getAttribute("data-gradient-angle");

        this.setGradientStart(start);
        this.setGradientEnd(end);

        this.gradientState.angle = this.clampNumber(angle || 135, 0, 360);

        this.setInputValue("gradientAngle", this.gradientState.angle);
        this.updateValueLabel("gradientAngle", `${this.gradientState.angle}°`);

        this.popup?.querySelectorAll(".zg-surface-gradient-preset").forEach((item) => {
            item.classList.toggle("active", item === preset);
        });
    },
previewColor: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!target) return;

    this.appliedMode = "color";

    this.clearSurfaceBackground(target);

   
    target.style.background = this.hexToRgba(
        this.colorState.color,
        this.colorState.opacity / 100
    );

    this.updateTextContrastForColor();
},

  previewGradient: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!target) return;

    this.appliedMode = "gradient";

    const start = this.hexToRgba(
        this.gradientState.start,
        this.gradientState.opacity / 100
    );

    const end = this.hexToRgba(
        this.gradientState.end,
        this.gradientState.opacity / 100
    );

    this.clearSurfaceBackground(target);

    target.style.background = `linear-gradient(${this.gradientState.angle}deg, ${start}, ${end})`;

    this.updateTextContrastForGradient();
},

previewReset: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!target) return;

   
    this.contrastRequestId += 1;

    this.appliedMode = "reset";

    this.clearSurfaceBackground(target);

    if (this.activeTab === "image") {
        this.resetImageState();
    }

   
    this.restoreOriginalTextStyles();
    this.restoreOriginalButtonStyles();

    this.smartTextColor = null;
},

applyChanges: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!surface || !target) return;

   
    const mutationAdded = this.addUndoMutation(
        surface,
        target
    );

    if (mutationAdded) {
        this.markBuilderDirty();
    }

    if (this.appliedMode === "color") {
        this.saveRecentColor(this.colorState.color);
    }

    this.originalStyle =
        target.getAttribute("style") || "";

    this.closePopup(false);
},

updateTextContrastForGradient: function () {
    const start =
        this.parseCssColor(
            this.gradientState.start,
        );

    const end =
        this.parseCssColor(
            this.gradientState.end,
        );

    if (!start || !end) return;

    start.a =
        this.gradientState.opacity / 100;

    end.a =
        this.gradientState.opacity / 100;

    const engine =
        this.getButtonContrastEngine();

    const surface = this.getActiveSurface();
    const target =
        this.getStyleTarget(surface);

    const parentBackground =
        engine && target
            ? engine.getParentBackground(
                  target,
              )
            : {
                  r: 255,
                  g: 255,
                  b: 255,
                  a: 1,
              };

    const samples = [];

    for (
        let index = 0;
        index <= 10;
        index++
    ) {
        const progress = index / 10;

        const color = {
            r:
                start.r +
                (end.r - start.r) *
                    progress,

            g:
                start.g +
                (end.g - start.g) *
                    progress,

            b:
                start.b +
                (end.b - start.b) *
                    progress,

            a:
                start.a +
                (end.a - start.a) *
                    progress,
        };

        samples.push(
            engine
                ? engine.compositeColor(
                      color,
                      parentBackground,
                  )
                : this.blendColors(
                      color,
                      parentBackground,
                  ),
        );
    }

    this.applySmartTextColor(
        this.chooseReadableTextColor(
            samples,
        ),
        samples,
    );

    this.applySmartButtonContrast(
        samples,
    );
},

updateTextContrastForImage: function () {
    const imageUrl = this.imageState.url;

   if (!imageUrl) {
    this.restoreOriginalTextStyles();
    this.restoreOriginalButtonStyles();
    return;
}

    const overlay =
        this.parseCssColor(
            this.imageState.overlayColor
        ) || {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        };

    overlay.a =
    this.imageState.overlayEnabled !== false
        ? this.imageState.overlayOpacity / 100
        : 0;

    const fallbackBackground =
        this.blendColors(overlay, {
            r: 128,
            g: 128,
            b: 128,
            a: 1,
        });

  const fallbackSamples = [
    fallbackBackground,
];

this.applySmartTextColor(
    this.chooseReadableTextColor(
        fallbackSamples,
    ),
    fallbackSamples,
);

this.applySmartButtonContrast(
    fallbackSamples,
);

    const requestId = ++this.contrastRequestId;

    this.getImageContrastSamples(
        imageUrl,
        overlay
    ).then((samples) => {
        if (
            requestId !== this.contrastRequestId ||
            !this.isPopupOpen ||
            !samples.length
        ) {
            return;
        }

       this.applySmartTextColor(
    this.chooseReadableTextColor(
        samples,
    ),
    samples,
);

this.applySmartButtonContrast(
    samples,
);
    });
},

getImageContrastSamples: function (
    imageUrl,
    overlay
) {
    return new Promise((resolve) => {
        const image = new Image();
        let completed = false;

        const finish = (samples) => {
            if (completed) return;

            completed = true;
            resolve(samples || []);
        };

        image.crossOrigin = "anonymous";

        image.onload = () => {
            try {
                const canvas =
                    document.createElement("canvas");

                canvas.width = 32;
                canvas.height = 32;

                const context =
                    canvas.getContext("2d", {
                        willReadFrequently: true,
                    });

                if (!context) {
                    finish([]);
                    return;
                }

                context.drawImage(
                    image,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                const data = context.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                ).data;

                const samples = [];

                for (
                    let index = 0;
                    index < data.length;
                    index += 16
                ) {
                    const imageColor = {
                        r: data[index],
                        g: data[index + 1],
                        b: data[index + 2],
                        a: data[index + 3] / 255,
                    };

                    const base = this.blendColors(
                        imageColor,
                        {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1,
                        }
                    );

                    samples.push(
                        this.blendColors(
                            overlay,
                            base
                        )
                    );
                }

                finish(samples);
            } catch (error) {
                finish([]);
            }
        };

        image.onerror = () => {
            finish([]);
        };

        image.src = imageUrl;

        setTimeout(() => {
            finish([]);
        }, 3000);
    });
},

  restoreOriginalStyle: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!target) return;

    if (this.originalStyle) {
        target.setAttribute("style", this.originalStyle);
    } else {
        target.removeAttribute("style");
    }
},
    clearSurfaceBackground: function (surface) {
        if (!surface || !surface.style) return;

    surface.style.removeProperty("background");
surface.style.removeProperty("background-color");
surface.style.removeProperty("background-image");
surface.style.removeProperty("background-size");
surface.style.removeProperty("background-position");
surface.style.removeProperty("background-repeat");
surface.style.removeProperty("background-blend-mode");

        surface.style.removeProperty("--zg-surface-bg-color");
        surface.style.removeProperty("--zg-surface-bg-image");
        surface.style.removeProperty("--zg-surface-bg-size");
        surface.style.removeProperty("--zg-surface-bg-position");
        surface.style.removeProperty("--zg-surface-overlay-color");
        surface.style.removeProperty("--zg-surface-overlay-opacity");
    },

   addUndoMutation: function (surface, target) {
    if (
        !surface ||
        !target ||
        !window.Vvveb ||
        !Vvveb.Undo ||
        typeof Vvveb.Undo.addMutation !== "function"
    ) {
        return false;
    }

    const changes = [];

    const oldTargetStyle = this.originalStyle || "";
    const newTargetStyle =
        target.getAttribute("style") || "";

    if (oldTargetStyle !== newTargetStyle) {
      changes.push({
    target: target,
    attributeName: "style",
    oldValue: oldTargetStyle,
    newValue: newTargetStyle,
});
    }

    this.originalTextStyles.forEach((item) => {
        if (!item.element || !item.element.isConnected) return;

       
        if (item.element === target) return;

     const newTextStyle =
    item.element.getAttribute(
        "style",
    ) || "";

if (
    item.oldStyle ===
    newTextStyle
) {
    return;
}


const vvvebId =
    item.isIcon
        ? ensureVvvebId(
              item.element,
          )
        : null;

changes.push({
    target: item.element,

    attributeName:
        "style",

    oldValue:
        item.oldStyle,

    newValue:
        newTextStyle,

    vvvebId:
        vvvebId,

    isIcon:
        item.isIcon === true,
});
    });

    this.originalButtonStyles.forEach(
    (snapshot) => {
        const element = snapshot.target;

        if (
            !element ||
            !element.isConnected
        ) {
            return;
        }

        const newStyle =
            element.getAttribute("style");

        if (
            (snapshot.oldStyle || "") !==
            (newStyle || "")
        ) {
            changes.push({
                target: element,
                attributeName: "style",
                oldValue:
                    snapshot.oldStyle,
                newValue: newStyle,
            });
        }

        Object.keys(
            snapshot.oldAttributes || {},
        ).forEach(
            (attributeName) => {
                const oldValue =
                    snapshot.oldAttributes[
                        attributeName
                    ];

                const newValue =
                    element.getAttribute(
                        attributeName,
                    );

                if (
                    oldValue === newValue
                ) {
                    return;
                }

                changes.push({
                    target: element,
                    attributeName:
                        attributeName,
                    oldValue: oldValue,
                    newValue: newValue,
                });
            },
        );
    },
);

    if (!changes.length) {
        return false;
    }

    const markerAttribute =
        "data-vvveb-surface-history";

    const oldMarkerValue =
        surface.getAttribute(markerAttribute);

    const newMarkerValue =
        `surface-${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 8)}`;

    let mutationAdded = false;

    try {
       
        surface.setAttribute(
            markerAttribute,
            newMarkerValue
        );

        Vvveb.Undo.addMutation({
            type: "attributes",
            target: surface,
            attributeName: markerAttribute,
            oldValue: oldMarkerValue,
            newValue: newMarkerValue,

           
            zgSurfaceStyleChanges: changes,
            zgSurfaceOldMarkerValue: oldMarkerValue,
        });

        mutationAdded = true;
    } catch (error) {
        console.warn(
            "[SurfaceStyleEditor] Undo mutation failed",
            error
        );
    } finally {
       
        if (oldMarkerValue !== null) {
            surface.setAttribute(
                markerAttribute,
                oldMarkerValue
            );
        } else {
            surface.removeAttribute(
                markerAttribute
            );
        }
    }

    return mutationAdded;
},

  markBuilderDirty: function () {
    const builder = this.getBuilder();

    if (!builder) return;

    if (typeof builder.setDirty === "function") {
        builder.setDirty(true);
    } else {
        builder.dirty = true;
    }
},

   extractImageOverlay: function (backgroundImage) {
    if (
        !backgroundImage ||
        !backgroundImage.includes("linear-gradient")
    ) {
        return null;
    }

    const rgbaMatch = backgroundImage.match(
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/
    );

    if (!rgbaMatch) return null;

    const r = Number(rgbaMatch[1]);
    const g = Number(rgbaMatch[2]);
    const b = Number(rgbaMatch[3]);
    const alpha =
        rgbaMatch[4] !== undefined
            ? Number(rgbaMatch[4])
            : 1;

    const toHex = (number) => {
        return Math.max(0, Math.min(255, number))
            .toString(16)
            .padStart(2, "0");
    };

    return {
        color: `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase(),
        opacity: Math.round(
            Math.max(0, Math.min(1, alpha)) * 100
        ),
    };
}, 

syncControlsFromSurface: function (surface) {
    if (!surface) return;

    const target = this.getStyleTarget(surface) || surface;

    
    
    this.resetImageState();

    const computed = this.getSurfaceComputedStyle(target);
    const backgroundImage = computed?.backgroundImage || "";
    const imageUrl = this.extractBackgroundImageUrl(backgroundImage);

    if (imageUrl) {
        this.activeTab = "image";
        this.imageState.url = imageUrl;
      const currentPosition = (
    computed.backgroundPosition ||
    "center center"
).toLowerCase().trim();

const positionValues = {
    "50% 50%": "center center",
    "0% 50%": "left center",
    "100% 50%": "right center",

    "50% 0%": "center top",
    "0% 0%": "left top",
    "100% 0%": "right top",

    "50% 100%": "center bottom",
    "0% 100%": "left bottom",
    "100% 100%": "right bottom",
};

const allowedPositions = [
    "center center",
    "left center",
    "right center",
    "center top",
    "left top",
    "right top",
    "center bottom",
    "left bottom",
    "right bottom",
];

this.imageState.position =
    positionValues[currentPosition] ||
    (
        allowedPositions.includes(currentPosition)
            ? currentPosition
            : "center center"
    );
        this.imageState.size = "cover";

     const overlay =
    this.extractImageOverlay(backgroundImage);

if (overlay) {
    this.imageState.overlayEnabled = true;
    this.imageState.overlayColor = overlay.color;
    this.imageState.overlayOpacity = overlay.opacity;
} else {
    this.imageState.overlayEnabled = false;
}
    } else if (
        backgroundImage &&
        backgroundImage.includes("linear-gradient")
    ) {
        this.activeTab = "gradient";
    } else {
        this.activeTab = "color";
    }

    const currentColor = this.rgbToHex(computed?.backgroundColor);

    if (currentColor) {
        this.setColorValue(currentColor);
    }

    this.setInputValue("colorOpacity", this.colorState.opacity);
    this.updateValueLabel(
        "colorOpacity",
        `${this.colorState.opacity}%`
    );

    this.setGradientStart(this.gradientState.start);
    this.setGradientEnd(this.gradientState.end);

    this.setInputValue(
        "gradientAngle",
        this.gradientState.angle
    );

    this.setInputValue(
        "gradientOpacity",
        this.gradientState.opacity
    );

    this.updateValueLabel(
        "gradientAngle",
        `${this.gradientState.angle}°`
    );

    this.updateValueLabel(
        "gradientOpacity",
        `${this.gradientState.opacity}%`
    );

    this.setInputValue(
        "surfaceImagePosition",
        this.imageState.position
    );

    this.setInputValue(
        "surfaceOverlayColorPicker",
        this.imageState.overlayColor
    );

    this.setInputValue(
        "surfaceOverlayColorHex",
        this.imageState.overlayColor
    );

    this.setInputValue(
        "surfaceOverlayOpacity",
        this.imageState.overlayOpacity
    );

    this.updateValueLabel(
        "surfaceOverlayOpacity",
        `${this.imageState.overlayOpacity}%`
    );

    this.syncSurfaceOverlayUI();

    this.updateImagePreview();
    this.renderThemeColors();
    this.renderRecentColors();
},

    getSurfaceComputedStyle: function (surface) {
        if (!surface) return null;

        const view = surface.ownerDocument?.defaultView || window;

        return view.getComputedStyle(surface);
    },

    renderThemeColors: function () {
        const container = this.popup?.querySelector("[data-zg-surface-theme-colors]");

        if (!container) return;

        const colors = this.getThemeColors();

        container.innerHTML = "";

        colors.forEach((color) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "zg-surface-color-swatch";
            button.setAttribute("data-zg-color", color);
            button.setAttribute("aria-label", color);
            button.style.setProperty("--zg-swatch-color", color);

            container.appendChild(button);
        });

        this.markActiveColor(this.colorState.color);
    },

    renderRecentColors: function () {
        const container = this.popup?.querySelector("[data-zg-surface-recent-colors]");

        if (!container) return;

        const colors = this.getRecentColors();

        container.innerHTML = "";

        colors.forEach((color) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "zg-surface-color-swatch";
            button.setAttribute("data-zg-color", color);
            button.setAttribute("aria-label", color);
            button.style.setProperty("--zg-swatch-color", color);

            container.appendChild(button);
        });
    },

getThemeColors: function () {
    const colors = [];

    const addColor = (value) => {
        const hex = this.normalizeHex(value);

        if (hex && !colors.includes(hex)) {
            colors.push(hex);
        }
    };

    const readCssVar = (doc, varNames) => {
        if (!doc || !doc.defaultView || !doc.documentElement) return null;

        const rootStyles = doc.defaultView.getComputedStyle(doc.documentElement);
        const bodyStyles = doc.body
            ? doc.defaultView.getComputedStyle(doc.body)
            : null;

        for (const varName of varNames) {
            const rootValue = (rootStyles.getPropertyValue(varName) || "").trim();
            const bodyValue = bodyStyles
                ? (bodyStyles.getPropertyValue(varName) || "").trim()
                : "";

            const rootHex = this.normalizeHex(rootValue);
            const bodyHex = this.normalizeHex(bodyValue);

            if (rootHex) return rootHex;
            if (bodyHex) return bodyHex;
        }

        return null;
    };

    const frameDoc = this.getFrameDocument();

    const primaryColor = readCssVar(frameDoc, [
        "--primary-colors",
        "--zigrow-primary-color",
        "--zigrow-primary-500",
    ]);

    const secondaryColor = readCssVar(frameDoc, [
        "--secondary-colors",
        "--zigrow-secondary-color",
        "--zigrow-subheading-color",
    ]);

    const tertiaryColor = readCssVar(frameDoc, [
        "--tertiary-colors",
        "--territory-colors",
        "--zigrow-tertiary-color",
        "--zigrow-heading-color",
    ]);

    addColor(primaryColor);
    addColor(secondaryColor);
    addColor(tertiaryColor);

    const savedVars = window.__zigrowGlobalStyles?.colors?.vars;

    if (savedVars && typeof savedVars === "object") {
        addColor(savedVars["--primary-colors"]);
        addColor(savedVars["--secondary-colors"]);
        addColor(savedVars["--tertiary-colors"]);
        addColor(savedVars["--territory-colors"]);
    }

    if (!colors.length) {
        this.defaultThemeColors.forEach(addColor);
    }

    return colors.slice(0, 3);
},

    getRecentColors: function () {
        try {
            const saved = localStorage.getItem(this.recentColorsKey);
            const colors = saved ? JSON.parse(saved) : [];

            if (Array.isArray(colors) && colors.length) {
                return colors;
            }
        } catch (err) { }

        return ["#93C5FD", "#334155", "#FDBA74", "#FB7185", "#8B5CF6", "#FFFFFF"];
    },

    saveRecentColor: function (color) {
        const hex = this.normalizeHex(color);

        if (!hex) return;

        let colors = this.getRecentColors().filter((item) => item !== hex);

        colors.unshift(hex);
        colors = colors.slice(0, 8);

        localStorage.setItem(this.recentColorsKey, JSON.stringify(colors));

        this.renderRecentColors();
    },

    setInputValue: function (inputName, value) {
        const input = this.popup?.querySelector(`[data-zg-surface-input="${inputName}"]`);

        if (input) {
            input.value = value;
        }
    },

    updateValueLabel: function (name, value) {
        const label = this.popup?.querySelector(`[data-zg-surface-value="${name}"]`);

        if (label) {
            label.textContent = value;
        }
    },

    markActiveColor: function (hex) {
        const color = this.normalizeHex(hex);

        if (!this.popup || !color) return;

        this.popup.querySelectorAll(".zg-surface-color-swatch").forEach((button) => {
            button.classList.toggle(
                "active",
                this.normalizeHex(button.getAttribute("data-zg-color")) === color
            );
        });
    },


    setColorHexFromInput: function (value) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    this.colorState.color = hex;
    this.setInputValue("colorPicker", hex);
    this.markActiveColor(hex);
    this.previewColor();
},

setGradientStartHexFromInput: function (value) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    this.gradientState.start = hex;
    this.setInputValue("gradientStartPicker", hex);
    this.previewGradient();
},

setGradientEndHexFromInput: function (value) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    this.gradientState.end = hex;
    this.setInputValue("gradientEndPicker", hex);
    this.previewGradient();
},

setOverlayHexFromInput: function (value) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    this.imageState.overlayColor = hex;
    this.setInputValue("surfaceOverlayColorPicker", hex);
    this.previewImage();
},


    normalizeHex: function (value) {
        if (!value || typeof value !== "string") return null;

        let color = value.trim();

        if (color.startsWith("rgb")) {
            return this.rgbToHex(color);
        }

        if (!color.startsWith("#")) {
            color = `#${color}`;
        }

        if (/^#[0-9a-fA-F]{3}$/.test(color)) {
            color = color
                .split("")
                .map((char, index) => index === 0 ? "#" : char + char)
                .join("");
        }

        if (!/^#[0-9a-fA-F]{6}$/.test(color)) return null;

        return color.toUpperCase();
    },

    rgbToHex: function (value) {
        if (!value || typeof value !== "string") return null;

        const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);

        if (!match) return null;

        const toHex = (num) => {
            return Math.max(0, Math.min(255, Number(num)))
                .toString(16)
                .padStart(2, "0");
        };

        return `#${toHex(match[1])}${toHex(match[2])}${toHex(match[3])}`.toUpperCase();
    },

    hexToRgba: function (hex, alpha) {
        const color = this.normalizeHex(hex) || "#5B3DF2";

        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        const a = Math.max(0, Math.min(1, Number(alpha)));

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    },

    clampNumber: function (value, min, max) {
        const number = Number(value);

        if (Number.isNaN(number)) return min;

        return Math.max(min, Math.min(max, Math.round(number)));
    },

chooseImageFromMedia: function () {
    const surface = this.getActiveSurface();

    if (!surface) return;

    try {
        if (!window.Vvveb?.NewMediaModal) {
            this.updateImagePreviewMessage(
                "Media gallery not available"
            );
            return;
        }

       
        this.selectedSurface = surface;
        this.element = surface;
        this.isPopupOpen = true;
        this.isMediaPicking = true;
        this.isMediaReturning = false;
        this.ignoreSurfaceCloseUntil = Date.now() + 1000;

        if (this.surfaceSwitchTimer) {
            clearTimeout(this.surfaceSwitchTimer);
            this.surfaceSwitchTimer = null;
        }

       
        if (this.popup) {
            this.popup.classList.remove("is-visible");
            this.popup.style.visibility = "hidden";
        }

        window.Vvveb.NewMediaModal.open(surface, {
            mode: "background-image",
            type: "image",
            source: "upload",
            title: "Choose background image",
            subtitle:
                "Choose an image to use as this card background.",

           onApply: (media) => {
    const imgUrl =
        media && (media.url || media.src);

        this.mediaAppliedFromPicker = true;

if (this.mediaCloseWatchTimer) {
    clearInterval(this.mediaCloseWatchTimer);
    this.mediaCloseWatchTimer = null;
}

    this.isMediaPicking = false;
    this.isMediaReturning = true;
    this.ignoreSurfaceCloseUntil = Date.now() + 1800;

    if (this.mediaReturnTimer) {
        clearTimeout(this.mediaReturnTimer);
        this.mediaReturnTimer = null;
    }

    if (!imgUrl) {
        this.mediaReturnTimer = setTimeout(() => {
            this.isMediaReturning = false;
            this.ignoreSurfaceCloseUntil = 0;
            this.mediaReturnTimer = null;
        }, 700);

        return;
    }

   
    this.selectedSurface = surface;
    this.element = surface;
    this.hoveredSurface = surface;
    this.isPopupOpen = true;

    this.setImageUrl(imgUrl);
    this.setActiveTab("image");
    this.previewImage();

   
    this.mediaReturnTimer = setTimeout(() => {
        this.mediaReturnTimer = null;

        if (!this.popup) return;

        if (
            !surface ||
            !surface.isConnected ||
            !this.isValidSurface(surface)
        ) {
            this.closePopup(true);
            return;
        }

        this.selectedSurface = surface;
        this.element = surface;
        this.hoveredSurface = surface;
        this.isPopupOpen = true;

        this.popup.classList.add("is-visible");
        this.popup.style.visibility = "visible";

        this.positionPopup();

       
this.isMediaReturnHoverLocked = true;

       
        this.ignoreSurfaceCloseUntil = Date.now() + 700;

        setTimeout(() => {
            this.isMediaReturning = false;
            this.ignoreSurfaceCloseUntil = 0;
        }, 700);
    }, 420);
},
        });

        this.startMediaDismissWatcher(surface);
    } catch (error) {
        this.isMediaPicking = false;
        this.isMediaReturning = false;

        console.warn(
            "[SurfaceStyleEditor] Media gallery not available",
            error
        );

        this.updateImagePreviewMessage(
            "Media gallery not available"
        );
    }
},

setImageUrl: function (url) {
    if (!url || typeof url !== "string") return;

    this.imageState.url = url;
    this.updateImagePreview();
},

toggleSurfaceOverlay: function () {
    if (!this.imageState.url) return;

    this.imageState.overlayEnabled =
        !this.imageState.overlayEnabled;

    this.syncSurfaceOverlayUI();
    this.previewImage();
},

syncSurfaceOverlayUI: function () {
    if (!this.popup) return;

    const enabled =
        this.imageState.overlayEnabled !== false;

    const actionButton = this.popup.querySelector(
        '[data-zg-surface-action="toggleSurfaceOverlay"]'
    );

    const actionText = this.popup.querySelector(
        "[data-zg-surface-overlay-action-text]"
    );

    const actionIcon = this.popup.querySelector(
        "[data-zg-surface-overlay-action-icon]"
    );

    const colorGroup = this.popup.querySelector(
        "[data-zg-surface-overlay-color-group]"
    );

    const opacityGroup = this.popup.querySelector(
        "[data-zg-surface-overlay-opacity-group]"
    );

    const colorPicker = this.popup.querySelector(
        '[data-zg-surface-input="surfaceOverlayColorPicker"]'
    );

    const colorHex = this.popup.querySelector(
        '[data-zg-surface-input="surfaceOverlayColorHex"]'
    );

    const opacityInput = this.popup.querySelector(
        '[data-zg-surface-input="surfaceOverlayOpacity"]'
    );

    if (actionButton) {
        actionButton.classList.toggle(
            "is-add-overlay",
            !enabled
        );

        actionButton.setAttribute(
            "aria-label",
            enabled
                ? "Remove overlay"
                : "Add overlay"
        );

        actionButton.setAttribute(
            "title",
            enabled
                ? "Remove overlay"
                : "Add overlay"
        );
    }

    if (actionText) {
        actionText.textContent =
            enabled
                ? "Remove overlay"
                : "Add overlay";
    }

    if (actionIcon) {
        actionIcon.className = enabled
            ? "fa-regular fa-trash-can"
            : "fa-solid fa-plus";
    }

    if (colorGroup) {
        colorGroup.classList.toggle(
            "is-overlay-disabled",
            !enabled
        );
    }

    if (opacityGroup) {
        opacityGroup.classList.toggle(
            "is-overlay-disabled",
            !enabled
        );
    }

    if (colorPicker) {
        colorPicker.disabled = !enabled;
    }

    if (colorHex) {
        colorHex.disabled = !enabled;
    }

    if (opacityInput) {
        opacityInput.disabled = !enabled;
    }
},

setOverlayColor: function (value, options = {}) {
    const hex = this.normalizeHex(value);

    if (!hex) return;

    const updateHex = options.updateHex !== false;
    const updatePicker = options.updatePicker !== false;

    this.imageState.overlayColor = hex;

    if (updatePicker) {
        this.setInputValue("surfaceOverlayColorPicker", hex);
    }

    if (updateHex) {
        this.setInputValue("surfaceOverlayColorHex", hex);
    }
},
previewImage: function () {
    const surface = this.getActiveSurface();
    const target = this.getStyleTarget(surface);

    if (!target) return;

    this.appliedMode = "image";

    this.clearSurfaceBackground(target);

    if (!this.imageState.url) {
        this.updateImagePreview();
        return;
    }

   const overlayAlpha =
    this.imageState.overlayEnabled !== false
        ? this.imageState.overlayOpacity / 100
        : 0;
    const overlayColor = this.hexToRgba(this.imageState.overlayColor, overlayAlpha);
    const imageLayer = `url(${this.cssUrl(this.imageState.url)})`;

    if (overlayAlpha > 0) {
        target.style.backgroundImage = `linear-gradient(${overlayColor}, ${overlayColor}), ${imageLayer}`;
    } else {
        target.style.backgroundImage = imageLayer;
    }

    target.style.backgroundSize = "cover";
    target.style.backgroundPosition = this.imageState.position || "center center";
    target.style.backgroundRepeat = "no-repeat";

    this.updateImagePreview();

    this.updateTextContrastForImage();
},

updateImagePreview: function () {
    const preview = this.popup?.querySelector("[data-zg-surface-image-preview]");

    const hasImage =
        !!this.imageState.url;

    [
        "surfaceImagePosition",
        "surfaceOverlayColorPicker",
        "surfaceOverlayColorHex",
        "surfaceOverlayOpacity",
    ].forEach((inputName) => {
        const input = this.popup?.querySelector(
            `[data-zg-surface-input="${inputName}"]`
        );

        if (!input) return;

        input.disabled = !hasImage;

        const field =
            input.closest(".zg-surface-field") ||
            input.closest(".zg-surface-control") ||
            input.closest(".zg-surface-form-row");

        if (field) {
            field.classList.toggle(
                "is-disabled",
                !hasImage
            );
        }
    });

    if (!preview) return;

    if (!hasImage) {
        preview.classList.remove("has-image");
        preview.style.backgroundImage = "";
        preview.style.backgroundPosition = "center center";
        preview.style.backgroundSize = "cover";
        preview.innerHTML = "<span>No image selected</span>";
        return;
    }

    preview.classList.add("has-image");
    preview.style.backgroundImage = `url(${this.cssUrl(this.imageState.url)})`;
    preview.style.backgroundPosition = this.imageState.position || "center center";
    preview.style.backgroundSize = "cover";
    preview.innerHTML = "<span></span>";
},

updateImagePreviewMessage: function (message) {
    const preview = this.popup?.querySelector("[data-zg-surface-image-preview]");

    if (!preview) return;

    preview.classList.remove("has-image");
    preview.style.backgroundImage = "";
    preview.innerHTML = `<span>${message || "No image selected"}</span>`;
},

resetImageState: function () {
    this.imageState.url = "";
    this.imageState.position = "center center";
    this.imageState.size = "cover";
    this.imageState.overlayColor = "#000000";
    this.imageState.overlayOpacity = 40;
    this.imageState.overlayEnabled = true;

    this.setInputValue("surfaceImagePosition", "center center");
    this.setInputValue("surfaceOverlayColorPicker", "#000000");
    this.setInputValue("surfaceOverlayColorHex", "#000000");
    this.setInputValue("surfaceOverlayOpacity", 40);

    this.updateValueLabel("surfaceOverlayOpacity", "40%");
    this.syncSurfaceOverlayUI();
    this.updateImagePreview();
},
extractBackgroundImageUrl: function (backgroundImage) {
    if (!backgroundImage || backgroundImage === "none") return "";

    const match = backgroundImage.match(/url\((['"]?)(.*?)\1\)/i);

    return match && match[2] ? match[2] : "";
},

cssUrl: function (url) {
    const safeUrl = String(url || "")
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"');

    return `"${safeUrl}"`;
},

parseCssColor: function (value) {
    if (!value || typeof value !== "string") {
        return null;
    }

    const hex = this.normalizeHex(value);

    if (hex) {
        return {
            r: parseInt(hex.slice(1, 3), 16),
            g: parseInt(hex.slice(3, 5), 16),
            b: parseInt(hex.slice(5, 7), 16),
            a: 1,
        };
    }

    const match = value.match(
        /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/
    );

    if (!match) return null;

    return {
        r: Number(match[1]),
        g: Number(match[2]),
        b: Number(match[3]),
        a:
            match[4] !== undefined
                ? Number(match[4])
                : 1,
    };
},

blendColors: function (foreground, background) {
    const alpha = Math.max(
        0,
        Math.min(1, foreground.a ?? 1)
    );

    return {
        r:
            foreground.r * alpha +
            background.r * (1 - alpha),
        g:
            foreground.g * alpha +
            background.g * (1 - alpha),
        b:
            foreground.b * alpha +
            background.b * (1 - alpha),
        a: 1,
    };
},

relativeLuminance: function (color) {
    const channel = (value) => {
        const normalized = value / 255;

        return normalized <= 0.03928
            ? normalized / 12.92
            : Math.pow(
                (normalized + 0.055) / 1.055,
                2.4
            );
    };

    return (
        0.2126 * channel(color.r) +
        0.7152 * channel(color.g) +
        0.0722 * channel(color.b)
    );
},

contrastRatio: function (foreground, background) {
    const foregroundLum =
        this.relativeLuminance(foreground);

    const backgroundLum =
        this.relativeLuminance(background);

    const lighter = Math.max(
        foregroundLum,
        backgroundLum
    );

    const darker = Math.min(
        foregroundLum,
        backgroundLum
    );

    return (lighter + 0.05) / (darker + 0.05);
},

chooseReadableTextColor: function (samples) {
    if (!samples || !samples.length) {
        return "#FFFFFF";
    }

    const white = {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
    };

    const dark = {
        r: 17,
        g: 24,
        b: 39,
        a: 1,
    };

    const getScore = (candidate) => {
        const ratios = samples
            .map((sample) => {
                return this.contrastRatio(
                    candidate,
                    sample
                );
            })
            .sort((a, b) => a - b);

        const index = Math.min(
            ratios.length - 1,
            Math.floor(ratios.length * 0.15)
        );

        return ratios[index];
    };

    return getScore(white) >= getScore(dark)
        ? "#FFFFFF"
        : "#111827";
},

applySmartTextColor: function (
    color,
    samples,
) {
    if (!color) return;

    this.smartTextColor = color;

    const engine =
        this.getButtonContrastEngine();

    const surface =
        this.getActiveSurface();

    const target =
        this.getStyleTarget(
            surface,
        );

    this.originalTextStyles.forEach(
        (item) => {
            if (
                !item.element
                    ?.isConnected
            ) {
                return;
            }

           
            if (
                !item.isIcon ||
                !engine ||
                !target ||
                !Array.isArray(samples) ||
                !samples.length
            ) {
                item.element.style
                    .setProperty(
                        "color",
                        color,
                        "important",
                    );

                return;
            }

           

           
if (item.oldStyle) {
    item.element.setAttribute(
        "style",
        item.oldStyle,
    );
} else {
    item.element.removeAttribute(
        "style",
    );
}
            let iconSamples =
                engine
                    .getButtonSurfaceSamples(
                        item.element,
                        target,
                        samples,
                    );

            const win =
                item.element
                    .ownerDocument
                    ?.defaultView ||
                window;

            const computed =
                win.getComputedStyle(
                    item.element,
                );

            const ownBackground =
                engine.parseColor(
                    computed
                        .backgroundColor,
                );

            if (
                ownBackground &&
                ownBackground.a > 0.05
            ) {
                iconSamples =
                    iconSamples.map(
                        (baseColor) =>
                            engine
                                .compositeColor(
                                    ownBackground,
                                    baseColor,
                                ),
                    );
            }

            const originalColor =
                engine.parseColor(
                    item.originalColor,
                );

            const originalContrast =
                originalColor
                    ? engine
                          .getMinimumContrast(
                              originalColor,
                              iconSamples,
                          )
                    : 0;

           
            if (
                originalContrast >=
                engine
                    .contrastThreshold
            ) {
                return;
            }

            const iconColor =
                engine
                    .chooseReadableTextColor(
                        iconSamples,
                    );

            item.element.style
                .setProperty(
                    "color",
                    iconColor,
                    "important",
                );
        },
    );
},

captureOriginalTextStyles: function (surface, target) {
    if (!surface || !target) {
        this.originalTextStyles = [];
        return;
    }

    const elements = [];

    if (
        target.matches?.(this.textSelector) &&
        !target.closest("[data-vvveb-helpers]")
    ) {
        elements.push(target);
    }

    target.querySelectorAll(this.textSelector).forEach((element) => {
        const owningSurface = element.closest(this.selector);

        if (owningSurface && owningSurface !== surface) return;

       if (
    element.closest("[data-vvveb-helpers]") ||
    element.closest(".vvveb-add-btn") ||
    element.closest(".vvveb-add-link-btn")
) {
    return;
}


if (
    element.closest(
        [
            "[data-btn]",
            "a[data-link-style-id]",
            "a.btn",
            "button.btn",
        ].join(","),
    )
) {
    return;
}

if (!(element.textContent || "").trim()) return;

        elements.push(element);
    });

  const textSnapshots =
    Array.from(
        new Set(elements),
    ).map((element) => {
        return {
            element: element,

            oldStyle:
                element.getAttribute(
                    "style",
                ) || "",
        };
    });

const engine =
    this.getButtonContrastEngine();

const iconSnapshots = [];

target
    .querySelectorAll("i")
    .forEach((icon) => {
       
        const owningSurface =
            icon.closest(
                this.selector,
            );

        if (
            owningSurface &&
            owningSurface !== surface
        ) {
            return;
        }

        if (
            icon.closest(
                [
                    "[data-vvveb-helpers]",
                    ".vvveb-add-btn",
                    ".vvveb-add-link-btn",
                ].join(","),
            )
        ) {
            return;
        }

       
        const buttonSelector =
            engine?.buttonSelector ||
            [
                "[data-btn]",
                "a[data-link-style-id]",
                "a.btn",
                "button.btn",
            ].join(",");

        if (
            icon.closest(
                buttonSelector,
            )
        ) {
            return;
        }

        if (
            engine
                ?.buttonExcludedSelector &&
            icon.closest(
                engine
                    .buttonExcludedSelector,
            )
        ) {
            return;
        }

        const win =
            icon.ownerDocument
                ?.defaultView ||
            window;

        iconSnapshots.push({
            element: icon,

            oldStyle:
                icon.getAttribute(
                    "style",
                ) || "",

            originalColor:
                win.getComputedStyle(
                    icon,
                ).color,

            isIcon: true,
        });
    });

this.originalTextStyles =
    textSnapshots.concat(
        iconSnapshots,
    );
},

getButtonContrastEngine: function () {
    return typeof ZigrowSectionSmartContrast !== "undefined"
        ? ZigrowSectionSmartContrast
        : null;
},

captureOriginalButtonStyles: function (
    surface,
    target,
) {
    const engine =
        this.getButtonContrastEngine();

    if (!engine || !surface || !target) {
        this.originalButtonStyles = [];
        return;
    }

    const selector =
        engine.buttonSelector ||
        [
            "[data-btn]",
            "a[data-link-style-id]",
            "a.btn",
            "button.btn",
        ].join(",");

    const excludedSelector =
        engine.buttonExcludedSelector || "";

    const attributeNames =
        engine.buttonStyleAttributes || [
            "data-btn-bg",
            "data-btn-color",
            "data-btn-hover-bg",
            "data-btn-hover-color",
            "data-btn-border-color",
        ];

    const snapshots = [];

    target
        .querySelectorAll(selector)
        .forEach((button) => {
            if (
                excludedSelector &&
                button.matches(excludedSelector)
            ) {
                return;
            }

            if (
                button.closest(
                    "[data-vvveb-helpers]",
                )
            ) {
                return;
            }

           
            const owningSurface =
                button.closest(this.selector);

            if (
                owningSurface &&
                owningSurface !== surface
            ) {
                return;
            }

            const oldAttributes = {};

            attributeNames.forEach(
                (attributeName) => {
                    oldAttributes[attributeName] =
                        button.getAttribute(
                            attributeName,
                        );
                },
            );

            snapshots.push({
                target: button,
                oldStyle:
                    button.getAttribute("style"),
                oldAttributes: oldAttributes,
                isButton: true,
            });

           
            button
                .querySelectorAll(
                    "span, strong, em, small, i",
                )
                .forEach((child) => {
                    snapshots.push({
                        target: child,
                        oldStyle:
                            child.getAttribute(
                                "style",
                            ),
                        oldAttributes: {},
                        ownerButton: button,
                    });
                });
        });

    this.originalButtonStyles = snapshots;
},

restoreOriginalButtonStyles: function () {
    const engine =
        this.getButtonContrastEngine();

    if (!engine) return;

    engine.restoreButtons(
        this.originalButtonStyles,
    );
},

applySmartButtonContrast: function (
    samples,
) {
    const engine =
        this.getButtonContrastEngine();

    const surface = this.getActiveSurface();
    const target =
        this.getStyleTarget(surface);

    if (
        !engine ||
        !surface ||
        !target ||
        !Array.isArray(samples) ||
        !samples.length
    ) {
        return;
    }

    engine.applyButtons(
        target,
        this.originalButtonStyles,
        samples,
    );
},

restoreOriginalTextStyles: function () {
    this.contrastRequestId += 1;

    this.originalTextStyles.forEach((item) => {
        if (!item.element?.isConnected) return;

        if (item.oldStyle) {
            item.element.setAttribute(
                "style",
                item.oldStyle
            );
        } else {
            item.element.removeAttribute("style");
        }
    });

    this.smartTextColor = null;
},

updateTextContrastForColor: function () {
    const color =
        this.parseCssColor(
            this.colorState.color,
        );

    if (!color) return;

    color.a =
        this.colorState.opacity / 100;

    const engine =
        this.getButtonContrastEngine();

    const surface = this.getActiveSurface();
    const target =
        this.getStyleTarget(surface);

    const parentBackground =
        engine && target
            ? engine.getParentBackground(
                  target,
              )
            : {
                  r: 255,
                  g: 255,
                  b: 255,
                  a: 1,
              };

   
    const effective =
        engine
            ? engine.compositeColor(
                  color,
                  parentBackground,
              )
            : this.blendColors(
                  color,
                  parentBackground,
              );

    const samples = [effective];

    this.applySmartTextColor(
        this.chooseReadableTextColor(
            samples,
        ),
        samples,
    );

    this.applySmartButtonContrast(
        samples,
    );
},

    hasSurfaceIntent: function (el) {
        if (!el || el.nodeType !== 1) return false;

        return (
            el.getAttribute("data-zg-editable") === "surface" ||
            el.classList.contains("clonable-card")
        );
    },

    isSectionLikeNode: function (el) {
        if (!el || el.nodeType !== 1) return false;

        const tag = (el.tagName || "").toLowerCase();

        return tag === "section" || tag === "header" || tag === "footer";
    },

    isLayoutWrapper: function (el) {
        if (!el || el.nodeType !== 1) return true;

        const tag = (el.tagName || "").toLowerCase();

        if (this.invalidTags.includes(tag)) return true;

        if (this.isSectionLikeNode(el)) return true;

        if (
            this.layoutClasses.some((className) => {
                return el.classList.contains(className);
            })
        ) {
            return true;
        }

        if (
            el.hasAttribute("data-builder-only") ||
            el.closest("[data-vvveb-helpers]")
        ) {
            return true;
        }

        return false;
    },

    isValidSurface: function (el) {
        if (!el || el.nodeType !== 1) return false;

        if (!this.hasSurfaceIntent(el)) return false;

        if (this.isLayoutWrapper(el)) return false;

        return true;
    },

    getSurfaceFromTarget: function (target) {
        if (!target || target.nodeType !== 1) return null;

        let surface = target.closest(this.selector);

        while (surface) {
            if (this.isValidSurface(surface)) {
                return surface;
            }

            surface = surface.parentElement
                ? surface.parentElement.closest(this.selector)
                : null;
        }

        return null;
    },


    getSurfaceLabel: function (el) {
        if (!el || el.nodeType !== 1) return "Card Style";

        const customLabel = (el.getAttribute("data-zg-surface-label") || "").trim();

        if (customLabel) {
            return customLabel;
        }

        if (el.classList.contains("pricing-card")) return "Pricing Card";
        if (el.classList.contains("service-card")) return "Service Card";
        if (el.classList.contains("faq-item")) return "FAQ Box";
        if (el.classList.contains("testimonial-card")) return "Testimonial Card";
        if (el.classList.contains("product-card")) return "Product Card";
        if (el.classList.contains("team-card")) return "Team Card";
        if (el.classList.contains("image-card")) return "Image Card";
        if (el.classList.contains("cta-card")) return "CTA Box";

        return el.classList.contains("clonable-card")
            ? "Card Style"
            : "Container Style";
    },
};



window.SurfaceStyleEditor = SurfaceStyleEditor;




document.addEventListener("DOMContentLoaded", () => {
    ImageMaskEditor.init();
    CustomEmojiPicker.init();

    
    SurfaceStyleEditor.init();
});




(function () {
  "use strict";

  const ATTRIBUTES = {
    desktop: "data-zg-hide-desktop",
    tablet: "data-zg-hide-tablet",
    mobile: "data-zg-hide-mobile"
  };


  const RUNTIME_STYLE_ID =
    "zg-responsive-visibility-runtime";


  const RUNTIME_CSS = `


@media (max-width: 575.98px) {

  html:not([data-zg-builder-mode="edit"])
  [data-zg-hide-mobile="true"] {
    display: none !important;
  }

}



@media (min-width: 576px) and (max-width: 991.98px) {

  html:not([data-zg-builder-mode="edit"])
  [data-zg-hide-tablet="true"] {
    display: none !important;
  }

}



@media (min-width: 992px) {

  html:not([data-zg-builder-mode="edit"])
  [data-zg-hide-desktop="true"] {
    display: none !important;
  }

}




html[data-zg-builder-mode="edit"]
[data-zg-builder-device="mobile"]
[data-zg-hide-mobile="true"] {
  opacity: 0.45 !important;
}


html[data-zg-builder-mode="edit"]
[data-zg-builder-device="tablet"]
[data-zg-hide-tablet="true"] {
  opacity: 0.45 !important;
}


html[data-zg-builder-mode="edit"]
[data-zg-builder-device="desktop"]
[data-zg-hide-desktop="true"] {
  opacity: 0.45 !important;
}

`;


  window.ZigrowSectionVisibility = {

    activeSection: null,

    viewportObserver: null,


    init() {

      const button =
        document.getElementById(
          "section-visibility-btn"
        );

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );

      const closeButton =
        document.getElementById(
          "section-visibility-close"
        );


      if (!button || !popup) return;


     

      button.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();


          const section =
            this.resolveSection();


          if (!section) return;


          this.activeSection = section;


          this.open();

        }
      );


     

      closeButton?.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();

          this.close();

        }
      );


     

      popup
        .querySelectorAll(
          "[data-visibility-device]"
        )
        .forEach((input) => {

          input.addEventListener(
            "change",
            () => {

              if (!this.activeSection) {
                return;
              }


              this.setVisibility(
                this.activeSection,
                input.dataset.visibilityDevice,
                input.checked
              );

            }
          );

        });


     

      document.addEventListener(
        "click",
        (event) => {

          if (
            !popup.classList.contains(
              "is-open"
            )
          ) {
            return;
          }


          if (
            popup.contains(event.target) ||
            button.contains(event.target)
          ) {
            return;
          }


          this.close();

        }
      );


     

      window.addEventListener(
        "resize",
        () => {

          if (
            popup.classList.contains(
              "is-open"
            )
          ) {
            this.positionPopover();
          }

        }
      );


      this.observeViewport();

      this.bindPreview();

      this.bindSaveCleanup();

      this.bindIframeReload()

      this.waitForIframe();

    },


    getFrameDocument() {

      return (
        window.FrameDocument ||
        window.Vvveb?.Builder?.iframe
          ?.contentDocument ||
        window.Vvveb?.Builder?.frameDoc ||
        null
      );

    },


    waitForIframe() {

      let attempts = 0;


      const timer = setInterval(() => {

        attempts++;


        const doc =
          this.getFrameDocument();


       if (doc?.documentElement) {

  clearInterval(timer);


  this.ensureRuntimeStyle(doc);

  this.syncDeviceMode();

  this.syncBuilderMode();


 
  const frameWindow =
    doc.defaultView;


  if (
    frameWindow &&
    !frameWindow.__zgSectionVisibilityPositionBound
  ) {

    frameWindow.__zgSectionVisibilityPositionBound =
      true;


    const repositionVisibilityPopup =
      () => {

        const popup =
          document.getElementById(
            "section-visibility-popover"
          );


        if (
          !popup ||
          !popup.classList.contains(
            "is-open"
          )
        ) {
          return;
        }


        requestAnimationFrame(
          () => {

            this.positionPopover();

          }
        );

      };


    frameWindow.addEventListener(
      "scroll",
      repositionVisibilityPopup,
      {
        passive: true
      }
    );


    frameWindow.addEventListener(
      "resize",
      repositionVisibilityPopup,
      {
        passive: true
      }
    );

   
if (
  doc.body &&
  !doc.body.__zgVisibilityOutsideClickBound
) {

  doc.body.__zgVisibilityOutsideClickBound =
    true;


  doc.body.addEventListener(
    "mousedown",
    () => {

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (
        !popup ||
        !popup.classList.contains(
          "is-open"
        )
      ) {
        return;
      }


      this.close();

    },
    true
  );

}


if (
  !doc.__zgVisibilityOutsideClickBound
) {

  doc.__zgVisibilityOutsideClickBound =
    true;


  doc.addEventListener(
    "mousedown",
    () => {

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (
        !popup ||
        !popup.classList.contains(
          "is-open"
        )
      ) {
        return;
      }


      this.close();

    },
    true
  );

}


  }


  return;
}


        if (attempts > 100) {
          clearInterval(timer);
        }

      }, 100);

    },


    resolveSection() {

    const candidates = [

  window.Vvveb?.Builder?.highlightEl,

  window.Vvveb?.Builder?.selectedEl

];


      for (const element of candidates) {

        if (
          !element ||
          !element.isConnected
        ) {
          continue;
        }


        const tag =
          element.tagName
            ?.toLowerCase();


        if (
          tag === "section" ||
          tag === "header" ||
          tag === "footer"
        ) {
          return element;
        }


        const section =
          element.closest?.(
            "section, header, footer"
          );


        if (section) {
          return section;
        }

      }


      return null;

    },


    read(section) {

      return {

        desktop:
          section?.getAttribute(
            ATTRIBUTES.desktop
          ) !== "true",

        tablet:
          section?.getAttribute(
            ATTRIBUTES.tablet
          ) !== "true",

        mobile:
          section?.getAttribute(
            ATTRIBUTES.mobile
          ) !== "true"

      };

    },


    apply(
      section,
      state,
      options = {}
    ) {

      if (!section || !state) {
        return;
      }


      ["desktop", "tablet", "mobile"]
        .forEach((device) => {

          this.applyDeviceState(
            section,
            device,
            state[device],
            options.recordUndo !== false
          );

        });


      this.ensureRuntimeStyle(
        section.ownerDocument
      );


      this.syncButton(section);

    },


    setVisibility(
      section,
      device,
      visible
    ) {

      this.applyDeviceState(
        section,
        device,
        visible,
        true
      );


      this.ensureRuntimeStyle(
        section.ownerDocument
      );


      window.Vvveb?.Builder
        ?.setDirty?.(true);


      this.syncPopup();

      this.syncButton(section);

    },


    applyDeviceState(
      section,
      device,
      visible,
      recordUndo
    ) {

      const attributeName =
        ATTRIBUTES[device];


      if (!attributeName) {
        return;
      }


      const oldValue =
        section.getAttribute(
          attributeName
        );


      const newValue =
        visible
          ? null
          : "true";


      if (oldValue === newValue) {
        return;
      }


      if (visible) {

        section.removeAttribute(
          attributeName
        );

      } else {

        section.setAttribute(
          attributeName,
          "true"
        );

      }


     

      if (
        recordUndo &&
        window.Vvveb?.Undo?.addMutation
      ) {

        Vvveb.Undo.addMutation({

          type: "attributes",

          target: section,

          attributeName,

          oldValue,

          newValue

        });

      }

    },


    open() {

      if (!this.activeSection) {
        return;
      }


      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (!popup) return;


      this.syncPopup();

      this.positionPopover();


      popup.classList.add(
        "is-open"
      );


      popup.setAttribute(
        "aria-hidden",
        "false"
      );


      this.syncButton(
        this.activeSection
      );

    },


  close() {

  const popup =
    document.getElementById(
      "section-visibility-popover"
    );


  if (!popup) {
    return;
  }


  popup.classList.remove(
    "is-open"
  );


  popup.setAttribute(
    "aria-hidden",
    "true"
  );


 
  popup.style.top = "";

  popup.style.left = "";

  popup.style.right = "";

  popup.style.bottom = "";

  popup.style.transform = "";

  popup.style.visibility = "";


  this.activeSection =
    null;

},


    syncPopup() {

      if (!this.activeSection) {
        return;
      }


      const state =
        this.read(
          this.activeSection
        );


      [
        "desktop",
        "tablet",
        "mobile"
      ].forEach((device) => {


        const input =
          document.querySelector(
            `[data-visibility-device="${device}"]`
          );


        const status =
          document.querySelector(
            `[data-visibility-status="${device}"]`
          );


        if (input) {
          input.checked =
            state[device];
        }


        if (status) {

          status.textContent =
            state[device]
              ? "Visible"
              : "Hidden";


          status.classList.toggle(
            "is-hidden",
            !state[device]
          );

        }

      });


      const warning =
        document.getElementById(
          "section-visibility-warning"
        );


      if (warning) {

        warning.hidden =
          state.desktop ||
          state.tablet ||
          state.mobile;

      }

    },


    syncButton(section) {

      const button =
        document.getElementById(
          "section-visibility-btn"
        );


      if (!button || !section) {
        return;
      }


      const state =
        this.read(section);


      const hasHidden =
        !state.desktop ||
        !state.tablet ||
        !state.mobile;


      button.classList.toggle(
        "has-hidden-device",
        hasHidden
      );


      const icon =
        button.querySelector("i");


      if (icon) {

        icon.className =
          hasHidden
            ? "fa-solid fa-eye-slash"
            : "fa-solid fa-eye";

      }

    },


positionPopover() {

  const popup =
    document.getElementById(
      "section-visibility-popover"
    );


  const iframeRef =
    window.Vvveb?.Builder?.iframe;


  const iframe =
    iframeRef?.[0] ||
    iframeRef ||
    document.getElementById("iframe1");


  const section =
    this.activeSection;


  if (
    !popup ||
    !iframe ||
    !section ||
    !section.isConnected
  ) {
    return;
  }


 
  popup.classList.add("is-open");

  popup.style.visibility = "hidden";


  const iframeRect =
    iframe.getBoundingClientRect();


 
  const sectionRect =
    section.getBoundingClientRect();


 
  const sectionTop =
    iframeRect.top +
    sectionRect.top;


  const sectionRight =
    iframeRect.left +
    sectionRect.right;


  const device =
    this.getCurrentDevice();


  const edge = 10;

  const gap = 8;

 
  const actionHeight = 45;


  let desiredWidth = 330;


  if (device === "tablet") {
    desiredWidth = 320;
  }


  if (device === "mobile") {
    desiredWidth = 300;
  }


 
  const availableWidth =
    Math.max(
      180,
      iframeRect.width -
      edge * 2
    );


  const popupWidth =
    Math.min(
      desiredWidth,
      availableWidth
    );


  popup.style.width =
    `${Math.round(popupWidth)}px`;


 
  const top =
    sectionTop +
    actionHeight +
    gap;


 
  let left =
    sectionRight -
    popupWidth;


 
  const minLeft =
    iframeRect.left +
    edge;


  const maxLeft =
    iframeRect.right -
    popupWidth -
    edge;


  if (maxLeft >= minLeft) {

    left =
      Math.max(
        minLeft,
        Math.min(
          left,
          maxLeft
        )
      );

  } else {

    left =
      iframeRect.left;

  }


 
  popup.style.bottom = "auto";

  popup.style.right = "auto";

  popup.style.transform = "none";


  popup.style.top =
    `${Math.round(top)}px`;


  popup.style.left =
    `${Math.round(left)}px`;


  popup.style.visibility =
    "visible";

},


    ensureRuntimeStyle(doc) {

      if (!doc?.head) {
        return;
      }


      let style =
        doc.getElementById(
          RUNTIME_STYLE_ID
        );


      if (!style) {

        style =
          doc.createElement(
            "style"
          );


        style.id =
          RUNTIME_STYLE_ID;


        doc.head.appendChild(
          style
        );

      }


      style.textContent =
        RUNTIME_CSS;

    },

    bindIframeReload() {

  const iframe =
    document.getElementById("iframe1");


  if (
    !iframe ||
    iframe.__zgVisibilityLoadBound
  ) {
    return;
  }


  iframe.__zgVisibilityLoadBound = true;


  iframe.addEventListener(
    "load",
    () => {

      requestAnimationFrame(
        () => {

          const doc =
            this.getFrameDocument();


          if (!doc?.documentElement) {
            return;
          }


       this.ensureRuntimeStyle(doc);

this.syncDeviceMode();

this.syncBuilderMode();



const frameWindow =
  doc.defaultView;


if (
  frameWindow &&
  !frameWindow.__zgSectionVisibilityPositionBound
) {

  frameWindow.__zgSectionVisibilityPositionBound =
    true;


  const repositionVisibilityPopup =
    () => {

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (
        !popup ||
        !popup.classList.contains(
          "is-open"
        )
      ) {
        return;
      }


      requestAnimationFrame(
        () => {

          this.positionPopover();

        }
      );

    };


  frameWindow.addEventListener(
    "scroll",
    repositionVisibilityPopup,
    {
      passive: true
    }
  );


  frameWindow.addEventListener(
    "resize",
    repositionVisibilityPopup,
    {
      passive: true
    }
  );

  if (
  doc.body &&
  !doc.body.__zgVisibilityOutsideClickBound
) {

  doc.body.__zgVisibilityOutsideClickBound =
    true;


  doc.body.addEventListener(
    "mousedown",
    () => {

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (
        !popup ||
        !popup.classList.contains(
          "is-open"
        )
      ) {
        return;
      }


      this.close();

    },
    true
  );

}

}

if (
  !doc.__zgVisibilityOutsideClickBound
) {

  doc.__zgVisibilityOutsideClickBound =
    true;


  doc.addEventListener(
    "mousedown",
    () => {

      const popup =
        document.getElementById(
          "section-visibility-popover"
        );


      if (
        !popup ||
        !popup.classList.contains(
          "is-open"
        )
      ) {
        return;
      }


      this.close();

    },
    true
  );

}

        }
      );

    }
  );

},

bindUndoSync(doc) {

  const frameBody =
    window.Vvveb?.Builder?.frameBody ||
    doc?.body;


  if (
    !frameBody ||
    frameBody.__zgVisibilityUndoBound
  ) {
    return;
  }


  frameBody.__zgVisibilityUndoBound = true;


  frameBody.addEventListener(
    "vvveb.undo.restore",
    (event) => {

      const mutation =
        event.detail;


      if (
        !mutation ||
        mutation.type !== "attributes"
      ) {
        return;
      }


      if (
        !Object.values(ATTRIBUTES)
          .includes(mutation.attributeName)
      ) {
        return;
      }


      const section =
        mutation.target;


      if (!section) {
        return;
      }


      this.syncButton(section);


      if (
        this.activeSection === section
      ) {
        this.syncPopup();
      }

    }
  );

},

    getCurrentDevice() {

      const canvas =
        document.getElementById(
          "canvas"
        );


      if (!canvas) {
        return "desktop";
      }


      if (
        canvas.classList.contains(
          "mobile"
        )
      ) {
        return "mobile";
      }


      if (
        canvas.classList.contains(
          "tablet"
        )
      ) {
        return "tablet";
      }


      return "desktop";

    },


  syncDeviceMode() {

  const doc =
    this.getFrameDocument();


  if (!doc?.documentElement) {
    return;
  }


  const device =
    this.getCurrentDevice();


  doc.documentElement
    .setAttribute(
      "data-zg-builder-device",
      device
    );


 
  const popup =
    document.getElementById(
      "section-visibility-popover"
    );


  if (popup) {

    popup.classList.toggle(
      "zg-sv-mobile-builder",
      device === "mobile"
    );


    popup.classList.toggle(
      "zg-sv-tablet-builder",
      device === "tablet"
    );


    popup.classList.toggle(
      "zg-sv-desktop-builder",
      device === "desktop"
    );

  }


  this.ensureRuntimeStyle(doc);


 
  if (
    popup?.classList.contains(
      "is-open"
    )
  ) {

    requestAnimationFrame(
      () => {

        this.positionPopover();

      }
    );

  }

},


    observeViewport() {

      const canvas =
        document.getElementById(
          "canvas"
        );


      if (!canvas) return;


      this.viewportObserver =
        new MutationObserver(
          () => {

            this.syncDeviceMode();

          }
        );


      this.viewportObserver
        .observe(
          canvas,
          {
            attributes: true,
            attributeFilter: ["class"]
          }
        );

    },


    syncBuilderMode() {

      const doc =
        this.getFrameDocument();


      if (!doc?.documentElement) {
        return;
      }


      const isPreview =
        !!window.Vvveb
          ?.Builder
          ?.isPreview;


      doc.documentElement
        .setAttribute(

          "data-zg-builder-mode",

          isPreview
            ? "preview"
            : "edit"

        );


      this.ensureRuntimeStyle(doc);

    },


    bindPreview() {

      const previewButton =
        document.getElementById(
          "preview-btn"
        );


      if (!previewButton) {
        return;
      }


      previewButton.addEventListener(
        "click",
        () => {

          requestAnimationFrame(
            () => {

              this.syncBuilderMode();

              this.close();

            }
          );

        }
      );

    },


    bindSaveCleanup() {

      window.addEventListener(
        "vvveb.getHtml.before",
        (event) => {

          const doc =
            event.detail;


          if (!doc?.documentElement) {
            return;
          }


         

          doc.documentElement
            .removeAttribute(
              "data-zg-builder-mode"
            );


          doc.documentElement
            .removeAttribute(
              "data-zg-builder-device"
            );


         

          const hasVisibility =
            doc.querySelector(
              [
                '[data-zg-hide-desktop="true"]',
                '[data-zg-hide-tablet="true"]',
                '[data-zg-hide-mobile="true"]'
              ].join(",")
            );


          const runtimeStyle =
            doc.getElementById(
              RUNTIME_STYLE_ID
            );


          if (hasVisibility) {

            this.ensureRuntimeStyle(
              doc
            );

          } else {

            runtimeStyle?.remove();

          }

        }
      );

    }

  };


  document.addEventListener(
    "DOMContentLoaded",
    () => {

      window
        .ZigrowSectionVisibility
        .init();

    }
  );

})();