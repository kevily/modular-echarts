import * as path from 'path'
import { Engine, rollup, tsc } from '1k-tasks'

async function build(lib: string) {
    const root = path.join(process.cwd(), 'packages', lib)
    const ignore = ['**/*.{dts,test,types,type}.ts', '**/*.stories.*']
    const workDir = 'src'
    const dest = 'dist'
    const task = new Engine()
    task.registry('rollup', rollup.buildReact, {
        root,
        workDir,
        input: '**/*.{ts,tsx}',
        outputDir: dest,
        ignore
    })
    task.registry('tsc', tsc, { root })
    task.run({ sync: true, tip: `buliding ${lib}...` })
}

build('modular-echarts')
