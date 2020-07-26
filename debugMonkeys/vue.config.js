const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: config => {
    // プロダクトモードでのみ追加
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // ★ Prerender SPA Plugin を登録
          new PrerenderSPAPlugin({
            // 出力先 dist や www など
            staticDir: path.join(__dirname, 'dist'),
            // 生成したいページ
            routes: [ '/', '/detail/intocube', '/detail/nabedaikan', '/detail/streets','/detail/zombie', '/detail/banana', '/detail/osumo', '/detail/qubism', '/detail/wacryll' ],
            postProcess (renderedRoute) {
                const titles = {
                    '/': 'デバッグモンキーズ公式サイト｜ボードゲーム販売中！',
                    '/detail/intocube': 'いんときゅーぶ｜デバッグモンキーズ公式サイト',
                    '/detail/nabedaikan': '鍋代官｜デバッグモンキーズ公式サイト',
                    '/detail/streets': 'STREET PICKPOCKETs 7｜デバッグモンキーズ公式サイト',
                    '/detail/zombie': 'ゾンビパニックとライフルおじさん｜デバッグモンキーズ公式サイト',
                    '/detail/banana': 'Bana-na｜デバッグモンキーズ公式サイト',
                    '/detail/osumo': 'OSUMO｜デバッグモンキーズ公式サイト',
                    '/detail/qubism': 'Qubism｜デバッグモンキーズ公式サイト', 
                    '/detail/wacryll': 'Wacryll｜デバッグモンキーズ公式サイト'
                }
                renderedRoute.html = renderedRoute.html.replace(
                  /<title>[^<]*<\/title>/i,
                  '<title>' + titles[renderedRoute.route] + '</title>'
                )
                return renderedRoute
              }
          })
        ]
      }
    }
  }
}