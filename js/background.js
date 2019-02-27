function getPreview(url) {
    return new Promise(resolve => {
        const img = new Image();
        if(!url) return resolve(null);
        img.src = 'https://mini.s-shot.ru/1366x890/400/jpeg/?' + url;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const preview = canvas.toDataURL('image/jpeg');
            resolve(preview);
        };
        img.onerror = () => resolve(null);
    });
}

function initBookmarks() {
    chrome.topSites.get(data => {
        let bookmarks = data
            .filter(item => item.url.slice(0, 6) !== 'chrome' && !item.url.includes('localhost'))
            .slice(0, 10)
            .map((item, id) => ({id, url: item.url, title: item.title || '', img  : ''}));

        chrome.storage.local.set({bookmarks});

        const promises = bookmarks.map(item => getPreview(item.url));

        Promise.all(promises).then(previews => {
            bookmarks = bookmarks.map((b ,i) => {
                b.img = previews[i];
                return b;
            });
            chrome.storage.local.set({bookmarks});
            chrome.runtime.sendMessage({action: 'reload-storage'});
        });
    });
}

chrome.browserAction.onClicked.addListener(() => chrome.tabs.create({}));

chrome.runtime.onInstalled.addListener(e => {
    if(e.reason === 'install') initBookmarks();
});

chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        id: 'newtab_utilsExtDownloadMenuItem',
        title: 'Pin ' + chrome.i18n.getMessage('name'),
        contexts: ['page', 'link'],
        onclick: function (info, tab) {
            if (info.pageUrl.includes('chrome-extension') || info.pageUrl.includes('chrome://')) return false;

            if (info.linkUrl) {
                const url = info.linkUrl;
                const saved_url = encodeURIComponent(url);
                chrome.tabs.create({ url: '/newtab.html?url=' + saved_url, active: true });

            } else if (info.pageUrl) {
                const url = info.pageUrl;
                const title = tab.title;
                const saved_url = encodeURIComponent(url);
                chrome.tabs.create({
                    url: '/newtab.html?url=' + saved_url + '&title=' + title,
                    active: true,
                });
            }
        },
    });
});
