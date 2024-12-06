export const deleveryOptions=[{
    id:'1',
    deleveryDays:7,
    priceCents:0
},
{
    id:'2',
    deleveryDays:3,
    priceCents:499
},
{
    id:'3',
    deleveryDays:1,
    priceCents:999
}];

export function getDeleveryOption(deleveryOptionId){ let deleveryOption;

deleveryOptions.forEach((Option) => {
   if(Option.id===deleveryOptionId){
       deleveryOption=Option;
   }
   
});
return deleveryOption || deleveryOptions[0];}