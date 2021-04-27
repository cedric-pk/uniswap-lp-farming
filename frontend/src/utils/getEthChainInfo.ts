export const getEthChainInfo = () => {
    let chainId: number = 42;
    let rpcUrl: string = 'https://kovan.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
    let ethscanType: string = 'kovan.';
    const href = window.location.href;
    if (/\/\/farm.erc20.io/.test(href)) {
         chainId = 1;
         rpcUrl = 'https://mainnet.infura.io/v3/e707b58edfd7437cbb6e9079c259eda7/';
         ethscanType = '';
    }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
