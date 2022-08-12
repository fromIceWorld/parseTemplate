import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
export default [
    {
        input: 'index.ts',
        output: {
            file: './dist/index.js',
            format: 'es',
            name: 'parseTemplate',
        },
        strict: false,

        plugins: [
            resolve(),
            typescript({
                downlevelIteration: true,
                declaration: true,
                declarationMap: true,
            }),
        ],
    },
    {
        input: 'index.ts',
        output: {
            file: './dist/index.d.ts',
        },
        plugins: [dts()],
    },
    {
        input: 'index.ts',
        output: {
            file: './dist/umd/index.js',
            format: 'umd',
            name: 'parseTemplate',
        },
        strict: false,

        plugins: [
            resolve(),
            typescript({
                downlevelIteration: true,
                declaration: true,
                declarationMap: true,
            }),
        ],
    },
];
