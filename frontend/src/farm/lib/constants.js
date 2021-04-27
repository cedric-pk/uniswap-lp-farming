export const contractAddresses = {
  erc20: {
    42: '0xAdA673d512415c98e04C068A3b50022B2696cCCE',
    1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3',
  },
  farm: {
    42: '0x8389Fa19f7276B489ed0268bCeebfa24325EaD6D',
    1: '0xbfd181cb0c8e23b65805dded3863dce6517402a7',
  },
  weth: {
    42: '0xa050886815cfc52a24b9c4ad044ca199990b6690',
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0x2e4c125f3c2baefd71c9100601caa13a198cc008',
      1: '0x856e90282961c0e7f6693fd2f62b35d5df9783cf',
    },
    tokenAddresses: {
      42: '0xAdA673d512415c98e04C068A3b50022B2696cCCE',
      1: '0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3',
    },
    name: 'ERC20-ETH',
    symbol: 'ERC20-ETH UNI-V2 LP',
    tokenSymbol: 'ERC20',
    icon: '',
    pool: '100%',
  }
]
