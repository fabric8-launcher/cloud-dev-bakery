const path = require('path');

module.exports = {
    propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {}).parse,
    require: [path.join(__dirname, 'node_modules/@patternfly/react-core/dist/styles/base.css')],
    getExampleFilename(componentPath) {
        return componentPath.replace(/\/([^\/]*)\.tsx?$/, '/__examples__/$1.md')
    },
    webpackConfig: require('react-scripts/config/webpack.config.js'),
    exampleMode: 'collapse',
    usageMode: 'collapse',
    pagePerSection: true,
    sections: [
        {
            name: 'generic-components',
            components: 'src/shared/components/**/*.tsx',
        },
        {
            name: 'wizard-components',
            components: 'src/app/components/wizard/**/*.tsx',
        }
    ],
};