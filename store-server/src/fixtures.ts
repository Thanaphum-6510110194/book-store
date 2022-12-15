import db from "./db";

async function loadFixtures(clearData = false) {
    if(clearData){
        console.warn('clearing data')
        await db('category').del()
    }
    
    await db.batchInsert('category',[
        {id: 1,title : 'Drama'},
        {id: 2,title : 'Programming'}
    ])
}

export default loadFixtures