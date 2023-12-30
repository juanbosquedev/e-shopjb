 export const productRatings = (data:any):number=>data.reviews.reduce((acc:number,item:any)=> item.rating + acc, 0)/data.reviews.length;
 