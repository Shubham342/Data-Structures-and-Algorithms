var twoSum = function(nums, target) {
    const obj = {};
    for (let i =0; i < nums.length; i++){
        const res = target - nums[i];
        if(Object.keys(obj).includes(String(nums[i]))){
            return [i, obj[nums[i]]];
        }else{
            obj[res] = i;
        }
    }
};