const cppExamples = [
    // (for, if, while, array) ...
    {
        keyword: "switch",
        title: " Switch Case",
        description: "تستخدم لتخفيف استخدام if المتعددة واختيار حالة من عدة حالات.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 2;\n    switch(day) {\n        case 1: cout << "السبت"; break;\n        case 2: cout << "الأحد"; break;\n        default: cout << "يوم آخر";\n    }\n    return 0;\n}`
    },
    {
        keyword: "pointer",
        title: " Pointers",
        description: "متغيرات خاصة تستخدم لتخزين عنوان ذاكرة متغير آخر.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int* ptr = &x;\n    cout << "قيمة x: " << x << endl;\n    cout << "عنوان x في الذاكرة: " << ptr << endl;\n    return 0;\n}`
    }
];


// 1. قاعدة بيانات الأمثلة الخاصة بك
const cppExamples = [
    {
        keyword: "for",
        title: " For Loop",
        description: "تستخدم لتكرار تنفيذ كتلة برمجية عدد محدد من المرات.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for(int i = 1; i <= 5; i++) {\n        cout << "الرقم: " << i << endl;\n    }\n    return 0;\n}`
    },
    {
        keyword: "if",
        title: "If Statement",
        description: "تستخدم لاتخاذ قرار وتنفيذ كود معين إذا تحقق شرط محدد.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int grade = 85;\n    if(grade >= 50) {\n        cout << "ناجح!" << endl;\n    } else {\n        cout << "راسب!" << endl;\n    }\n    return 0;\n}`
    },
    {
        keyword: "while",
        title: "While Loop",
        description: "تكرر تنفيذ الكود طالما أن الشرط المكتوب يحقق القيمة (True).",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 1;\n    while(count <= 3) {\n        cout << "العداد: " << count << endl;\n        count++;\n    }\n    return 0;\n}`
    },
    {
        keyword: "array",
        title: " Arrays",
        description: "تستخدم لتخزين مجموعة من القيم من نفس النوع في متغير واحد.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int numbers[3] = {10, 20, 30};\n    cout << "العنصر الأول: " << numbers[0] << endl;\n    return 0;\n}`
    }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');


function displayExamples(examplesToDisplay) {
    resultsContainer.innerHTML = "";
    
    if (examplesToDisplay.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; color: #94a3b8;">لم يتم العثور على أي مثال مطابق...</p>`;
        return;
    }

    examplesToDisplay.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <pre><code>${item.code}</code></pre>
        `;
        resultsContainer.appendChild(card);
    });
}


displayExamples(cppExamples);

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    
  
    const filtered = cppExamples.filter(item => 
        item.keyword.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
    );
    

    displayExamples(filtered);
});
