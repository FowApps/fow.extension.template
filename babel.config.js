// eslint-disable-next-line func-names
module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            '@babel/preset-env',
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                },
            ],
        ],
    };
};
