module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/SCSS/global.scss";`
            }
        }
    }
};
