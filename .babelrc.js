module.exports = {
    presets: [
        [
            '@babel/preset-react'
        ],
        [
            '@babel/preset-env',
                {
                targets: {
                    esmodules: true,
                    },
                },
        ],
    ],
};
