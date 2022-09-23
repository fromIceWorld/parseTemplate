import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
export default [
    {
        input: 'index.ts',
        output: [
            {
                file: './lib/esm/index.js',
                format: 'esm',
                name: 'parse-html-template',
            },
            {
                file: './lib/umd/index.js',
                format: 'umd',
                name: 'parse-html-template',
            },
            {
                file: './lib/cjs/index.js',
                format: 'cjs',
                name: 'parse-html-template',
            },
            {
                file: './lib/index.js',
                format: 'umd',
                name: 'parse-html-template',
            },
        ],
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
            file: './lib/index.d.ts',
        },
        plugins: [dts()],
    },
    {
        input: 'index.ts',
        output: [
            {
                file: './lib/bundles/parse-html-template.umd.min.js',
                format: 'umd',
                name: 'parse-html-template',
            },
        ],
        strict: false,
        plugins: [
            resolve(),
            typescript({
                downlevelIteration: true,
                declaration: true,
                declarationMap: true,
            }),
            terser(),
        ],
    },
];
