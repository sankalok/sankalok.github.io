(function () {
    var THEME_KEY = "site-theme";
    var LANG_KEY = "site-lang";
    var STRINGS = {
        en: {
            home: "Home",
            blog: "Blog",
            resume: "Resume",
            scholar: "Scholar",
            place: "Hong Kong",
            halifax: "Halifax, Canada",
            about: "About",
            experience: "Experience",
            education: "Education",
            awards: "Awards",
            publications: "Publications",
            about_body:
                "Hello, my name is Sankalok (pronounced shaun-ko-lock). I like thinking deeply about complicated problems, writing down and discussing possible solutions with colleagues, and tinkering with computers/servers while fully using up all of available resources. I also try to publish once in a while.",
            role_l15: "L15 • Engineer A",
            role_l14: "L14 • Engineer B",
            team_itic: "Interdisciplinary Technology Innovation Center",
            team_theory: "Theory Lab",
            when_huawei_now: "Dec 2026 – Present",
            when_huawei_prev: "Feb 2024 – Dec 2026",
            huawei_1:
                "Led a team of three interns on prefill and decode optimization for text and multimodal embedding, reranking, and OCR models, and on automated NPU kernel-generation pipelines for Data Storage and Consumer Business Group product lines.",
            huawei_2:
                "Built a serving engine on Ascend NPUs for prefill-only models that outperforms vLLM-Ascend and TEI; the approach was adopted into vLLM-Ascend for the Data Storage product line.",
            huawei_3:
                "Optimized ViT-based architectures for automated feature extraction from whole-slide pathology images in Huawei ModelEngine V26.0, released as an open-source collaboration with Ruijin Hospital, Shanghai.",
            huawei_4:
                "Collaborated on a text and multimodal knowledge-graph extraction pipeline for retrieval-augmented generation, with hierarchical granularity, self-repairing triplets, elastic schema induction, and intent-driven entity–event disambiguation, and on a unified multi-relation graph from raw sources for the Data Storage product line and Huawei MindSDK.",
            huawei_5:
                'Contributed to a top-3 SOTA in-memory ANN method, <a href="https://github.com/erikbern/ann-benchmarks">Knowledge Graph Neighbours (kgn)</a>, by adding hierarchical clustering for vector search to raise query throughput for Terminal and Cloud Storage product lines.',
            role_jrs: "Junior Research Scientist",
            role_intern: "Research Intern",
            when_byq_jrs: "Aug 2023 – Feb 2024",
            when_byq_intern: "Dec 2022 – May 2023",
            byq_1:
                "Built a mixture-of-experts stack for cancer drug-resistance prediction, improving performance on ovarian cancer subtypes from Hong Kong hospital data to help clinicians choose chemotherapy combinations.",
            byq_2:
                "Standardized ovarian cancer datasets with nonparametric statistical modeling so genetic encodings from different hardware could be used together in later analysis.",
            byq_3:
                "Wrote documentation and presentations that explained the research workflow to external stakeholders.",
            role_ra: "Research Assistant",
            when_hku_ra: "Jul 2022 – May 2023",
            hku_ra_1:
                "Built an information-retrieval pipeline for Hong Kong legal judgments: converting HTML to Markdown, then keyword extraction, topic modeling, and transformer summarization to surface post-hoc insights and retrieve related rules.",
            when_lora: "Jun 2022 – Jul 2023",
            lora_1:
                "Designed a news-scouting ETL pipeline that scored article relevance, dropped stale items, and migrated results into ScyllaDB for faster column-oriented analysis.",
            lora_2:
                "Built a regression-based market-sentiment indicator for equities and indexes from in-house news data, to study retail trading activity after the fact.",
            role_mitacs: "MITACS Globalink Research Intern",
            when_smu: "Jul 2021 – Oct 2021",
            smu_1:
                "Built a pipeline to clean Fortune 500 CSR reports, extract keyword usage with topic modeling, and store the results for later analysis.",
            smu_2:
                "Visual analysis showed a clear rise in DE&I-related language in the late 2010s compared with earlier decades.",
            role_beng: "BEng in Computer Science, minor in Statistics",
            when_beng: "Sep 2019 – Jun 2023",
            ta: "<strong>Teaching Assistant:</strong> COMP1117 / ENGG1330, Introduction to Programming in Python, Fall 2020 and Spring 2021.",
            award_1: "HKU Entrance Scholarship for Outstanding Academic Talents (USD 21,000)",
            award_2: "HKU Entrance Foundation Scholarship (USD 63,000)",
            award_3: "HKU Dean’s Fund for Research (USD 3,200)",
            award_4: "HKU-CS Research Scholarship (USD 2,300)",
            award_5: "MITACS Globalink Research Scholarship (USD 2,200)",
            thesis_note: "Undergraduate thesis.",
            disclaimer:
                "<strong><em>Disclaimer:</em></strong> Opinions are my own and do not reflect those of my employer.",
            lang_label: "Switch to Bengali",
            theme_to_dark: "Use dark theme",
            theme_to_light: "Use light theme"
        },
        bn: {
            home: "হোম",
            blog: "ব্লগ",
            resume: "রেজিউমে",
            scholar: "স্কলার",
            place: "হংকং",
            halifax: "হ্যালিফ্যাক্স, কানাডা",
            about: "পরিচিতি",
            experience: "অভিজ্ঞতা",
            education: "শিক্ষা",
            awards: "পুরস্কার",
            publications: "প্রকাশনা",
            about_body:
                "হ্যালো, আমার নাম Sankalok (উচ্চারণ শন-কো-লক)। জটিল সমস্যা নিয়ে গভীরভাবে ভাবা, সহকর্মীদের সঙ্গে সম্ভাব্য সমাধান লিখে আলোচনা করা, আর কম্পিউটার ও সার্ভার নিয়ে খেলা করে সব উপলব্ধ রিসোর্স ব্যবহার করে ফেলা—এগুলোই আমার পছন্দ। মাঝে মাঝে প্রকাশও করার চেষ্টা করি।",
            role_l15: "L15 • ইঞ্জিনিয়ার এ",
            role_l14: "L14 • ইঞ্জিনিয়ার বি",
            team_itic: "আন্তঃবিষয়ক প্রযুক্তি উদ্ভাবন কেন্দ্র",
            team_theory: "থিওরি ল্যাব",
            when_huawei_now: "ডিসেম্বর ২০২৬ – বর্তমান",
            when_huawei_prev: "ফেব্রুয়ারি ২০২৪ – ডিসেম্বর ২০২৬",
            huawei_1:
                "তিনজন ইন্টার্নের একটি দলকে নেতৃত্ব দিয়ে টেক্সট ও মাল্টিমোডাল এমবেডিং, রির‍্যাঙ্কিং এবং OCR মডেলের প্রিফিল ও ডিকোড অপটিমাইজেশন, এবং Data Storage ও Consumer Business Group প্রোডাক্ট লাইনের জন্য স্বয়ংক্রিয় NPU কার্নেল-জেনারেশন পাইপলাইন পরিচালনা করেছি।",
            huawei_2:
                "প্রিফিল-শুধু মডেলের জন্য Ascend NPU-তে একটি সার্ভিং ইঞ্জিন তৈরি করেছি যা vLLM-Ascend ও TEI-কে ছাড়িয়ে যায়; পদ্ধতিটি Data Storage প্রোডাক্ট লাইনের জন্য vLLM-Ascend-এ গৃহীত হয়।",
            huawei_3:
                "Huawei ModelEngine V26.0-এ পুরো প্যাথলজি স্লাইড থেকে স্বয়ংক্রিয় ফিচার এক্সট্রাকশনের জন্য ViT-ভিত্তিক আর্কিটেকচার অপটিমাইজ করেছি, যা সাংহাইয়ের Ruijin Hospital-এর সঙ্গে ওপেন-সোর্স সহযোগিতা হিসেবে প্রকাশিত।",
            huawei_4:
                "রিট্রিভাল-অগমেন্টেড জেনারেশনের জন্য টেক্সট ও মাল্টিমোডাল নলেজ-গ্রাফ এক্সট্রাকশন পাইপলাইনে সহযোগিতা করেছি—হায়ারার্কিক্যাল গ্র্যানুলারিটি, সেলফ-রিপেয়ারিং ট্রিপলেট, ইলাস্টিক স্কিমা ইন্ডাকশন ও ইন্টেন্ট-চালিত এনটিটি–ইভেন্ট ডিসঅ্যামবিগুয়েশন সহ—এবং কাঁচা উৎস থেকে Data Storage প্রোডাক্ট লাইন ও Huawei MindSDK-এর জন্য একটি একীভূত মাল্টি-রিলেশন গ্রাফ তৈরি করেছি।",
            huawei_5:
                'ইন-মেমোরি ANN পদ্ধতি <a href="https://github.com/erikbern/ann-benchmarks">Knowledge Graph Neighbours (kgn)</a>-এ অবদান রেখেছি, যা টপ-৩ SOTA; ভেক্টর সার্চের জন্য হাইয়ারার্কিক্যাল ক্লাস্টারিং যোগ করে Terminal ও Cloud Storage প্রোডাক্ট লাইনের কোয়েরি থ্রুপুট বাড়িয়েছি।',
            role_jrs: "জুনিয়র রিসার্চ সায়েন্টিস্ট",
            role_intern: "রিসার্চ ইন্টার্ন",
            when_byq_jrs: "আগস্ট ২০২৩ – ফেব্রুয়ারি ২০২৪",
            when_byq_intern: "ডিসেম্বর ২০২২ – মে ২০২৩",
            byq_1:
                "ক্যান্সার ড্রাগ-রেজিস্ট্যান্স পূর্বাভাসের জন্য মিক্সচার-অফ-এক্সপার্টস স্ট্যাক তৈরি করে হংকং হাসপাতালের ওভারিয়ান ক্যান্সার সাবটাইপে পারফরম্যান্স উন্নত করেছি, যাতে চিকিৎসকরা কেমোথেরাপি সংমিশ্রণ বেছে নিতে পারেন।",
            byq_2:
                "ননপ্যারামেট্রিক স্ট্যাটিসটিক্যাল মডেলিং দিয়ে ওভারিয়ান ক্যান্সার ডেটাসেট মানক করেছি, যাতে ভিন্ন হার্ডওয়্যারের জেনেটিক এনকোডিং একসঙ্গে ব্যবহার করা যায়।",
            byq_3:
                "গবেষণার কর্মপ্রবাহ ব্যাখ্যা করে ডকুমেন্টেশন ও উপস্থাপনা লিখেছি বাইরের স্টেকহোল্ডারদের জন্য।",
            role_ra: "রিসার্চ অ্যাসিস্ট্যান্ট",
            when_hku_ra: "জুলাই ২০২২ – মে ২০২৩",
            hku_ra_1:
                "হংকংয়ের আইনি রায়ের জন্য একটি তথ্য-অনুসন্ধান পাইপলাইন তৈরি করেছি: HTML থেকে Markdown, তারপর কিওয়ার্ড এক্সট্রাকশন, টপিক মডেলিং ও ট্রান্সফর্মার সামারাইজেশন দিয়ে পরবর্তী অন্তর্দৃষ্টি ও সংশ্লিষ্ট নিয়ম খুঁজে বের করা।",
            when_lora: "জুন ২০২২ – জুলাই ২০২৩",
            lora_1:
                "সংবাদ-স্কাউটিং ETL পাইপলাইন ডিজাইন করেছি যা প্রাসঙ্গিকতা স্কোর করে, পুরনো আইটেম বাদ দেয়, এবং দ্রুত কলাম-ভিত্তিক বিশ্লেষণের জন্য ScyllaDB-তে স্থানান্তর করে।",
            lora_2:
                "ইন-হাউস সংবাদ থেকে ইকুইটি ও সূচকের জন্য রিগ্রেশন-ভিত্তিক মার্কেট-সেন্টিমেন্ট সূচক তৈরি করেছি, পরে খুচরা ট্রেডিং কার্যকলাপ পর্যবেক্ষণের জন্য।",
            role_mitacs: "MITACS গ্লোবালিংক রিসার্চ ইন্টার্ন",
            when_smu: "জুলাই ২০২১ – অক্টোবর ২০২১",
            smu_1:
                "Fortune 500 CSR রিপোর্ট পরিষ্কার, টপিক মডেলিং দিয়ে কিওয়ার্ড ব্যবহার বের এবং ফলাফল সংরক্ষণের একটি পাইপলাইন তৈরি করেছি।",
            smu_2:
                "ভিজ্যুয়াল বিশ্লেষণে দেখা গেছে আগের দশকের তুলনায় ২০১০-এর শেষভাগে DE&I-সম্পর্কিত ভাষার স্পষ্ট বৃদ্ধি।",
            role_beng: "কম্পিউটার সায়েন্সে বিইঞ্জ, স্ট্যাটিস্টিক্সে মাইনর",
            when_beng: "সেপ্টেম্বর ২০১৯ – জুন ২০২৩",
            ta: "<strong>শিক্ষাসহায়ক:</strong> COMP1117 / ENGG1330, পাইথনে প্রোগ্রামিংয়ের ভূমিকা, শরৎ ২০২০ ও বসন্ত ২০২১।",
            award_1: "HKU অসামান্য একাডেমিক প্রতিভার জন্য প্রবেশ বৃত্তি (USD ২১,০০০)",
            award_2: "HKU প্রবেশ ফাউন্ডেশন বৃত্তি (USD ৬৩,০০০)",
            award_3: "HKU ডিনস ফান্ড ফর রিসার্চ (USD ৩,২০০)",
            award_4: "HKU-CS রিসার্চ বৃত্তি (USD ২,৩০০)",
            award_5: "MITACS গ্লোবালিংক রিসার্চ বৃত্তি (USD ২,২০০)",
            thesis_note: "স্নাতক অভিসন্দর্ভ।",
            disclaimer:
                "<strong><em>দাবিত্যাগ:</em></strong> মতামত সম্পূর্ণ আমার নিজস্ব এবং নিয়োগকর্তার নয়।",
            lang_label: "ইংরেজিতে বদলান",
            theme_to_dark: "ডার্ক থিম ব্যবহার করুন",
            theme_to_light: "লাইট থিম ব্যবহার করুন"
        }
    };

    function read(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function write(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }

    function preferredTheme() {
        var stored = read(THEME_KEY, "");
        if (stored === "dark" || stored === "light") return stored;
        try {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch (e) {
            return "light";
        }
    }

    function preferredLang() {
        var stored = read(LANG_KEY, "");
        return stored === "bn" ? "bn" : "en";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "dark" ? "#12151c" : "#e6ebf4");
        var btn = document.getElementById("theme-toggle");
        var lang = document.documentElement.getAttribute("data-lang") || "en";
        var pack = STRINGS[lang] || STRINGS.en;
        if (btn) {
            btn.setAttribute("aria-label", theme === "dark" ? pack.theme_to_light : pack.theme_to_dark);
            btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        }
    }

    function applyLang(lang) {
        document.documentElement.setAttribute("data-lang", lang);
        document.documentElement.setAttribute("lang", lang === "bn" ? "bn" : "en");
        var pack = STRINGS[lang] || STRINGS.en;
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            var val = pack[key];
            if (val == null) return;
            if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = val;
            else el.textContent = val;
        });
        var langBtn = document.getElementById("lang-toggle");
        if (langBtn) {
            langBtn.setAttribute("aria-label", pack.lang_label);
            langBtn.setAttribute("aria-pressed", lang === "bn" ? "true" : "false");
        }
        var theme = document.documentElement.getAttribute("data-theme") || "light";
        var themeBtn = document.getElementById("theme-toggle");
        if (themeBtn) {
            themeBtn.setAttribute("aria-label", theme === "dark" ? pack.theme_to_light : pack.theme_to_dark);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var theme = preferredTheme();
        var lang = preferredLang();
        applyTheme(theme);
        applyLang(lang);

        var langBtn = document.getElementById("lang-toggle");
        if (langBtn) {
            langBtn.addEventListener("click", function () {
                var next = (document.documentElement.getAttribute("data-lang") || "en") === "bn" ? "en" : "bn";
                write(LANG_KEY, next);
                applyLang(next);
            });
        }

        var themeBtn = document.getElementById("theme-toggle");
        if (themeBtn) {
            themeBtn.addEventListener("click", function () {
                var next = (document.documentElement.getAttribute("data-theme") || "light") === "dark" ? "light" : "dark";
                write(THEME_KEY, next);
                applyTheme(next);
            });
        }
    });
})();
