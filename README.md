# The Challenge



with a lot of searching, debugging errors, finally i did it!!!!

i found similar thing to this, wrote that code but didn't work at all..
then from scratchs and tons of errors at last i did it  on 01:10 a.m !

the hardest part of this challenge was the animation that drawer does when you click burger menu,
rest of the code was just UI issues and styling. i had in my practise similar animated issue but not 
on drawer tho, it was on input labels, when you focus the input label was going up like a header and 
was highlited. it was floating input found the code, it goes like this : 

const labelContainerStyle = {
      top: isAnimatedFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [12, -7],
      }),
    };

    const labelStyle = {
      fontSize: isAnimatedFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 13],
      }),
    };
you should control the input and output range, thats the main thing.