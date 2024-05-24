console.clear();
const NFTS = []

function mintNFT(githubUsername, starsEarned, totalCommits, totalPrs, totalIssues){
    const NFT = {
      githubUser: githubUsername,
      stars: starsEarned,
      commits: totalCommits,
      prs: totalPrs,
      issues: totalIssues 
    }
    console.log("Minted: " + githubUsername)
    NFTS.push(NFT);
}


function listNFTS(){
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i])
    }
}

function getTotalSupply(){
    console.log("Total NFT's: " + NFTS.length)
}

mintNFT("Moinak Niyogi", 17, 441, 36, 47);
mintNFT("Aditya Sinha", 17, 441, 36, 47);
mintNFT("Saurav Saha", 17, 441, 36, 47);




listNFTS();
getTotalSupply()

//The provided JavaScript code initializes an empty array NFTS to store NFTs and defines three functions: mintNFT, listNFTS, and getTotalSupply. 
//The mintNFT function creates an NFT object with properties such as githubUser, stars, commits, prs, and issues from the provided parameters, 
//logs a message indicating the NFT minting, and adds the NFT to the NFTS array. The listNFTS function iterates over the NFTS array and logs each NFT's 
//details in a table format using console.table(). The getTotalSupply function logs the total number of NFTs by outputting the length of the NFTS array.
// The code demonstrates minting three NFTs with example data and subsequently lists all minted NFTs and logs the total supply.




