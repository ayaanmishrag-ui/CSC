// 50+ सीएससी और सरकारी सर्विसेज की लिस्ट
const servicesList = [
    { name: "पैन कार्ड नया/सुधार", fee: 100, icon: "fa-address-card", desc: "नया पैन कार्ड बनवाएं या करेक्शन कराएं।" },
    { name: "आधार कार्ड प्रिंट/PVC", fee: 50, icon: "fa-id-card", desc: "पीवीसी आधार कार्ड या नॉर्मल आधार प्रिंट निकालें।" },
    { name: "आयुष्मान भारत कार्ड", fee: 50, icon: "fa-file-lines", desc: "आयुष्मान गोल्डन कार्ड डाउनलोड और प्रिंट।" },
    { name: "वोटर आईडी कार्ड प्रिंट", fee: 50, icon: "fa-address-book", desc: "नया मतदाता पहचान पत्र या डिजिटल वोटर कार्ड।" },
    { name: "आय प्रमाण पत्र", fee: 120, icon: "fa-file-invoice", desc: "तहसील द्वारा जारी आय प्रमाण पत्र आवेदन।" },
    { name: "जाति प्रमाण पत्र", fee: 120, icon: "fa-file-shield", desc: "जाति प्रमाण पत्र ऑनलाइन आवेदन व प्रिंट।" },
    { name: "निवास प्रमाण पत्र", fee: 120, icon: "fa-house-chimney", desc: "मूल निवास प्रमाण पत्र सेवा।" },
    { name: "राशन कार्ड सूची / नया नाम", fee: 40, icon: "fa-book-open", desc: "राशन कार्ड विवरण व नया नाम जुड़वाने हेतु।" },
    { name: "ड्राइविंग लाइसेंस (DL)", fee: 150, icon: "fa-car", desc: "लर्निंग लाइसेंस, नया डीएल या रिन्यूअल।" },
    { name: "बिजली बिल भुगतान", fee: 20, icon: "fa-bolt", desc: "घर बैठे किसी भी राज्य का बिजली बिल जमा करें।" },
    { name: "श्रम कार्ड (e-Shram)", fee: 30, icon: "fa-user-tie", desc: "असंगठित क्षेत्र के श्रमिकों का ई-श्रम कार्ड पंजीयन।" },
    { name: "पासपोर्ट आवेदन", fee: 250, icon: "fa-passport", desc: "नया पासपोर्ट ऑनलाइन रजिस्ट्रेशन और अपॉइंटमेंट।" },
    { name: "किसान सम्मान निधि", fee: 40, icon: "fa-seedling", desc: "पीएम किसान स्टेटस चेक और ई-केवाईसी।" },
    { name: "फास्टैग (FASTag) सेवा", fee: 100, icon: "fa-truck-fast", desc: "नया फास्टैग रिचार्ज और वाहन पंजीयन।" },
    { name: "रेलवे टिकट बुकिंग (IRCTC)", fee: 50, icon: "fa-train", desc: "जनरल, स्लीपर और एसी ट्रेन टिकट बुकिंग।" },
    { name: "उज्ज्वला गैस कनेक्शन", fee: 60, icon: "fa-fire-burner", desc: "फ्री गैस सिलेंडर योजना के लिए नया आवेदन।" },
    { name: "प्रधानमंत्री आवास योजना", fee: 50, icon: "fa-building", desc: "ग्रामीण/शहरी आवास योजना सूची व फॉर्म।" },
    { name: "जन्म प्रमाण पत्र (Birth Cert)", fee: 100, icon: "fa-baby", desc: "नया जन्म प्रमाण पत्र पंजीकरण व डाउनलोड।" },
    { name: "मृत्यु प्रमाण पत्र (Death Cert)", fee: 100, icon: "fa-file-circle-xmark", desc: "मृत्यु प्रमाण पत्र के लिए ऑनलाइन आवेदन।" },
    { name: "छात्रवृत्ति फॉर्म (Scholarship)", fee: 80, icon: "fa-graduation-cap", desc: "विभिन्न कक्षाओं के छात्रवृत्ति फॉर्म ऑनलाइन।" },
    { name: "पासपोर्ट साइज फोटो प्रिंट", fee: 30, icon: "fa-image", desc: "इमीडिएट पासपोर्ट साइज फोटो शीट प्रिंट।" },
    { name: "कलर प्रिंट आउट (प्रति पेज)", fee: 10, icon: "fa-print", desc: "हाई क्वालिटी रंगीन प्रिंटआउट।" },
    { name: "ब्लैक एंड व्हाइट प्रिंट", fee: 5, icon: "fa-file-pdf", desc: "दस्तावेजों का सादा प्रिंटआउट।" },
    { name: "दस्तावेज़ स्कैनिंग (Scanning)", fee: 10, icon: "fa-scanner-image", desc: "किसी भी डॉक्यूमेंट को पीडीएफ या जेपीजी में स्कैन करना।" },
    { name: "लैमिनेशन (Lamination)", fee: 20, icon: "fa-id-badge", desc: "आईडी कार्ड और कागजातों की पक्की लैमिनेशन।" },
    { name: "खसरा खतौनी / भूलेख नकल", fee: 30, icon: "fa-map", desc: "जमीन के कागजात, खसरा और खतौनी नकल।" },
    { name: "वाहन रजिस्ट्रेशन विवरण (RC)", fee: 30, icon: "fa-motorcycle", desc: "गाड़ी की आरसी डिटेल्स और ओनरशिप चेक।" },
    { name: "मोटर इंश्योरेंस रिन्यूअल", fee: 100, icon: "fa-shield-halved", desc: "बाइक, कार और कमर्शियल गाड़ियों का बीमा।" },
    { name: "पेन कार्ड करेक्शन", fee: 100, icon: "fa-pen-to-square", desc: "पैन कार्ड में नाम, डीओबी या फोटो सुधार।" },
    { name: "वोटर आईडी करेक्शन", fee: 50, icon: "fa-user-pen", desc: "वोटर कार्ड में पता या नाम अपडेट।" },
    { name: "आधार कार्ड मोबाइल लिंक", fee: 50, icon: "fa-mobile-screen", desc: "आधार कार्ड से जुड़ी अपडेट सेवाएं।" },
    { name: "नरेगा जॉब कार्ड लिस्ट", fee: 20, icon: "fa-hands-holding-child", desc: "मनरेगा जॉब कार्ड विवरण और भुगतान सूची।" },
    { name: "पेंशन योजना आवेदन", fee: 60, icon: "fa-person-cane", desc: "वृद्धा, विधवा और विकलांग पेंशन आवेदन।" },
    { name: "प्रधानमंत्री श्रम योगी मानधन", fee: 40, icon: "fa-piggy-bank", desc: "असंगठित कामगार पेंशन योजना पंजीयन।" },
    { name: "उद्योग आधार / एमएसएमई", fee: 150, icon: "fa-industry", desc: "छोटें व्यवसायों के लिए एमएसएमई रजिस्ट्रेशन।" },
    { name: "फ़ूड लाइसेंस (FSSAI)", fee: 200, icon: "fa-utensils", desc: "खाद्य पदार्थों की दुकान/रेस्टोरेंट का लाइसेंस।" },
    { name: "जीएसटी (GST) रजिस्ट्रेशन", fee: 300, icon: "fa-file-invoice-dollar", desc: "नया जीएसटी नंबर पंजीकरण।" },
    { name: "आईटीआर (ITR) फाइलिंग", fee: 399, icon: "fa-calculator", desc: "इन्कम टैक्स रिटर्न फाइल करना।" },
    { name: "क्रेडिट कार्ड आवेदन", fee: 50, icon: "fa-credit-card", desc: "विभिन्न बैंकों के क्रेडिट कार्ड के लिए अप्लाई।" },
    { name: "बैंक खाता खोलना (BC)", fee: 50, icon: "fa-building-columns", desc: "नया सेविंग या करंट बैंक अकाउंट सहायता।" },
    { name: "मनी ट्रांसफर (DMT)", fee: 30, icon: "fa-money-bill-transfer", desc: "किसी भी बैंक खाते में तुरंत पैसे भेजना।" },
    { name: "मोबाइल रिचार्ज", fee: 10, icon: "fa-mobile-button", desc: "प्रीपेड और पोस्टपेड मोबाइल रिचार्ज।" },
    { name: "डीटीएच (DTH) रिचार्ज", fee: 10, icon: "fa-tv", desc: "Tata Play, Airtel Digital TV रिचार्ज।" },
    { name: "एलपीजी गैस बुकिंग", fee: 20, icon: "fa-fire", desc: "इंडेन, एचपी और भारत गैस सिलिंडर बुकिंग।" },
    { name: "होटल बुकिंग", fee: 100, icon: "fa-hotel", desc: "ऑनलाइन होटल रूम बुकिंग सेवा।" },
    { name: "बस टिकट बुकिंग", fee: 50, icon: "fa-bus", desc: "प्राइवेट और सरकारी बसों की टिकट बुकिंग।" },
    { name: "फ्लाईट टिकट बुकिंग", fee: 150, icon: "fa-plane", desc: "घरेलू और अंतरराष्ट्रीय उड़ान टिकट।" },
    { name: "पुलिस कैरेक्टर सर्टिफिकेट", fee: 150, icon: "fa-user-shield", desc: "पुलिस सत्यापन प्रमाण पत्र ऑनलाइन आवेदन।" },
    { name: "लेबर रजिस्ट्रेशन (श्रम विभाग)", fee: 100, icon: "fa-hammer", desc: "भवन निर्माण और अन्य कामगार पंजीकरण।" },
    { name: "डिजीलोकर सहायता", fee: 30, icon: "fa-folder-open", desc: "डिजिटल डॉक्यूमेंट्स डाउनलोड और सेटअप।" }
];

// पेज लोड होने पर सर्विसेज दिखाना (यदि कंटेनर मौजूद हो)
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('serviceGridContainer')) {
        displayServices(servicesList);
    }
});

// सर्विसेज को ग्रिड में रेंडर करना
function displayServices(list) {
    let gridContainer = document.getElementById('serviceGridContainer');
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    list.forEach(service => {
        let card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <i class="fa-solid ${service.icon} service-icon"></i>
            <h3>${service.name}</h3>
            <p>${service.desc}</p>
            <button class="btn-card" onclick="openOrderForm('${service.name}', ${service.fee})">आवेदन करें (₹${service.fee})</button>
        `;
        gridContainer.appendChild(card);
    });
}

// पॉप-अप फॉर्म खोलना
function openOrderForm(serviceName, fee) {
    let sService = document.getElementById('selectedService');
    let sFee = document.getElementById('serviceFee');
    let modal = document.getElementById('orderModal');

    if (sService) sService.value = serviceName;
    if (sFee) sFee.innerText = '₹' + fee;
    if (modal) modal.style.display = 'flex';
}

// पॉप-अप बंद करना
function closeOrderForm() {
    let modal = document.getElementById('orderModal');
    if (modal) modal.style.display = 'none';
}

// गूगल शीट और व्हाट्सएप पर डेटा सबमिट करना
function submitToGoogleSheet(e) {
    e.preventDefault();
    
    let name = document.getElementById('custName').value;
    let phone = document.getElementById('custPhone').value;
    let service = document.getElementById('selectedService').value;
    let txn = document.getElementById('paymentTxn') ? document.getElementById('paymentTxn').value : "NA";
    let details = document.getElementById('custDetails').value;
    let fee = document.getElementById('serviceFee') ? document.getElementById('serviceFee').innerText : "₹0";

    // आपका गूगल ऐप्स स्क्रिप्ट वेब एप यूआरएल
    let googleSheetURL = "https://script.google.com/macros/s/AKfycbykOCtwCP6zNHm6vQbM_kB8FLVNZovcpzdyq2_vYid_95SV2foBE8m125kAqkyxda0p/exec";

    let orderData = {
        service: service,
        name: name,
        phone: phone,
        details: details,
        txn_id: txn
    };

    // 1. गूगल शीट में बैकग्राउंड रिक्वेस्ट भेजना
    fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
    }).catch(err => console.log("Google Sheet Error:", err));

    // 2. व्हाट्सएप पर मैसेज भेजना
    let myNumber = "917355719608"; 
    let message = "नया ऑर्डर प्राप्त हुआ है!%0A%0A" +
                  "*सर्विस:* " + encodeURIComponent(service) + "%0A" +
                  "*राशि:* " + encodeURIComponent(fee) + "%0A" +
                  "*ग्राहक नाम:* " + encodeURIComponent(name) + "%0A" +
                  "*मोबाइल:* " + encodeURIComponent(phone) + "%0A" +
                  "*विवरण:* " + encodeURIComponent(details) + "%0A" +
                  "*Txn ID:* " + encodeURIComponent(txn);

    let whatsappURL = "https://api.whatsapp.com/send?phone=" + myNumber + "&text=" + message;

    alert("आपका ऑर्डर सबमिट हो गया है! व्हाट्सएप पर रीडायरेक्ट किया जा रहा है...");
    window.location.href = whatsappURL;

    let form = document.getElementById('orderForm');
    if (form) form.reset();
    closeOrderForm();
}

// लाइव सर्च सर्विस फंक्शन
function searchService() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let filteredList = servicesList.filter(service => 
        service.name.toLowerCase().includes(input) || service.desc.toLowerCase().includes(input)
    );
    displayServices(filteredList);
}
