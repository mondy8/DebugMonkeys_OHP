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
            routes: [ '/', '/detail/nabedaikan', '/detail/streets','/detail/zombie', '/detail/banana', '/detail/osumo', '/detail/qubism', '/detail/wacryll' ],
            postProcess (renderedRoute) {
                const titles = {
                    '/': 'デバッグモンキーズ公式サイト｜ボードゲーム販売中！',
                    '/detail/nabedaikan': '鍋代官｜デバッグモンキーズ',
                    '/detail/streets': 'STREET PICKPOCKETs 7｜デバッグモンキーズ',
                    '/detail/zombie': 'ゾンビパニックとライフルおじさん｜デバッグモンキーズ',
                    '/detail/banana': 'Bana-na｜デバッグモンキーズ',
                    '/detail/osumo': 'OSUMO｜デバッグモンキーズ',
                    '/detail/qubism': 'Qubism｜デバッグモンキーズ', 
                    '/detail/wacryll': 'Wacryll｜デバッグモンキーズ'
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