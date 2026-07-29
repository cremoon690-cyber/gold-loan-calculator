/*=========================================
SWIPER
=========================================*/

const swiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 900,

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

});


/*=========================================
ELEMENTS
=========================================*/

const form = document.getElementById("leadForm");

const otpModal = document.getElementById("otpModal");

const generateOTP = document.getElementById("generateOTP");

const verifyOTP = document.getElementById("verifyOTP");

const resendOTP = document.getElementById("resendOTP");

const closeModal = document.getElementById("closeModal");

const mobileInput = document.getElementById("mobileNumber");

const otpBoxes = document.querySelectorAll(".otp-inputs input");

let otpVerified = false;

const DEMO_OTP = "123456";


/*=========================================
GENERATE OTP
=========================================*/

generateOTP.addEventListener("click", function () {

    const mobile = mobileInput.value.trim();

    if (!/^[6-9]\d{9}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }

    otpModal.classList.add("show");

    otpBoxes[0].focus();

    alert("Demo OTP : " + DEMO_OTP);

});


/*=========================================
OTP AUTO MOVE
=========================================*/

otpBoxes.forEach((box, index) => {

    box.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value.length === 1 && index < otpBoxes.length - 1) {

            otpBoxes[index + 1].focus();

        }

    });


    box.addEventListener("keydown", function (e) {

        if (e.key === "Backspace" && this.value === "" && index > 0) {

            otpBoxes[index - 1].focus();

        }

    });

});


/*=========================================
VERIFY OTP
=========================================*/

verifyOTP.addEventListener("click", function () {

    let enteredOTP = "";

    otpBoxes.forEach(function (box) {

        enteredOTP += box.value;

    });

    if (enteredOTP === DEMO_OTP) {

        otpVerified = true;

        otpModal.classList.remove("show");

        generateOTP.innerHTML = "Verified ✓";

        generateOTP.style.background = "#28a745";

        generateOTP.disabled = true;

        alert("OTP Verified Successfully.");

    }

    else {

        alert("Invalid OTP.");

    }

});


/*=========================================
RESEND OTP
=========================================*/

resendOTP.addEventListener("click", function () {

    otpBoxes.forEach(function (box) {

        box.value = "";

    });

    otpBoxes[0].focus();

    alert("OTP Resent Successfully.");

});


/*=========================================
CLOSE POPUP
=========================================*/

closeModal.addEventListener("click", function () {

    otpModal.classList.remove("show");

});


window.addEventListener("click", function (e) {

    if (e.target === otpModal) {

        otpModal.classList.remove("show");

    }

});


/*=========================================
FORM SUBMIT
=========================================*/

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!otpVerified) {

        alert("Please verify your mobile number first.");

        return;

    }

    alert("Form Submitted Successfully!");

    // Example:
    // form.submit();

});



// second section

/*=========================
Active Menu on Scroll
=========================*/



const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// four section


/*=========================================
ABC RATE INDEX
(API READY)
=========================================*/

// ==============================
// Static Data (Temporary)
// Replace this with API response later
// ==============================

const dailyRates = {

    gold18: "₹4,345.00",
    gold20: "₹5,275.50",
    gold22: "₹6,105.80"

};

const historicalRates = {

    gold18: "₹4,298.00",
    gold20: "₹5,210.40",
    gold22: "₹6,040.50"

};


// ==============================
// Elements
// ==============================

const gold18 = document.getElementById("gold18");

const gold20 = document.getElementById("gold20");

const gold22 = document.getElementById("gold22");

const tabs = document.querySelectorAll(".tab-btn");


// ==============================
// Load Rates
// ==============================

function loadRates(data){

    gold18.innerHTML = data.gold18;

    gold20.innerHTML = data.gold20;

    gold22.innerHTML = data.gold22;

}


// Load Daily First

loadRates(dailyRates);


// ==============================
// Toggle Buttons
// ==============================

tabs.forEach((tab,index)=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(btn=>btn.classList.remove("active"));

        tab.classList.add("active");

        if(index===0){

            loadRates(dailyRates);

        }

        else{

            loadRates(historicalRates);

        }

    });

});


// five section

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounter() {

    if (started) return;

    const section = document.querySelector(".stats-section");

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerHTML = Math.floor(count).toLocaleString();

                    requestAnimationFrame(update);

                } else {

                    counter.innerHTML = target.toLocaleString();

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

window.addEventListener("load", startCounter);


// 10

document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = trigger.closest('.accordion-item');
      var isOpen = item.classList.contains('is-open');

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });
});

// 11 section


document.addEventListener('DOMContentLoaded', function () {
  var track = document.getElementById('sliderTrack');
  var prevBtn = document.querySelector('.slider-arrow--prev');
  var nextBtn = document.querySelector('.slider-arrow--next');
  var dotsWrap = document.getElementById('sliderDots');
  var cards = Array.prototype.slice.call(track.children);

  /* ---------- Build dots (mobile) ---------- */
  cards.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'slider-dot';
    dot.setAttribute('aria-label', 'Go to review ' + (i + 1));
    dot.addEventListener('click', function () {
      cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function updateDots() {
    var trackCenter = track.scrollLeft + track.clientWidth / 2;
    var closestIndex = 0;
    var closestDist = Infinity;

    cards.forEach(function (card, i) {
      var cardCenter = card.offsetLeft + card.offsetWidth / 2;
      var dist = Math.abs(cardCenter - trackCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === closestIndex);
    });
  }

  function updateArrows() {
    if (!prevBtn || !nextBtn) return;
    var maxScroll = track.scrollWidth - track.clientWidth - 2;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  }

  function scrollByCard(direction) {
    var card = cards[0];
    var gap = 24;
    var amount = (card.offsetWidth + gap) * direction;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });

  track.addEventListener('scroll', function () {
    window.requestAnimationFrame(function () {
      updateDots();
      updateArrows();
    });
  });

  updateDots();
  updateArrows();
  window.addEventListener('resize', function () {
    updateDots();
    updateArrows();
  });

  /* ---------- Video play toggle ---------- */
  document.querySelectorAll('.video-play-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var frame = btn.closest('.video-frame');
      var video = frame.querySelector('.video-el');
      var src = frame.getAttribute('data-video-src');

      if (src && !video.getAttribute('src')) {
        video.setAttribute('src', src);
      }

      frame.classList.add('is-playing');
      video.play().catch(function () {
        /* Autoplay may be blocked until the user interacts with controls — that's fine. */
      });
    });
  });
});



// 12 section faqs


document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Accordion open/close ---------- */
  var questions = document.querySelectorAll('.faq-question');

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('is-open');

      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ---------- View More / View Less ---------- */
  var faqList = document.getElementById('faqList');
  var toggleBtn = document.getElementById('faqToggleBtn');
  var toggleLabel = toggleBtn.querySelector('.faq-toggle-label');

  toggleBtn.addEventListener('click', function () {
    var isExpanded = faqList.classList.toggle('is-expanded');

    toggleBtn.setAttribute('aria-expanded', String(isExpanded));
    toggleLabel.textContent = isExpanded ? 'View Less' : 'View More';

    if (!isExpanded) {
      // Collapse: close any open extra items and scroll back to the list top
      faqList.querySelectorAll('.faq-item--extra.is-open').forEach(function (item) {
        item.classList.remove('is-open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      faqList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});


// laon

(() => {
  "use strict";

  const CONFIG = {
    goldRate24K: 15000,

    purityFactors: {
      "18K": 18 / 24,
      "19K": 19 / 24,
      "20K": 20 / 24,
      "21K": 21 / 24,
      "22K": 22 / 24,
      "24K": 0.999
    },

    // purities shown as buttons on the Weight tab (ornament karats + gold coin)
    weightPurities: [
      { value: "18K", label: "18 Karat", type: "ornament" },
      { value: "19K", label: "19 Karat", type: "ornament" },
      { value: "20K", label: "20 Karat", type: "ornament" },
      { value: "21K", label: "21 Karat", type: "ornament" },
      { value: "22K", label: "22 Karat", type: "ornament" },
      { value: "24K", label: "Gold Coin 24K", type: "coin" }
    ],

    // all purities shown as compact "18K" style buttons on the Amount tab
    compactPurities: [
      { value: "18K", label: "18K", type: "ornament" },
      { value: "19K", label: "19K", type: "ornament" },
      { value: "20K", label: "20K", type: "ornament" },
      { value: "21K", label: "21K", type: "ornament" },
      { value: "22K", label: "22K", type: "ornament" },
      { value: "24K", label: "24K", type: "coin" }
    ],

    limits: {
      ornamentWeight: { min: 1, max: 1000 },
      coinWeight: { min: 1, max: 50 },
      loanAmount: { min: 5000, max: 50000000 },
      interestWeight: { min: 1, max: 1000 },
      interestRate: { min: 9, max: 27 },
      tenure: { min: 6, max: 24 }
    }
  };

  const state = {
    activeTab: "weight",

    goldType: "ornament",
    purity: "22K",
    weight: 10,

    amountPurity: "24K",
    loanAmount: 50000000,

    interestWeight: 10,
    interestPurity: "22K",
    interestRate: 9,
    tenure: 12
  };

  const getElement = (id) => document.getElementById(id);

  const elements = {
    tabs: [...document.querySelectorAll("[data-tab]")],

    weightPanel: getElement("weightPanel"),
    amountPanel: getElement("amountPanel"),
    interestPanel: getElement("interestPanel"),

    weightBreakdown: getElement("weightBreakdown"),
    amountBreakdown: getElement("amountBreakdown"),
    interestBreakdown: getElement("interestBreakdown"),
    promoCard: getElement("promoCard"),

    resultValue: getElement("resultValue"),
    resultLabel: getElement("resultLabel"),

    goldTypeSelect: getElement("goldTypeSelect"),
    purityGroupWeight: getElement("purityGroupWeight"),
    purityButtonsWeight: getElement("purityButtonsWeight"),
    purityButtonsAmount: getElement("purityButtonsAmount"),

    weightInput: getElement("weightInput"),
    weightSlider: getElement("weightSlider"),
    weightHelpText: getElement("weightHelpText"),

    loanAmountInput: getElement("loanAmountInput"),
    loanAmountSlider: getElement("loanAmountSlider"),

    ornamentValue: getElement("ornamentValue"),
    eligibleLoanOutput: getElement("eligibleLoanOutput"),

    amountLoanAmountOutput: getElement("amountLoanAmountOutput"),
    ltvAppliedOutput: getElement("ltvAppliedOutput"),

    interestWeightInput: getElement("interestWeightInput"),
    interestWeightSlider: getElement("interestWeightSlider"),
    interestPuritySelect: getElement("interestPurity"),
    interestRateInput: getElement("interestRateInput"),
    interestRateSlider: getElement("interestRateSlider"),
    tenureInput: getElement("tenureInput"),
    tenureSlider: getElement("tenureSlider"),

    interestLoanAmount: getElement("interestLoanAmount"),
    monthlyInterestOutput: getElement("monthlyInterestOutput"),
    totalInterestOutput: getElement("totalInterestOutput"),
    totalPaymentOutput: getElement("totalPaymentOutput"),

    refreshRateWeight: getElement("refreshRateWeight"),
    refreshRateAmount: getElement("refreshRateAmount"),

    goldRateValues: [...document.querySelectorAll(".gold-rate-value")]
  };

  function formatINR(value, decimalPlaces = 0) {
    const safeValue = Number.isFinite(value) ? value : 0;

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    }).format(safeValue);
  }

  function clamp(value, min, max) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
      return min;
    }

    return Math.min(Math.max(number, min), max);
  }

  function getCurrentWeightLimit() {
    return state.goldType === "coin"
      ? CONFIG.limits.coinWeight
      : CONFIG.limits.ornamentWeight;
  }

  // NEW: returns only the purities that belong to the currently selected gold type
  function getFilteredWeightPurities() {
    return CONFIG.weightPurities.filter((item) => item.type === state.goldType);
  }

  function getLTVByLoanAmount(loanAmount) {
    if (loanAmount <= 250000) {
      return 0.85;
    }

    if (loanAmount <= 500000) {
      return 0.8;
    }

    return 0.75;
  }

  function calculateGoldValue(weight, purity) {
    const purityFactor = CONFIG.purityFactors[purity];
    return weight * purityFactor * CONFIG.goldRate24K;
  }

  function calculateEligibleLoan(goldValue) {
    const loanAt85Percent = goldValue * 0.85;

    if (loanAt85Percent <= 250000) {
      return { eligibleLoan: loanAt85Percent, ltv: 0.85 };
    }

    const loanAt80Percent = goldValue * 0.8;

    if (loanAt80Percent <= 500000) {
      return { eligibleLoan: loanAt80Percent, ltv: 0.8 };
    }

    return { eligibleLoan: goldValue * 0.75, ltv: 0.75 };
  }

  /* ---------- Rendering ---------- */

  function renderGoldRate() {
    elements.goldRateValues.forEach((node) => {
      node.textContent = formatINR(CONFIG.goldRate24K, 0);
    });
  }

  function renderTabs() {
    elements.tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === state.activeTab;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    elements.weightPanel.classList.toggle("active", state.activeTab === "weight");
    elements.amountPanel.classList.toggle("active", state.activeTab === "amount");
    elements.interestPanel.classList.toggle("active", state.activeTab === "interest");

    elements.amountPanel.hidden = state.activeTab !== "amount";
    elements.interestPanel.hidden = state.activeTab !== "interest";

    if (state.activeTab !== "weight") {
      elements.weightPanel.classList.remove("active");
    }

    elements.weightBreakdown.hidden = state.activeTab !== "weight";
    elements.amountBreakdown.hidden = state.activeTab !== "amount";
    elements.interestBreakdown.hidden = state.activeTab !== "interest";

    elements.promoCard.hidden = state.activeTab !== "weight";
  }

  function renderPurityButtons(container, list, activeValue, onSelect) {
    if (!container) {
      return;
    }

    container.innerHTML = "";

    list.forEach((item) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "purity-btn";
      button.textContent = item.label;
      button.dataset.value = item.value;

      const isActive = item.value === activeValue;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");

      button.addEventListener("click", () => onSelect(item));

      container.appendChild(button);
    });
  }

  // CHANGED: now only renders buttons matching the currently selected gold type
  // (Ornament -> 18K to 22K, Gold Coin -> 24K only)
  function renderWeightPurityButtons() {
    const filteredList = getFilteredWeightPurities();

    // Safety check: if current purity isn't part of the filtered list
    // (e.g. right after switching gold type), fall back to the first item.
    const activeExists = filteredList.some((item) => item.value === state.purity);
    if (!activeExists && filteredList.length > 0) {
      state.purity = filteredList[0].value;
    }

    renderPurityButtons(
      elements.purityButtonsWeight,
      filteredList,
      state.purity,
      (item) => {
        state.purity = item.value;
        state.goldType = item.type;

        if (elements.goldTypeSelect) {
          elements.goldTypeSelect.value = item.type;
        }

        updateWeightLimits();
        renderWeightPurityButtons();
        renderWeightResult();
      }
    );
  }

  function renderAmountPurityButtons() {
    renderPurityButtons(
      elements.purityButtonsAmount,
      CONFIG.compactPurities,
      state.amountPurity,
      (item) => {
        state.amountPurity = item.value;
        renderAmountPurityButtons();
        renderAmountResult();
      }
    );
  }

  // CHANGED: uses the full weightPurities list (with proper "18 Karat" / "Gold Coin 24K"
  // labels) and now also shows a visible "Purity Factor" line under the dropdown.
  function populateInterestPuritySelect() {
    if (!elements.interestPuritySelect) {
      return;
    }

    elements.interestPuritySelect.innerHTML = "";

    CONFIG.weightPurities.forEach((item) => {
      const option = document.createElement("option");

      option.value = item.value;
      option.textContent = item.label;

      if (item.value === state.interestPurity) {
        option.selected = true;
      }

      elements.interestPuritySelect.appendChild(option);
    });
  }

  function updateWeightLimits() {
    const limits = getCurrentWeightLimit();

    elements.weightInput.min = limits.min;
    elements.weightInput.max = limits.max;
    elements.weightSlider.min = limits.min;
    elements.weightSlider.max = limits.max;

    state.weight = clamp(state.weight, limits.min, limits.max);
    elements.weightInput.value = state.weight;
    elements.weightSlider.value = state.weight;

    elements.weightHelpText.textContent =
      state.goldType === "coin"
        ? "*Please type in the range of 1 to 50 grams for Gold Coin"
        : "*Please type in the range of 1 to 1000 grams";
  }

  function renderWeightResult() {
    const goldValue = calculateGoldValue(state.weight, state.purity);
    const result = calculateEligibleLoan(goldValue);

    elements.resultValue.textContent = formatINR(result.eligibleLoan, 0);
    elements.resultLabel.textContent = "Eligible Loan Amount";

    elements.ornamentValue.textContent = formatINR(goldValue, 2);
    elements.eligibleLoanOutput.textContent = formatINR(result.eligibleLoan, 2);
  }

  function renderAmountResult() {
    const purityFactor = CONFIG.purityFactors[state.amountPurity];
    const applicableLTV = getLTVByLoanAmount(state.loanAmount);

    const requiredGold =
      state.loanAmount / (CONFIG.goldRate24K * purityFactor * applicableLTV);

    elements.resultValue.textContent = requiredGold.toFixed(1);
    elements.resultLabel.textContent = "Grams Required";

    elements.amountLoanAmountOutput.textContent = formatINR(state.loanAmount, 0);
    elements.ltvAppliedOutput.textContent = `${Math.round(applicableLTV * 100)}%`;
  }

  function renderInterestResult() {
    const goldValue = calculateGoldValue(state.interestWeight, state.interestPurity);
    const loanResult = calculateEligibleLoan(goldValue);

    const principal = loanResult.eligibleLoan;
    const monthlyInterest = (principal * state.interestRate) / (12 * 100);
    const totalInterest = monthlyInterest * state.tenure;
    const totalPayment = principal + totalInterest;

    elements.resultValue.textContent = formatINR(totalInterest, 0);
    elements.resultLabel.textContent = " Monthly Interest Payable";

    elements.interestLoanAmount.textContent = formatINR(principal, 2);
    elements.monthlyInterestOutput.textContent = formatINR(monthlyInterest, 2);
    elements.totalInterestOutput.textContent = formatINR(totalInterest, 2);
    elements.totalPaymentOutput.textContent = formatINR(totalPayment, 2);
  }

  function renderActiveTabResult() {
    if (state.activeTab === "weight") {
      renderWeightResult();
    } else if (state.activeTab === "amount") {
      renderAmountResult();
    } else {
      renderInterestResult();
    }
  }

  /* ---------- Bindings ---------- */

  function bindTabs() {
    elements.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        state.activeTab = tab.dataset.tab;
        renderTabs();
        renderActiveTabResult();
      });
    });
  }

  function bindGoldTypeSelect() {
    if (!elements.goldTypeSelect) {
      return;
    }

    elements.goldTypeSelect.addEventListener("change", (event) => {
      state.goldType = event.target.value;
      state.purity = state.goldType === "coin" ? "24K" : "22K";

      updateWeightLimits();
      renderWeightPurityButtons();
      renderWeightResult();
    });
  }

  function bindWeightInputs() {
    function updateWeightValue(rawValue) {
      const limits = getCurrentWeightLimit();
      const validatedValue = clamp(rawValue, limits.min, limits.max);

      state.weight = validatedValue;
      elements.weightInput.value = validatedValue;
      elements.weightSlider.value = validatedValue;

      renderWeightResult();
    }

    elements.weightInput.addEventListener("input", (event) => updateWeightValue(event.target.value));
    elements.weightInput.addEventListener("change", (event) => updateWeightValue(event.target.value));
    elements.weightSlider.addEventListener("input", (event) => updateWeightValue(event.target.value));
  }

  function bindSyncedInputs(input, slider, stateKey, min, max, callback) {
    if (!input || !slider) {
      return;
    }

    function updateValue(rawValue) {
      const validatedValue = clamp(rawValue, min, max);

      state[stateKey] = validatedValue;
      input.value = validatedValue;
      slider.value = validatedValue;

      callback();
    }

    input.addEventListener("input", (event) => updateValue(event.target.value));
    input.addEventListener("change", (event) => updateValue(event.target.value));
    slider.addEventListener("input", (event) => updateValue(event.target.value));
  }

  function bindInterestPuritySelect() {
    if (!elements.interestPuritySelect) {
      return;
    }

    elements.interestPuritySelect.addEventListener("change", (event) => {
      state.interestPurity = event.target.value;
      renderInterestResult();
    });
  }

  function bindRefreshButtons() {
    [elements.refreshRateWeight, elements.refreshRateAmount].forEach((button) => {
      if (!button) {
        return;
      }

      button.addEventListener("click", () => {
        renderGoldRate();
        renderActiveTabResult();
      });
    });
  }

  /* ---------- Init ---------- */

  bindTabs();
  bindGoldTypeSelect();
  bindWeightInputs();

  bindSyncedInputs(
    elements.loanAmountInput,
    elements.loanAmountSlider,
    "loanAmount",
    CONFIG.limits.loanAmount.min,
    CONFIG.limits.loanAmount.max,
    renderAmountResult
  );

  bindSyncedInputs(
    elements.interestWeightInput,
    elements.interestWeightSlider,
    "interestWeight",
    CONFIG.limits.interestWeight.min,
    CONFIG.limits.interestWeight.max,
    renderInterestResult
  );

  bindSyncedInputs(
    elements.interestRateInput,
    elements.interestRateSlider,
    "interestRate",
    CONFIG.limits.interestRate.min,
    CONFIG.limits.interestRate.max,
    renderInterestResult
  );

  bindSyncedInputs(
    elements.tenureInput,
    elements.tenureSlider,
    "tenure",
    CONFIG.limits.tenure.min,
    CONFIG.limits.tenure.max,
    renderInterestResult
  );

  bindInterestPuritySelect();
  bindRefreshButtons();

  updateWeightLimits();
  renderWeightPurityButtons();
  renderAmountPurityButtons();
  populateInterestPuritySelect();
  renderTabs();
  renderGoldRate();
  renderActiveTabResult();
})();

// sticky header







document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header-container");

    if (!header) return;

    const headerTop = header.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", function () {

        if (window.scrollY >= headerTop) {
            header.classList.add("is-fixed");
        } else {
            header.classList.remove("is-fixed");
        }

    });

});
//   map location


const branches = [
  {
    id: 1,
    name: "ABC Central - Mumbai",
    distance: "0.8 km",
    address: "Shop No 14, Gold Plaza, Hill Road, Bandra West, Mumbai - 400050",
    phone: "+91 22 7107 3484",
    dealsIn: "Gold Loan",
    branchCode: "BM2527",
    open: true,
    closes: "7:00 PM",
    type: "flagship",
    x: 42, y: 46,
    mapQuery: "Hill Road, Bandra West, Mumbai 400050"
  },
  {
    id: 2,
    name: "ABC Prime - Andheri",
    distance: "2.4 km",
    address: "2nd Floor, Corporate Hub, Link Road, Andheri West - 400053",
    phone: "+91 22 6612 9081",
    dealsIn: "Gold Loan",
    branchCode: "BM3841",
    open: true,
    closes: "6:30 PM",
    type: "partner",
    x: 67, y: 28,
    mapQuery: "Link Road, Andheri West, Mumbai 400053"
  },
  {
    id: 3,
    name: "ABC Hub - Dadar",
    distance: "4.1 km",
    address: "Station Road, Near Plaza Cinema, Dadar West - 400028",
    phone: "+91 22 2445 7723",
    dealsIn: "Gold Loan",
    branchCode: "BM4092",
    open: true,
    closes: "8:00 PM",
    type: "partner",
    x: 70, y: 60,
    mapQuery: "Station Road, Dadar West, Mumbai 400028"
  }
];

const listEl = document.getElementById('branchList');
const markersLayer = document.getElementById('markersLayer');
const popup = document.getElementById('popup');
const nearbyCount = document.getElementById('nearbyCount');
const directionsBanner = document.getElementById('directionsBanner');
const dbName = document.getElementById('dbName');

let activeId = null;
let openPopupId = null;

function pinSVG(){
  return '<svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 10.5A2.5 2.5 0 1112 7.5a2.5 2.5 0 010 5z"/></svg>';
}

function renderList(items){
  listEl.innerHTML = '';
  nearbyCount.textContent = items.length + ' NEARBY PARTNERS';
  items.forEach(b => {
    const card = document.createElement('div');
    card.className = 'card' + (b.id === activeId ? ' active' : '');
    card.dataset.id = b.id;
    card.innerHTML = `
      <div class="card-top">
        <div class="card-name">${b.name}</div>
        <div class="badge ${b.id === items[0]?.id ? 'near' : ''}">${b.distance}</div>
      </div>
      <div class="card-addr">${b.address}</div>
      <div class="card-status">
        <span class="dot"></span>
        <span class="status-open">Open Now</span>
        <span class="status-closes">&nbsp;Closes at ${b.closes}</span>
      </div>
    `;
    card.addEventListener('click', () => selectBranch(b.id, true));
    listEl.appendChild(card);
  });
}

function renderMarkers(){
  markersLayer.innerHTML = '';
  branches.forEach(b => {
    const m = document.createElement('div');
    m.className = `marker ${b.type}` + (b.id === activeId ? ' selected' : '');
    m.style.left = b.x + '%';
    m.style.top = b.y + '%';
    m.dataset.id = b.id;
    m.innerHTML = `<div class="marker-pin">${b.type === 'flagship' ? pinSVG() : ''}</div>`;
    m.addEventListener('click', (e) => {
      e.stopPropagation();
      selectBranch(b.id, false);
      openPopup(b.id);
    });
    markersLayer.appendChild(m);
  });
}

function selectBranch(id, panList){
  activeId = id;
  renderList(branches);
  renderMarkers();
  if(panList){
    // keep popup closed when selecting from list, just highlight marker
    closePopup();
  }
}

function openPopup(id){
  const b = branches.find(x => x.id === id);
  if(!b) return;
  openPopupId = id;
  document.getElementById('popupTitle').textContent = b.name.split(' - ')[1] ? b.name : b.name;
  document.getElementById('popupTitle').textContent = b.name;
  document.getElementById('popupDeals').textContent = b.dealsIn;
  document.getElementById('popupBranch').textContent = b.branchCode;
  document.getElementById('popupAddress').textContent = b.address;
  document.getElementById('popupPhone').textContent = b.phone;
  document.getElementById('popupDirections').href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(b.mapQuery);

  popup.style.left = b.x + '%';
  popup.style.top = b.y + '%';
  popup.classList.add('open');
}

function closePopup(){
  popup.classList.remove('open');
  openPopupId = null;
}

document.getElementById('popupClose').addEventListener('click', (e) => {
  e.stopPropagation();
  closePopup();
});

document.getElementById('popupDirections').addEventListener('click', (e) => {
  const b = branches.find(x => x.id === openPopupId);
  if(b){
    dbName.textContent = b.name;
    directionsBanner.classList.add('show');
  }
});

document.getElementById('dismissBanner').addEventListener('click', () => {
  directionsBanner.classList.remove('show');
});

document.getElementById('mapWrap').addEventListener('click', () => closePopup());

document.getElementById('useLocationBtn').addEventListener('click', () => {
  selectBranch(branches[0].id, true);
});

// zoom (subtle visual scale of map canvas)
let zoom = 1;
const mapCanvas = document.getElementById('mapCanvas');
document.getElementById('zoomIn').addEventListener('click', () => {
  zoom = Math.min(zoom + 0.15, 1.6);
  mapCanvas.style.transform = `scale(${zoom})`;
});
document.getElementById('zoomOut').addEventListener('click', () => {
  zoom = Math.max(zoom - 0.15, 0.85);
  mapCanvas.style.transform = `scale(${zoom})`;
});

// search filter
document.getElementById('searchInput').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = q
    ? branches.filter(b => b.name.toLowerCase().includes(q) || b.address.toLowerCase().includes(q))
    : branches;
  renderList(filtered);
  markersLayer.querySelectorAll('.marker').forEach(m => {
    const id = Number(m.dataset.id);
    const visible = filtered.some(b => b.id === id);
    m.classList.toggle('hidden', !visible);
  });
});

// init
activeId = branches[0].id;
renderList(branches);
renderMarkers();


/*=========================================
  GOLD RATE CARD SLIDER
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".rate-cards");
    const cards = document.querySelectorAll(".rate-cards .rate-card");

    const prevBtn = document.querySelector(".rate-slider-prev");
    const nextBtn = document.querySelector(".rate-slider-next");

    if (!slider || !cards.length || !prevBtn || !nextBtn) {
        return;
    }

    let currentIndex = 0;
    let autoSlide;


    function getVisibleCards() {

        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 991) {
            return 2;
        }

        return 3;
    }


    function updateSlider() {

        const visibleCards = getVisibleCards();

        const maxIndex = Math.max(
            0,
            cards.length - visibleCards
        );

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        const cardWidth =
            cards[0].getBoundingClientRect().width;

        const gap =
            parseFloat(
                window.getComputedStyle(slider).gap
            ) || 0;

        const moveAmount =
            (cardWidth + gap) * currentIndex;

        slider.style.transform =
            `translateX(-${moveAmount}px)`;


        prevBtn.disabled =
            currentIndex === 0;

        nextBtn.disabled =
            currentIndex >= maxIndex;
    }


    /* NEXT */

    nextBtn.addEventListener("click", function () {

        const maxIndex =
            cards.length - getVisibleCards();

        if (currentIndex < maxIndex) {

            currentIndex++;

        } else {

            /* Start again from first card */
            currentIndex = 0;

        }

        updateSlider();

    });


    /* PREVIOUS */

    prevBtn.addEventListener("click", function () {

        if (currentIndex > 0) {

            currentIndex--;

        } else {

            const maxIndex =
                cards.length - getVisibleCards();

            currentIndex = maxIndex;

        }

        updateSlider();

    });


    /* AUTO SLIDE - 3 SECONDS */

    function startAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(function () {

            const maxIndex =
                cards.length - getVisibleCards();

            if (currentIndex < maxIndex) {

                currentIndex++;

            } else {

                currentIndex = 0;

            }

            updateSlider();

        }, 2000);
    }


    /* RESPONSIVE */

    window.addEventListener("resize", function () {

        updateSlider();
        startAutoSlide();

    });


    /* INITIAL */

    updateSlider();
    startAutoSlide();

});


// why choose us 

(() => {
  "use strict";

  const SLIDE_INTERVAL_MS = 2000;   // 2 seconds
  const RESUME_AFTER_TOUCH_MS = 4000; // manual swipe ke baad kitni der auto-slide ruke

  const track = document.querySelector(".why-grid");

  if (!track) {
    return;
  }

  let autoSlideTimer = null;
  let resumeTimer = null;

  function isMobileLayout() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function getCardStep() {
    const firstCard = track.querySelector(".feature-card");
    if (!firstCard) {
      return track.clientWidth;
    }
    // card width + gap ke hisaab se scroll step nikalte hain
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    return firstCard.getBoundingClientRect().width + gap;
  }

  function slideToNext() {
    if (!isMobileLayout()) {
      return;
    }

    const step = getCardStep();
    const maxScroll = track.scrollWidth - track.clientWidth;

    // Agar end tak pahunch gaye, to wapas start pe chale jao (loop)
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollTo({ left: track.scrollLeft + step, behavior: "smooth" });
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    if (!isMobileLayout()) {
      return;
    }
    autoSlideTimer = setInterval(slideToNext, SLIDE_INTERVAL_MS);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function pauseThenResume() {
    stopAutoSlide();
    if (resumeTimer) {
      clearTimeout(resumeTimer);
    }
    resumeTimer = setTimeout(startAutoSlide, RESUME_AFTER_TOUCH_MS);
  }

  // User khud swipe/scroll kare to auto-slide thodi der ruk jaye
  track.addEventListener("touchstart", pauseThenResume, { passive: true });
  track.addEventListener("mousedown", pauseThenResume);

  // Screen resize hone par (mobile <-> desktop) auto-slide sahi state me rahe
  window.addEventListener("resize", () => {
    if (isMobileLayout()) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  });

  // Init
  startAutoSlide();
})();

// all slider js 

// how to apply
/* ================================================
   How To Apply Section - Mobile Auto Slider JS
   Sirf mobile (<=768px) par 2 second interval mein
   auto-slide karega. Desktop par kuch nahi hoga.
================================================ */


(function () {
  var track = document.getElementById('stepsRow'); // <div class="steps-row" id="stepsRow">
  if (!track) return;

  var SLIDE_DURATION = 2000; /* slide move ka time - 2 seconds */
  var autoSlideTimer = null;

  var isMobile = function () {
    return window.matchMedia('(max-width: 768px)').matches;
  };

  // custom smooth scroll jo exactly SLIDE_DURATION mein complete hoti hai
  function smoothScrollTo(target, duration) {
    var start = track.scrollLeft;
    var change = target - start;
    var startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      track.scrollLeft = start + change * easeInOutQuad(progress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(function () {
      if (!isMobile()) return;

      var step = track.querySelector('.step');
      if (!step) return;

      var stepWidth = step.getBoundingClientRect().width + 16; // +gap
      var maxScroll = track.scrollWidth - track.clientWidth;

      if (Math.ceil(track.scrollLeft) >= maxScroll) {
        // loop back to start
        smoothScrollTo(0, SLIDE_DURATION);
      } else {
        smoothScrollTo(track.scrollLeft + stepWidth, SLIDE_DURATION);
      }
    }, SLIDE_DURATION); /* next slide start hota hai jaise hi pehla khatam hota hai */
  }

  function stopAutoSlide() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  }

  function init() {
    if (isMobile()) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  }

  // user swipe/touch karega to auto-slide pause, phir resume
  track.addEventListener('touchstart', stopAutoSlide, { passive: true });
  track.addEventListener('touchend', function () {
    if (isMobile()) startAutoSlide();
  });

  window.addEventListener('resize', init);
  init();
})();


//  blog section

/* ================================================
   Strategic Insights Section - Mobile Auto Slider JS
   Sirf mobile (<=768px) par har slide move exactly
   2 second mein hota hai (custom smooth animation).
   Desktop par kuch nahi hoga.
================================================ */

function initInsightsSlider() {
  var track = document.getElementById('insightsGrid'); // <div class="insights-grid" id="insightsGrid">
  if (!track) {
    console.warn('[insights-slider] #insightsGrid nahi mila - id="insightsGrid" .insights-grid div par add karein.');
    return;
  }

  var SLIDE_DURATION = 2000; /* slide move ka time - 2 seconds */
  var autoSlideTimer = null;

  var isMobile = function () {
    return window.matchMedia('(max-width: 768px)').matches;
  };

  // custom smooth scroll jo exactly SLIDE_DURATION mein complete hoti hai
  function smoothScrollTo(target, duration) {
    var start = track.scrollLeft;
    var change = target - start;
    var startTime = null;

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      track.scrollLeft = start + change * easeInOutQuad(progress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(function () {
      if (!isMobile()) return;

      var card = track.querySelector('.insight-card');
      if (!card) return;

      var cardWidth = card.getBoundingClientRect().width + 16; // +gap
      var maxScroll = track.scrollWidth - track.clientWidth;

      if (Math.ceil(track.scrollLeft) >= maxScroll) {
        // loop back to start
        smoothScrollTo(0, SLIDE_DURATION);
      } else {
        smoothScrollTo(track.scrollLeft + cardWidth, SLIDE_DURATION);
      }
    }, SLIDE_DURATION); /* next slide start hota hai jaise hi pehla khatam hota hai */
  }

  function stopAutoSlide() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  }

  function init() {
    if (isMobile()) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  }

  // user swipe/touch karega to auto-slide pause, phir resume
  track.addEventListener('touchstart', stopAutoSlide, { passive: true });
  track.addEventListener('touchend', function () {
    if (isMobile()) startAutoSlide();
  });

  window.addEventListener('resize', init);
  init();
}

// DOM ready hone ka wait karo - agar script <head> mein ya section se pehle
// load ho raha ho tab bhi #insightsGrid milega
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInsightsSlider);
} else {
  initInsightsSlider();
}



// sticky header finally

(function () {
    const header = document.querySelector('.header-container.is-fixed');
    const targetSection = document.querySelector('#scrollstrip'); 

    if (!header || !targetSection) {
        console.error('Header ya target section nahi mila. Selector check karein.');
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.boundingClientRect.top < 0) {
                    header.classList.add('show-header');
                } else {
                    header.classList.remove('show-header');
                }
            });
        },
        {
            threshold: 0,
            rootMargin: '0px'
        }
    );

    observer.observe(targetSection);
})();
