export const ExactCardImg = (cardName) => {
    const allCardImgName = [
        'amazon',
        'steam',
        'best buy',
        'itunes',
        'walmart',
        'sephora',
        'american express',
        'ebay',
        'gamestop',
        'google play',
        'greendot',
        'macy',
        'playstation',
        'sephora',
        'nike',
        'razer gold',
        'sephora',
        'target',
        'xbox',
    ]
    // let exactImg = null;
    // let card = this.card.card.name;
    const exactName = allCardImgName.find(
        (image) => image.toLowerCase().indexOf(cardName.toLowerCase()) >= 0
    )
    return exactName === undefined ? 'Logo1' : exactName
    // if (exactName === undefined) {
    //     return 'Logo1'
    // } else {
    //     return exactName;
    // }
}
