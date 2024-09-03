export default[
    {
        name:'Practice Question Generator',
        desc:'An AI tool that generates practice question on the given topic',
        icon:'https://cdn-icons-png.flaticon.com/128/9425/9425585.png',
        aiPrompt:'Give me practice questions only based on given topic and give results in Rich Text Editor format',
        slug:"generate-practice-questions",
        form:[
            {
                label:'Enter your topic',
                field:'input',
                name:"topic",
                required:true
            }
        ]
    },
    {
        name:'Topic Explainer',
        desc:'An AI tool that can help understand complex questions and provide accurate, context-aware answers',
        icon:'https://cdn-icons-png.flaticon.com/128/4173/4173104.png',
        aiPrompt:'Give me an in-depth explanation on the topic and give results in Rich Text Editor format',
        slug:"generate-explanation",
        form:[
            {
                label:'Enter your topic',
                field:'input',
                name:"topic",
                required:true
            }
        ]
    },
    {
        name:'Summarizer',
        desc:'An AI tool that generates a summary of long articles, textbooks, or notes',
        icon:'https://cdn-icons-png.flaticon.com/128/684/684831.png',
        aiPrompt:'Give me a summary only based on the given text and give results in Rich Text Editor format',
        slug:"generate-summary",
        form:[
            {
                label:'Enter your text',
                field:'textarea',
                name:"text",
                required:true
            }
        ]
    },
    {
        name:'Paraphraser',
        desc:'An AI tool that paraphrases given text',
        icon:'https://cdn-icons-png.flaticon.com/128/7468/7468450.png',
        aiPrompt:'Give me a reparaphrased version of the given text and give results in Rich Text Editor format',
        slug:"generate-paraphrased-text",
        form:[
            {
                label:'Enter your text',
                field:'textarea',
                name:"text",
                required:true
            }
        ]
    }

]