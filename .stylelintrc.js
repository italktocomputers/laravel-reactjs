module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
    overrides: [
        {
            files: 'src/**/*.{css,scss}',
            rules: {
                'length-zero-no-unit': true,
                'at-rule-no-unknown': null,
                'selector-pseudo-class-no-unknown': null,
                'declaration-empty-line-before': null,
                'selector-class-pattern': null,
                'scss/no-global-function-names': null,
                'scss/operator-no-newline-after': null,
            },
        },
    ],
};
