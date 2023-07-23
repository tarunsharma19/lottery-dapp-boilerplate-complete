// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import {tezos} from "./tezos"

export const buyTicketOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6");
        const op =await contract.methods.buy_ticket().send({
            amount: 1,
            mutez: false,
        })
        await op.confirmation(1);
    }
    catch(err){
        throw err;
    }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
    try{
        console.log("inside func")
        const contract = await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6")
        const random_number = Math.round(Math.random() * 10000000)
        console.log("contract found")
        const op = await contract.methods.end_game(random_number).send()
        console.log("op sent")

        await op.confirmation(1)
    }
    catch (err){
        throw err;
    }
};
