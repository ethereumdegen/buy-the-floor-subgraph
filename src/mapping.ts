import { BuyTheFloor, SignatureBurned } from '../generated/BuyTheFloorContract/BuyTheFloorContract'
import { BoughtTheFloor, BurnedSignature } from '../generated/schema'

export function handleNewBoughtTheFloor(event: BuyTheFloor): void {
   
  let bought = new BoughtTheFloor(event.transaction.hash.toHexString())
  bought.bidderAddress = event.params.bidderAddress
  bought.sellerAddress = event.params.sellerAddress
  bought.nftContractAddress = event.params.nftContractAddress
  bought.currencyTokenAddress = event.params.currencyTokenAddress
  bought.currencyTokenAmount = event.params.currencyTokenAmount
  bought.blockNumber = event.block.number
  bought.save()
 
}

export function handleBurnedSignature(event: SignatureBurned): void {
 

  let sig = new BurnedSignature(event.transaction.hash.toHexString())
  sig.bidderAddress = event.params.bidderAddress
  sig.hash = event.params.hash



  sig.save()

 /* let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()*/
}

/*
type BoughtTheFloor @entity {
  id: ID!
  bidder: Address!
  seller: Address! 
  nftContractAddress: Address!
  currencyTokenAddress: Address!
  currencyTokenAmount: Integer! 
}

type SignatureBurned @entity {
  id: ID!
  bidder: Address!
  hash: Bytes32!  
}
*/