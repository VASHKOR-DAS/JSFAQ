nums = [5, 12, 89, 45, 18, 8];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if(num % 2 == 0) {
        console.log(num, ': is even number');
        //even number holo jor number
    }
    else{
        //console.log(num, ': is odd number');
        //odd number holo bijor number

        //jodi odd guloke 2 dara gun korte chai tobe
        console.log(num*2, ': is odd number');
    }
}


//jodi akadhik kaj bar bar kora lage tobe function use korte hoy

function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (num % 2 == 0) {
            console.log(num, ': is even number')
        } else {
            console.log(num, ': is odd number');
        }
    }
}

nums = [5, 12, 89, 45, 18, 8];
evenify_all(nums);



//amr friends gulor nam konta jor konta bijor ber korte abar loop lekha lagto but ata function likhar jonno r lage ni

friend_age = [20, 21, 22, 23, 25, 26];
evenify_all(friend_age);