import reactImage from './assets/react.svg'
import vitaImage from '/vite.svg'

export const CORE_CONCEPTS = [
    {
        Image: reactImage,

    },
    {
        Image: vitaImage,

        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    }
];

export const EXAMPLES = {
    Components: {
        title: 'Components',
        description: 'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
        code: `
            function Welcome() {
            return <h1>Hello, World!</h1>;
            }`,
    },
    Jsx: {
        title: 'JSX',
        description: 'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
        code: `
           <div>
                <h1>Welcome {userName}</h1>
                <p>Time to learn React!</p>
            </div>`
    },
   
}

