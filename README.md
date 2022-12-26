Project Link:

https://50-projects-15-days.vercel.app/
![img](https://lh6.googleusercontent.com/tJLT4wCGCzw3nXgc8Dy6X5nrnqQZ_LxN1tt2x77VtqAGU9OTszbBPisZ9-OoEcX8aRqbqG01v4PiMwKh7JpVQbBpGkmefIwMjAN-p175hfL7tBb3QyK1B00OrTU1BoAVQmuebbSM1TFm5opSR1r9CRv7kX9PrrcjUlDdZqO2pZRXCiCG11ylP4WkxDnF)![img](https://lh4.googleusercontent.com/gRL_rbAizNOko8l8LliEKUl-mR25wEY_YPLHif58PKZUsBGTlZxU85pJ6OPDzuFyxpljVCOBKdd1Ibg8vOKTyJRAxfvT-f5l2MittEmXOg2a6nRzlg-6bFOdHUa4ww1yx9OB3qozfXgKbxe2HQ4cN_ikJqj6bdr1hhyQU_rJFIZn51nleE-NPt93Scpu)
What i learnt:CSS is harder than js.Basically it dealt with removing the active class from allAnd adding it once the button is clicked.And basically we need that flex property to like widenThe horizon :)

2nd was kinda easyThe thing to keep in mind is that while making the circle,The width and height of the object has to be sameAnd border radius has to half of the widthThe line that is seen is a kind of rectangle ie it has width and height
Talking about the js, we maintain two global variablesFirst one will be mostly active because initially that’s the one that gets selected![img](https://lh4.googleusercontent.com/8p0-1rfPF1MP9Fgk1Ij41IGv46vP7Sdxm6O_fZ-ULp-t4Pimv-AxEvFr_dQ4-lVjnXooPH1fYnDsXGUg9AqeLW63UQJrljCM2681VY2DP25h8OQoBznoRSKwoVLtXP3I-bAEgg7Fv9BBrkxUX9Jg7m86yIgf_9e8ox1b-fmPLbNnUpKO27OMd-y769Ie)![img](https://lh3.googleusercontent.com/7DnPo2nj6mG_h2X4qgM7jHwQZoVmCjshg23ktDU5zIL2TuhI1DzjvsMAd9Rc6D1A3e4ul05RVvWvjAbSWQWTbz_x48o3oj2iONFzrdewoqmkEFIZylBovyAhDfGXkuAHBGJZOt0L3QiN2BnCApUxlh9GlFyraL5A80EhaKYz7jJdShuIFMmcMDlEZvVL)
The variables had to be maintained and the if conditions had to be in place.

**Nice fonts: Muli, roboto, lato, ubuntu,Montserrat,heebo**Day 3 ok lets gooIn this project so basically we have our body element.Then we kind of like rotate or tilt the container element by certain degree.
This is interesting as it will rotate the entire container _transform_:rotate(-20deg) _transform_:rotate(-20deg); _transform-origin_: top left;}This is to make sure that it rotates front the top left instead of the middle which is default.

For the position stuff would like place the top nav bar _position_:fixed; _top_:-100px; _left_:-100px
Since both of them have negative values they will be like not shown from other sides*position*:fixed;
Fixed vs absolute the difference is that fixed would like fix it even if the screen is scrolled.But, absolute is like it would not be fixed as we scroll down.
_position_: relative;Positon relative chai parent ma halinxa ani esko anusar ma children lai milaune ho.By default the positioning is staticRelative is like staticBut relative allows us do 4 things that static doesn’t allowsWe can add top bottom left right with relative that we can’t add with staticWith relative we can like shift the element in any directionPosition:relative is not used to shift
Also watch out on line-height![img](https://lh5.googleusercontent.com/zU-rtCS5t3Olul0_ZgkNefI7BcVWH0S5ChRSrXBCp2ym5XclCCUsh4zAf4kHc39NwP1qKAmWjAE1aBNccdglRqx0A6vqA-er3o9qLdLvZPlyVltW4aBnTdKU5u6y4vpi0DrTGQlvJr-n8byBmY-8p4MEFVx2ZvEO8YHOkBjFSRq-5vHCF-X-oQI9ctl7)![img](https://lh3.googleusercontent.com/C1FXTGA8sBuoMuehdmdZBBsAzNqaWlLDG_5ufSR_8Ws21irrR28Of2_Nz3OM-hlSo2FzMudgSKY58Z-flhxNr6I89PKe1wKNuDKaImBPCGCkhjrrfG2fmV_V6dgoJfMAxWfCprqIsnAyWxlqG7cHeLh8yGarHZ80T8Zom3si3koEchnjuaZhUfaQCKRD)

4th day:.search.active→ this means that they are kind of sibling ie they are targeting the same element.search .active→ due to the space, they are parent and child.search + .acitve→ this ig should be immediate parent child relation
Learn about _background-image_: linear-gradient(90deg, #7d5fff,#7158e2);Like position is kind of tricky.By default all the position is staticRelative is also like stattic but with relative we can do moreIf parent is made relative, then the children can be positionedRelative to the parent instead of the domSo with parent relative the child element can be placed relative to the parent.So once the parent is relative the child can be placed with respect to parent For that we have left right top bottom
So left position means to shift 10 units from the left

Extra js:search.classList.toggle('active') input.focus()
Toggle just toggle the classThe 2nd line brings the focus to the input button

ONLY FOR UNDERSTANDING THE CONCEPTS:
_transform_: rotate(45deg); _transform_:rotateX(80deg); _transform_:rotateY(89deg); _transform_:rotateZ(4deg);
Different ways of rotating;
_transform_: scale(1.5); _transform_: scale(1.5,2); _transform_: scaleX(1.5); _transform_: scaleY(1.5);Different ways of scaling;So basically all these transform and all the stuff is the high school A.math.
In transform first is always x and the second one is alway y axisOnly in margin it’s (y,x) otherwise mostly it’s (x,y)
We Dont use translateZ as we dont deal with 3d stuff
Css is mostly about math
/_ most useful of them all _/ _transform_: translate(-30px,-40px); _transform_: translateX(20px); //translateX and translate are same if we pass only one value _transform_: translateX(-20px); _transform_: translate(100%)
The last one we pass translate(100%) This shifts/translates by 100% of the width of the containerIe like box’s widthShifting is done on the basis of the width of the box if we write the measurement in %

_transform_: rotate(45deg) scale(0.75) translateX(200px); Lastly we could also combine the different properties like this about rotate, scale and translate. Rotate→ we pass deg, scale()--> we just provide magnitude and lastly with translate we provide either % or the value in pixels.

.parent:hover .child{ /_ transform: scale(2) translate(50px,50px) _/ _transform_: translate(100%);}//also could be achieved with css the :hover stuff
Let’s learn transition for animation1st mistake people make on transition is that they place transform witSo the first rule is dont place transition where we have transform
Which object do you want to transition is the place where you want to add transition property.
Transition property is like margin;It combines all different 4 functionalities into one So we can use shorthand property
_transition-delay_: ; _transition-duration_: ; _transition-duration_: ; _transition-timing-function_: ;
4 available transitions
_transition_: transform 0.3s ease;//by default it will animate all the property even if we dont write transform as an attribute1st argument is one which property transition should be applied2nd is the time upto which we want the animation
_transition_: transform 0.7s; } .parent:hover .child{ /_ transform: scale(2) translate(50px,50px) _/ _background-image_: linear-gradient(90deg,#abc,#cba); _transform_: translate(100%);}
With this when we hover bg-color wont changeBut instead of transform if we leave blank,then the color will change
.parent:hover .child{ /_ transform: scale(2) translate(50px,50px) _/ _background-image_: linear-gradient(180deg, rgba(255, 0, 255, 0.667), rgba(255, 0, 102, 0.733)); _transform_: translate(100%); _transition_: transform 0.7s; }
Writing this will kind of work half way because like halfway onlyOnly one direction As soon as we move away from the child, the animation wont be there and hence it wont take into effect.
Golden rule of transition:Always transition should be done on the base class and not the modified class.Always the base class for the animation and not the updated/modified class.
Last parameter is the animation and what type of animation we wantMostly we use linearBut we could also use like ease in Ease-out and stuff similar
**To make relative we dont have to make parent child relation ig**

Day#4![img](https://lh3.googleusercontent.com/80iMDwq5OLPZxDyPjGhJXZGaYueNj9DtrMiT-qaiB12AP6Kc7S0UAb1pfvObZ9GJpeGCd_FwacHPwoITfORkG4WJUmjPxatgK6Fjj5YpFUFeQrerxV1EIE6I_B3ndQfpOIhzHaxBkxTupp7qygEVm2CFRiP359qgDUsbyS7O2FM9tW7_wY73RFnvLLLE)![img](https://lh5.googleusercontent.com/rLDNOI5-iO927an0A9-BzL8vVSXvTPeSWx6ZoZ-Oy84Xgejk8njWFE4QwkMdNpGZ9kmlQ9hlxbYzrlESSiMz35SnsEkFSJibyLLrP3GlBxPmCGACVvo1I62WmSR1HvIHM71nQBKEgdc-mSJvCAiPXSew6VwVDsz0rLdU4JxF5gX-RcgYZYNTD3yDOoYs)

Day#5Used stackoverflow blur function.To like blur the image![img](https://lh3.googleusercontent.com/-TqkgcQtXR-BNCt8BrYLssKHvJqi3iLDLqg6NdK7VRatGI3mm9ZPbXL-_BBNRtJfSvyxISvTgEfEZwGnywmBKeiNvbeVWAlGL3mfxeJnIVIKm88Fit_B8mmP70WQJ5VGtyfdjs2CKIkH5D0TN6DstOD-7T9YrMY4mPOvdC0cJp09vxDO2Iy6vXGoZYjY)![img](https://lh6.googleusercontent.com/npjvz-K_LMm46l3yjkcxub0IeC2hLQ7gxyePhpSsqPK6Obt9lmaI1NqeUNFAaeVPfw87l_c6GGU97dmPvtwY3LVDQie1GVkYX2Ku42c0RF21r5aO5EU4EWJDSRXQWJnYWYSqiDzi5ewm7jlO7bAmfQLxdZ195jULkvOSqfOtKgqH1zgHbYt4fIsDLf_E)

.content:nth-of-type(even){ _transform_: translateX(-400%);}

Idk what this is _const_ boxTop=_content_.getBoundingClientRect().top;
This project is less about css and more about jsSo kinda focus more on the js of this question

_transform_:translateX(400%); _transition_: transform 0.5s ease; Esma chai transition is with transform because intitlally we have set or we haveForced the boxes to go to right Actual animation happens when we kind show the stuff.content.show{ _transform_:translateX(0) }
Actual animation is hereBut we didn’t add the transition hereInstead it was added above.![img](https://lh4.googleusercontent.com/RPReyhTOov0Aby6hFwANgwGlxIpnBFRXhs1YlKaLM7e37ValOv7EJFpr8qF-8Eooqqaj83bSmi8Fvjh9uCM_DN7eThSP98luoMYEaiTM5uzEGuGkc0UzVzNWNVJT7nHQINRzawJq-A_BO8AXSZtli-9GWtTYn12QSO__ok5DuCEpXwWhLcjms2Ym16au)![img](https://lh4.googleusercontent.com/Um7uKTMGYpMBcT0uXAaoobS5kp2BGdOveHCzIAVz4eoW5fTLLndCAKPzfSnb65g96hV3TeY5tlyWe5el9wInPUwUOADXKEFh_HLNYkFs0VU6cohf4Zys0-QrjWRoHV5rXWdTtnRQ-_ujn7JulaTsuh2_fuYvNiZJj7laGoKgpFniuXT3qJXTnQO6QHVO)
_const_ triggerBottom=window.innerHeight/5 \*4;//we are setting the trigger point; as we enter here event should fire upSo like yes we are setting a place for the trigger point,The trigger point should not be exactly at the bottom so setting it little above the actual height of the dom/ window

​ _const_ boxTop=_content_.getBoundingClientRect().top;This is kinda important because it gives the height at which the particular box stands in the document.Like it returns a containers height in the screen.The top attribute .getBoundingClientRect; Gives the value of how down is the element from the top of the window screen.

Overlay is the stuff that is kind of new to me in this project.Kind of focuses more on the pseudo selector and stuff.
:root{ --left-bg-color:rgba(87,84,236,0.7); --right-bg-color:rgba(179, 146, 146, 0.8);}
New stuff learnt ie – ith that syntax the we are defining the variable.That can be used again with the help of var keyword..xbox::before{ _content_:''; _position_: absolute; _width_: 100%; _height_:100%; _background-color_: var(--right-bg-color);} using the variable that was set earlier
This is kind of added for the overlay stuffIe like that transparency that gets added with the help of the ::before syntax

_white-space_:nowrap;This is used to like wrap the content and not like shrink the content even if the space is not enough.Like the text wont move to the next line even if the space is not enough ie no moving to the next line.

_left_:50%; _transform_: translate(-50%);
Doing this has a important significance.
Than this _left_:30%;The above one would ensure that after placing the element left of 50% of the screen width the content there would be like forced to shift right.But with transform -50% we ensure that the content is like properly placed like center alignment is done properly But with the latter one we are only making that the item is placed perfectly in one screen.![img](https://lh3.googleusercontent.com/BPQqI1TM-ybYeXTB2Oae0OQBS5xOuqp3GnrSUAutqOkEZFg2Q-9kCapnWh96o8m-0xud4yMcnUhDxHHgpgBmT8BPHg7lo50h87w_Oxgbecw1qFQ6IAQtuyt8SKaN7DF-EYa1wJ_l6JSlxwD33IFSTsZ8kK_VGyc8I58p5jRvWwOyyAhlrAo0xxoPc-Wv)![img](https://lh3.googleusercontent.com/XO-Gy1w_jQxxXs17tNEUroEjd7P2XS-kA-mRilJR47AVXN3eg-PM4L2xzc3WAqbwDq3d0O2oaBYFuC_y9u0UtcxxbEpW_lwQ6f0nNM3Q5Z5Hix_QZTcfwmUCYGQeD5h_E7XY2eN9iktvpnzvxY4me0VvGe-Nw-kNEaK-v_JZFTCvvgh5GT-0gqvzFX8P)

This project wasn’t that hard on day#8 Only thing to keep in mind is that whenever we want to position anything exactly at the center, then we have to use flex property.

.login button:active{ _transform_: scale(0.98);}Best place to use scale is when we want to decrease the size of the button.

_label_.innerHTML=_label_.innerText .split('')//make an array .map((_letter_,_index_)_=>_{// map returns alot of span tag with each one having one char return `<span                  style="transition-delay:${*index**50}ms"                  >${*letter*}</span>` })
In every tag we are kind of adding transition delay.

.field input:focus + label span ,.field input:focus + label span { _color_:rgb(154, 221, 248); _transform_: translateY(-30px);}
This is the crux why only when clicked, we have the animationThe focus state in which it is would like transform its positionUntil and unless it is not clicked transformation wont happen.So when we click there only then the transform will happen and then the transition is added.![img](https://lh5.googleusercontent.com/z2oFunVkzmmy9t6t67sSIIBtCWkp5duIUgBN6ZUnaCMfJmRi2CHNsw4th48K0Guk3IzHadXgbPiQzZB6ySx7MUuBnEtDrQXI3NmExgkSgRgOe0dMo4QgVmwWMtKtwtgSwNiL-mXdHHqpLVQHPUyrtTonPJWXj9C9oCtE8H3PbEZKEMrQSa-FJD5xxLgw)![img](https://lh6.googleusercontent.com/cLJYvTKilvVuKpGqdUU0xXideAxrkPHMVA0sqpwyNBynezbcadRVwicKGzbPVtR0OgEM4tQY83Q9QUqSDP1U_VBmXHtKf7fX8y_jR4Zs_jEFkcOjgoMo_iQahjKT5pt_qAtKFcpBLf8QA_55nPvPXtLVqjsM3tXDFrJOFgxRsu_QQ-m6D-VNH7E1oRq2)
Wavy login.

Like in the previous project where we added every object in the span class using the js,Even in this project we try to add the buttons using the jsFirstly we loop through the arrayAnd for every element we create a buttonAnd add certain class in the button.After that, we set the innerHtml to respective value.Finally the button is added to the document by using appendChild method.btn.addEventListener('click',()_=>_{ document.getElementById(_sound_).play() })At the center we also have the event listener that like plays when we click that.

sounds.forEach(_sound\*\*=>_{ _const_ song= document.getElementById(_sound_); song.pause(); song.currentTime=0; })Just like how we removed the active class in previous projects, here we have to first pause any other playing song and then only start playing the other song.
![img](https://lh6.googleusercontent.com/0CzW4UYhL_wmx8mSxRe9iZE8loW9BGwwqQiQ5cl0qa10oV6lVb_MHcQuxgl6iqLBmusNn--pDkc2HvkLHiyyzr2CRyuxqc3_zXI2P2GjAudhE5P6x7NuHVYhfP24PWwg8wVEZ3-5tpf2jEBAG2abTTKS7Z64M1YQcfyLmjKGDSz6hj-eojDaELRquXIx)No like other image here. Main gist of this project was to import the sound using audio tag in htmlThen in the js we would create each button based on an array of sounds using that name. Then on every button there would be an event listener that would like when clicked play the song. That’s it. But also the other thing would be to like stop every other music if we click on other button. For that we need to pause every other song.day #10 did some projects in college and continuing them
_z-index_: 1;Important stuff is this. When we want to place one thing over the other we use this.Higher z-index means it will be on the top.Hence we could have the navigation at the above layer.

Very important stuff to try out when we want to hide stuff:things to try:use the z-index to put it behind some other elementmove it off the screen by absolute positioningvisbility: hiddenmake the content "invisible" by setting background to foreground color (works only for text)opacity: 0but the real question is: why? Nice way of using linear gradient is as belos _background-image_: linear-gradient( 180deg, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100% );
Would create a split effect and based on the % it would fill up the entire document.
_box-shadow_:0px 2px 5px rgba(0,0,0,0.4); Perfect when it comes to like showing on the screen
By default in which state the element will be that will be kind of in active stuff
Initially A—------------------>B When it goes to B state at that class we will add the transition property.
So always we have to understand that at the beginning it will be in which stateIf it is in active state, then we want to make it as inactive
_transition_:transform 0.6s linear, opacity 0.6s linear;We could add multiple transition like this. _padding_: 0;Even when we dont have anything in the screen sometimes we have to add padding.

.nav ul li{ _transform_: rotateY(0deg); _opacity_:0; _transition_:transform 0.6s linear, opacity 0.6s linear;} .nav.active ul li{ _opacity_:1; _transform_: rotateY(360deg);}

Initially the element will be in active state.So the opacity will be one.When clicked, then it wont be in active state, hence, The opacity would be 0.But the element would still be there.The width would also reduce when not in activeAll the coll transition would happen On the width and the text ie the opacity and the movement of text ie 360 rotated
We have .nav.nav.nav.ulBoth has transition.In nav the transition is to shrink the entire width
But in .nav.ul the idea is to change the width of like itself alsoBecause we dont want to change that of the button.So

![img](https://lh4.googleusercontent.com/2e0iPwR7jrxWXKTL-GxG4AZXeT229ldiUkGjm64HV87ljHlf5BPA9vYI0HtNw98zEdCxOsXxv0FWQfLG1MSpJX1wvxnhgPYxpxGhTXaY3UJReRCkSayMJ0JE1YOQP3TczSpjbZHfIXDcpUSLJtfx5TSUAp5b_142eBBU8HuxmfkjCMxoadqUf28ohEAj)![img](https://lh4.googleusercontent.com/gZ8d4qspvJiVEUKPR7GYe-nzZOtUSl6icRl3O_-7Hhwg0WR-VmeJIQK0qdvhIjAg3uwUUYScE0dtOw_lK0bI6k9inZkmnEDuSVdur0A919tYqRRSiVrDIExWzTqwaNMJ9Qt4DeOyVM1q9OlvQORPShlYhqAxJ3QgPBVHWoiuDINLnpE39lqV7Z5wDnh-)

![img](https://lh5.googleusercontent.com/LJaiTOHWUbVKgu4F_ucFNLhRkNmDHdlQbiU0KRWGnvMAEP2ajCLJdx2ZtnLFgxD9pYyV6e78hfeknS42RHHhmJm4Zd4F9h1PqQy5hzoXvRGcAtQSgKP-1ZQ8WHASoyi54QKWe31jjdom03PL-rHBARfGWHE7LqsXsW1Vf7gAhhCZTWVQUJUDnkQqDGAn)![img](https://lh5.googleusercontent.com/GaH4hCjBgTUbtyiIzAOO8hG3RJdNqjQ39Oht63iLLoidP6cWJe8BXG1frM4XsNJxsd_-nf1-VK_SXI8Hl6DqT4XX7XR68mtKO28kIqRACzm9NtJEXELi_nCILq7aJqMHRLpeYxjNrATyPg2sGUMHTK3Vav-VKYU7vU9VQgbmqFwZ4-lh2jZ6TvbjR1wq)Interesting project to increment the followers count.

Interesting fact:This one has always been a gotcha for me and many others. In short, the opening and closing tags for the <textarea> element must be on the same line, otherwise a newline character occupies it. The placeholder will therefore not be displayed since the input area contains content (a newline character is, technically, valid content).Good:<textarea></textarea>Bad:<textarea> </textarea>

_font_: inherit;To make font alike even in textarea
textarea.addEventListener('keyup',()_=>_{ })//because of this I wasn’t able to like aptly solve this quesNew event understood in js
.filter(_choice**=>**choice_.trim()!=='') Only keeping if the choice lai trim garda it isn’t emptyIf empty then filtering it out..map(_choice**=>**choice_.trim()) This is purely optional to like trim any whitespace in an html tag

Entire crux of the app for me was:_const_ interval=setInterval(()_=>_{ _const_ randomTag=pickRandomTag() activateChoice(randomTag) setTimeout(()_=>_{ deActivateChoice(randomTag) },100) },100)
I couldn’t think about setTimeout in setIntervalLike I had thought of activating and deactivating like syncly.What was instead needed was to make async using setTimeout.New lesson learnt![img](https://lh4.googleusercontent.com/869a6-TD6Irw3vvjaa-HwMITKHD6woKy5dmL00bNgnJZASqA3xstoUBMNC0cmNvyQIBjczJec5w4FjJU-mUR-FjhKSpBlbQzrzPZuWxelG7vESWSIZRp1tDewAMiuFp3tUZmd0MdH_cqZvi_Xbrvp6eoNsbmrFQ413zxyKWHj2cEj5sJDYymN2-ag9c6)![img](https://lh3.googleusercontent.com/83yCDxEbISyZQzwMe0g7XkSuG3oY-3QaIskLUFTv1gTAdLZ_hAXbuceZHhw6S-c9nm4_BI0wq7zJHB5lH7qNSy7ONfKOnZrvvH7kpg7Pyva8p_PnbaKyEJj2D2gjasGuBfnkv3wiXg-0Ya5SYctIxUt-RWAeiSv62Jl89UjUbYjmMrcmJYaF8uSYRIau)

![img](https://lh5.googleusercontent.com/lI7CMFcQboZdTZLa_wTbe4LTeUpAePLH_mlYQaLoS1eGkOM3_aKSYz3K5igGgrDpQ-FytFMEb15Zs8lOlAfzK_7cTtAajGiiGC_IyvE0Yseiqd6Jlat2yWxgulHN36X4802DnVa1LA4lpKl-RG_ZtfGLxREz_i05XE-nnSoDxfNvWhVYtnzdwFlFkphw)
Nothing so new learnt in this project just did the usual stuff that I do.
eventKey.innerText= _event_.key===' '? 'Space':_event_.key eventKeyCode.innerText=_event_.keyCode eventCode.innerText=_event_.codeOnly these things were kind of new.All others were kind of the old mundane shits that I do.

Not much new in this project.
To use font awesome, the cdn link has to be there in the htmlOther wise we can’t use it.

New stuff learnt about pseudo element selector:
The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML. While the end result is not actually in the DOM, it appears on the page as if it is, and would essentially be like this:How to actually use it;div::before { content: "before";}div::after { content: "after";}
What it really does to the div container <div> before _<!-- Rest of stuff inside the div -->_ after</div>Dklfsdl What it does is basically allows us to insert content without using any sort of html.
To add font-awesome comment icon we did*content*:'\f075'; _font-family_: 'Font Awesome 5 Free';The content is actually the unicode that represents the comment iconAlso since we used the unicode stuff we could actually treat the content as like regular font/text unlike any image
.question-answer.active::before/_ .question-answer.active::after{ _/{ _content_:'\f075'; _font-family_: 'Font Awesome 5 Free'; _color_:#2ecc71; _font-size_:7rem; _position_: absolute; _opacity_:0.2; _top_:20px; _left_: 20px; _z-index_:0;}
Actual stuff that was added before and after. But I didn’t pretty much like it.Here we added the comment icon as a unicode and also made that comment feel like a background by reducing the opacity of the icon.
.big-bottle .drank{ _opacity_: 0; _transition_: 0.5s ease;}
To kinda like add transition to position we also did like mention above itself.
_let_ visited=new _Array_(bottles.length).fill(false);
New stuff learnt about creating an array of boolean value false

Classlist.
bottles.classList.contains('full')smallCup.nextElementSibling.classList.contains('full')
Extra stuff to like check if the certain element contains a classlist or not.Also the nextElementSibling is an interesting one as it would help to like check the nextSibling.
![img](https://lh5.googleusercontent.com/2p7soDbBu7bW8tEK_2R7LS6FCrDW5M3J-ueOR8bfurTzwTY0_2M6A-rvqI1t5W9MsOb-bHes96NeaMSNo5XoROYs1jcajUHMmLcIGxqOa4VbfUZdLhOGIzQ22XKtfv7-6Qphe6vnOv_RK75WQx2OCtie20eDq6FxijF5oFcT_q_N4HNwNSW1sXvlRTxP)![img](https://lh4.googleusercontent.com/wu4c0mUpOcSvwO-2tH24Sk9k7U9dPDxiZFBnGCL9fJ2PwNcVQfgZGrCAvOHmQrPfPPerC6CHoWjjvLqC9kJVNgvEt2pfxbrFroU_fT79zzrm55O0n51XxZOKTzNabsz9dzC4YTrPB14mdznAXb9nutQFYHSTV-lVfNScVT6vQQ5BTJdq4pCjrASeZ3t-)

Something left to understand is how to like not increase the height if we click on the same glass.The other stuff is like if I click on last one then all should be filled up,Lastly how to add transition on positions![img](https://lh4.googleusercontent.com/MGFS0hrwofwvpLgakDLU4G0LXIybXn3Nb_ugKNXRSWKOG6m34Pjc4dGmWYOm_s1VSORoT2bHXyvYbomj0Pwd9-1pQk3nyJT14vbSHheVNn_Ojo46WgnlDWQUb9wFrdy19hNUffNmzL5crxlyEsks6WaUfY9nTG-dnevHkj2n8GsHqhAtO91QMJkgLIwa)![img](https://lh4.googleusercontent.com/gxNDZ_gXRieTq-8D7dlIRSHbV4B77AElwd7PuNUEVj4EM_pUSJEVZAQNmhtOJyLYSlvh9wH25wJfR6bLPI16cQi2iD7X0G-SUHUeCbKgIAHK5jCrgxXvPoErwx0tj8R9ywGr-NIZazzoxQhXCt_xuLzfgy9Uqyx1u3iXeK4auh79gMMofNygVYb8wUED)

There was a native min-height: property that was over riding my attempts to change. Simply put in min-height: 500px !important;_min-height_: 93vh !important;
So native min height was overriding the attempts. Simply the min height was changed to certain height to like make it apt.

To make the stuff sticky we have to use:_position_: sticky; _top_: 0;This would like make them sticky when scrolling the page.

Now we should focus here
Very important stuff for the scrollbar stuff:::-webkit-scrollbar { /_ scrollbar-width: thin; _/ _width_:0.5rem; }::-webkit-scrollbar-track { /_ scrollbar-width: thin; _/ _background_:white;}::-webkit-scrollbar-thumb { /_ scrollbar-width: thin; _/ _background_: grey;}

Overlay is very important. The way we use overlay is by using the pseudo class selector prolly. The ::before and ::after as mentioned in FAQ collapse app, kind of adds content before and after the tag without adding the HTML tag.We use ::before to add overlay by setting the background color as required.
_position_: fixed;Very important to make it fixed.
When the text were inside a tag and i was trying to change their color to sth else,It didn’t happen,.navigation.active a { _color_: black; }  
Whenever changing color of text inside the anchor tag make sure that the anchor tag is selected ie be more specific.The internet had told me to be more specific. I was specific but not like in terms of exactly selecting the a tag.

if(websiteBanner.getBoundingClientRect().top<0){ navigation.classList.add('active') }else{ navigation.classList.remove('active') }
Finally the most important stuff is this. I figured this out quite easily because we had done a similar project like this before.
We also have other way to do this stuff:if(window.scrollY>navigation.offsetHeight+150){ navigation.classList.add('active') }else{ navigation.classList.remove('active') }

![img](https://lh3.googleusercontent.com/VH4nKxUIUtjRjRWJPLIZG0n-oeZjgdH2PCO7d4BLyB0mtezGJ2lNFITXw1URU0imkxjSQAS71Lhm0iMuQfZDdWIArr-Kd1-wVIsKxqi7HA5UQxprtQZbo1xGPcu1ne6e79yOucmGSoBDZBCWK0GlxJaQ1VufKNbmtvdYwKWwhHFe8QE7Na0vLsiyG3xp)![img](https://lh4.googleusercontent.com/iKLmqtMYlRwkey_wMAmtdPhzUQs6j2sRVwH0sVLR44-hsyozOc5_6NqHRUbgIGS_I2siyXbe5WwIfjXXukMNDHHpaXctLiyoQaNsLs3r-XpAytsWLt9Dk3dqEaoSLrnVtrEJPLH1WgWzTUsenZ52lPaqQzvwJ6Z2353L_Gf5Rr9lxAniHS_mrxjKw-vQ)

Clock project created Do programmers need math?secondDegree=seconds _ 6; minuteDegree=(minutes+(seconds/60) ) _ 6 ; hoursDegree=((hours +(minutes/60) +(seconds/3600) )*30)%360;
This project of building a clock says it all.A lot of math kinda was used.
To apply dark and light mode we generally target the html tag itself rather than the body tag
body.active{ *background-color*: black; *color*: white; }
Here i used body tag instead.
*transform-origin*: bottom center;
For clocks its essential to set the transform origin to bottom center.
*letter-spacing\*: 0.3px;To add letter spacing we use the above style
if(mode.classList.contains('active')){ mode.innerText='Light Mode' }else{ mode.innerText='Dark Mode' }mode.classList.contains→ this was the important kind of stuff to add and like check

Interesting stuff is that the scale function that we used in blur image project could be used here also.

Like use scale function to convert hour hand to degree value
time.innerText=`${hours}:${minutes<10? `0${minutes}`:minutes}:${seconds}`
Kind of nesting the template literalsClock added![img](https://lh6.googleusercontent.com/WwFEBTE2uHBw0egEvSaemt8xNTbrqR-5TqqhyDzmkCFprWOrrEyNytRvLPZaW9SMbGcBAeSdILkLPanp2E6r7AIGY3Bk8iQ9sJskTv-2WmviCWPIssOL7oZy2CLYZkBNv4n8i_LvTnfjXBV_6lREFWVOudfwYL0b-aDIk02fBJ00Pxn609xnohjpaY9A)![img](https://lh5.googleusercontent.com/veNKihuhFP40uPGngSVzUOcXa_B9_zg96QWjNTGcxpGUuHJdMo_3dmUnEvTTxbT5ENmbh1sjzogWsr3jvKwqrGF6M_U_bp66RhkKQlH31JbdJvXEwJGEY5oQbnHnMhiYMi7GcMpL8vAzWSzjHjbHpTYfj_U0_KkWrPz2ZhxgdpXTtGiMjKLywk2qIx28)

Creating triangle with borders:
.triangle{ _width_: 0px; _height_: 0px; /_ background-color: whitesmoke; _/ _border-left_: 50px solid transparent; _border-right_: 40px solid transparent; _border-bottom_: 30px solid white; _transform-origin_: top center;}Kind of new stuff learnt in this project.
To use ::before and ::after the parent has to be positoined relative _position_: relative; To keep like the before and after we have to use the following
_position_: absolute; _top_: 0; _left_: 0;

Kinda also learnt how to use animation in css*animation*: rotateA 2s linear infinite 0.5s;} .kinetic::before{ _transform_: rotate(90deg); _animation_:rotateB 2s linear infinite} @keyframes _rotateA_{ 0%,25%{ _transform_: rotate(0deg); } 50%,75%{ _transform_: rotate(180deg); } 100%{ _transform_: rotate(360deg); }}

So basically I have to learn more on this topic on how to like animate properly
![img](https://lh5.googleusercontent.com/8u6QSz_fU16KmF19oTkMJtgMPFOVfwcURGgOm4bG0QZeK5pPGhq42WUAFsWANtE-nZQ5j57vKzQNvUHt995E8I6QNRuVXD_GFSPnXmayQb0JpIXvJ-fBEjHwZIerzmh_-IH7oXVgzjTSgmGe-IR8aX6qYkqx_mJ7NJ8RudXVwipv7oylbMuSQz-TGuxG)![img](https://lh5.googleusercontent.com/R-nXXZ-ZFQ51VFyO9tb-wQxGtHhOYg4QYIWvgj4cYSo7jqF6NLTuvWNaKZ0BUdO7DCGLNhMFyJYAVrpC5E925Pwi8MYvmbtPhbgTzWZGUNctIvFiJcN1aLGKnUSM_NtC77A8KcLLITipnYTlDTTHL53AX-boRv1ubdXRQOr9Z29E7HxSyx_EthOvWpRj)More animation is taught in web dev simplifiedWay to convert a string into an array using split method:_const_ displayText=`We love programming` displayText.split('')

innerText wont print the extra spaces in the text.text.innerText+=arr[index]This won’t add the spaces as required.Hence we have to use innerHTML property instead to bring the white spaces as intended.
text.textContent+=arr[index]This could also be used ie textContent could also be used.

Here in the question since everytime we want to change the speed as it is input by the user, we have to follow a different approach.Here we have to like pass as argument everytime to a function. lIke speed should should be varying with the value in the screen.
So since we had this varying time ie time in ms was not fixed ie it was dependent on the speed, we had to take the speed as a argument. Hence, we can’t use setInterval function.Because in setinterval the time that is passed is not changing, we can’t use it.Also like in setInterval like even if we use a function and use, we can increment directly but cant decrement nicely.
Hence a nice approach would to use kinda recursive nature of setTimeout where by we could take speed as a argument._function_ writeText(){ if(index<arr.length){ text.textContent+=arr[index] index++; }else{ text.innerText='' index=0; } setTimeout(writeText,speed)} writeText()

This type of application wont be designed where the user can set the speed of moving text.But this taught a lesson to use closure and stuff that parent’s value will be remembered.Like whenever value is changing we pass it inside a function.![img](https://lh3.googleusercontent.com/oLY2aRWc8fg1X69GE8FHJC2_rV9_Xjf5yjDp0SfK4Fa2QNbnB1wchC4rbnPRyFgSu5LpqFpfWStK0uQlQJn3Xp1h3Y3EQljt6BITFYfckIGnXv1WEVGpsKm_am8a2BGGLP720EKnJBaxXi07I3nrmwI3uDHfxGZwLLiX58rrDhE4ej7vhhQHj8sKYW0F)![img](https://lh3.googleusercontent.com/OajI5fjqAshiB_v9CwNPHooCVGuE8_KwcnE4PUSABxZ-WDFVqUtWo0WARu5ft6iP6FhaYz6IxbaV4Du7pNlktul0wKYQf3hZ1mxzcQhZBozBKpcOQE6DoOxp_EK-wrsU8PyrsKgX_wrUwicnflNBHz-JT_g_VE51Lj-rnfJjjL_7SUoKnnsyjmBxihXF)

The approach I took was to like hard code the values directly using HTML.
But actual the way to do this is kinda using the animated class to every content that has to be animated.Once, we have this kinda animated loaded up,We can go to the js and like make the dynamic kinda fetching from an API

_object-fit_: cover;New way to kinda like make the image to fit exactly in the center.

Lesson Learnt:In such places where we want to place stuff fetching from the API,Ie We shouldn’t hard code the valuesThere we should use css first.Kind of design the raw design firstThen populate those stuff using js.
![img](https://lh3.googleusercontent.com/S33I0gwZlhunDq89rC3kv5vTtbWGooDaivoRJE_6Ueb14AxvDbuB85U4f9HbDQWJ1tzvTiT3bBrNlfUaDKWspUK2CmZNTw-7xFHSE2OZHKl-L9Nd8Qz5pjKFir-QJIzqUZteVHiU-gKy6ilrNx87SoKvb7BtUtUE2Eg2GjnNlk9A34T1Ciz2hxcMYkEspA)![img](https://lh5.googleusercontent.com/67KtRDnuGoDTNdLfpZtlpttcPhF0zC52tzBpF2gM_JRP06sAOSihKbsC0nvHsDcwHOgtg6FpCSe_hduuunBET_W6msVlEEKSmc4MYfIbup3pPMuLg2AHMEYLJ0trpKmpFBZOAPllSly7KkBhD8fzt8sPG-k1XQRGgTTw9NIL6GAr0cNaOtgQeBoJXkK7IQ)

This is the project to create ripple effect button.To do this we simply add a span inside the button.And basically have an animation on that button.Hence I have to understand more about animation.

_animation_:scale 0.5s ease-out;} @keyframes _scale_{ to{ _transform_: translate(-50%,-50%) scale(3); _opacity_: 0; }}

We kinda want to add an animation named scale.That scale named animation kind of helps to transform the span tag that is added inside the button.
console.log(_e_.clientX,_e_.clientY)
This like helps to get the exact position where the button is clicked in the viewport.Like we get the exact positon in the dom about the x and y position.

getBoundingClientRect().top vs offsetTopThe difference between them is that getBoundingClientRect() gives top bottom left right positon relative to the viewport.
But, the offsetTop gives alway the position not relative to the viewport.

Side note:Always to use this keyword the function has to be like function declaration.

When we using the vanilla js then we have to kind of delete the stuff from the DOM:

setTimeout(()_=>_{ circle.remove() },500)
Doing this makes sure that the DOM is not populated with unnecessary data.
![img](https://lh5.googleusercontent.com/BhV6l7nmh57DxHfD3nFRivWC6LppLM48iGL8rJg758ehCS8I9JR2rwvt9A0JyJkV8oOf3flexxbz9zVId4s6k1XQAO_wdStFZMk0dMWdzwVS4riMPkxRmfv1txnh1JS9Kjj3SBCCjOn6ue65SSo33BkHGxK3Slzzz9zx8OtU75zFTowp5FOumX97lVYx)

_position_: absolute; _top_:90%; _right_:-110px;
Right could be given negative value to place it at the right most part of the screen.
_notificationDiv_.style.opacity='0' Instead of doing this just remove it.Removing unnecessary divs from the DOM is the way to go. _notificationDiv_.remove()
This is more preferred ![img](https://lh4.googleusercontent.com/iHqYbEoNscxRVbMRILLdfjQKXbFq55mPzM_DVyhiMoIf1YPmtde-w1jdzV6Ub2h4R0IFWyeph2ZdmSxer8Aeg7ItFlhJnouRMeZaW8H1TslBmYnOXTlUyy2wcl1qpsoHgBTjRUGN7RkgbblLVuC2RQpAzwa-UtEDVaTJX94E0d2hXp3kNIN_zfssMn2M3g)![img](https://lh6.googleusercontent.com/f4V0FYo8dL9uw9s18dQhHT3MwgJRVelYbePnZqm8w2u2EMAY7yp3_6Y3FrX9YwNT0ZipXHTIZaOEeh6cuqcgEiTCk-81PKaMGDNdk0oziD5w36gSjhxPG1B7q12G2q0jDKS-WCkprDpRHNdmq-ejnkOh_s5BwQTMFoC6bn0bTodOM86H8VzF9ub6wmQGIA)
Tiktok Love Reaction:image.addEventListener('dblclick',(_e_)_=>_{‘Dblclick’ is the event name to like actually trigger the stuff.
This project is kinda similar to the button ripple project that we did.

@keyframes _grow_{ to{ _transform_: translate(-50%, -50%) scale(2); _opacity_: 0; }}
This is the part that controls the animation.Animation is the only stuff besides grid that I have left to study.
Instead of using the dblclick, we could also create our own doubleClick event.But I didn’t choose to do it.Simply used the inbuilt event.

_const_ totalScreenX=_e_.clientX; _const_ totalScreenY=_e_.clientY; _const_ imageX=image.offsetLeft _const_ imageY=image.offsetTop _const_ insideImageX=totalScreenX-imageX; _const_ insideImageY=totalScreenY-imageY; This stuff is similar to the ripple effect button.

![img](https://lh5.googleusercontent.com/KJxZCdNwwBYvrQM85t98iT_MXsD8iv-_FXh3YiRffIHREoccP159aVDoeV2Gq_O140Ijz4tSgrIMTlzoHYjTNxq2fEgeOn0heiKuDZ5v3QG-DfDhIBWXUV0y7s_BzmQvKbBFYas3Kd9LEdSe6urBxzsR4JHT6CVOChGPocJ9WEH7JNQZzr4oMTbfqHe9ow)![img](https://lh5.googleusercontent.com/vfX3tiMElcHmw5IUVPlsoyjaKrMoz7wOoLSIPd6dxeCnB5rLzbeHQJQqLqAPjDOrGIT3VQUf2JAb0QwIJlUoaRRQhiv44RFDTietVSKRtc-GySDkDGVTOmiEkFQobq0F3seqO0FDkifXfGi6bBsv2Z-SKbID3SqKTZ8gMss-34cFOFTPqdOPFze4shYubA)

This is the drawing app that we are about to create. We will use the HTML canvas element. <canvas id="myCanvas" width="200" height="100"> </canvas>Using this canvas element we can create the canvas!We can also use the canvas api:[https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API ](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
So like once we set up the canvas we can like create any shape that we want inside the canvas. The code for creating the canvas is as follows:_const_ canvas=document.body.querySelector('#canvas')_const_ ctx=canvas.getContext('2d')ctx.fillStyle='green';ctx.fillRect(10, 10, 150, 100);
_function_ drawCircle(_x_,_y_){ ctx.beginPath(); ctx.arc(_x_, _y_, size , 0, Math.PI * 2, true) ctx.fillStyle=color; ctx.fill()}*function* drawLine(*x1*,*y1*,*x2*,*y2*){ ctx.beginPath(); ctx.moveTo(*x1*,*y1*); ctx.lineTo(*x2*,*y2*) ctx.strokeStyle=color; ctx.lineWidth=size; ctx.stroke()}The juice of the project
x=*e*.offsetX; y=*e\*.offsetY;Where the mouse being pressed in mousedown event.3 events being used:mousedown, mouseup, mousemove

So basically doodling is just about creating continuous circle and lines.So whenever we have mouse down event we kind of start setting the position of the mouse.
So now after mouse starts moving, we draw circle and draw line continuouslyFinally at last we also release the mouse and make x and y undefined.colorEl.addEventListener('change', (_e_) _=>_ color = _e_.target.value)
We also have change event to track the changing color.![img](https://lh4.googleusercontent.com/vZ08fjPf4MfOP8rVPT7Wiwv3Q4SnjpRc69EGVWjD8cZABpFxEHivuRC19MTh8Hmk_m7mMSzfbG1U2-jj1t6lKzkWzWGDkLQ4Gqsm_tlfigVoCVbLAM0LCFY5eM2dagWUp4nxVxvOvCGGuW5lmsh2ykBntsJPxTmp1BNoNPa8UN2PQfNmfaS6L2pmx5yYMQ)![img](https://lh3.googleusercontent.com/YqROxxYBO5d09ahgp-TuVKCCFZDlfLhjUj7DkewwjJiXDFf9j9l3cM58UXe2jhZ7a1l5_bvHz_5K4gyKTxn3HeDjm6Tb0q8GMD-dpLj6Y-xVMtXsVjyw-t2o3Ww9P_MJvLCejVOtwqujLqcMqhAI00CHyLyy_p2qNE4n1HOj7iW8xgC0s3NXxlPHd_LCiQ)

**To make sth draggable in html itself we have to add this stuff:** <div class="fill" draggable="true"></div>
This js project is heavily focused around dragging stuff.dragStart, dragEnd, dragOver, dragEnter, dragLeave, and dragDrop
These aret the events for dragging stuff.
this.className+= ' hold'
This will be pointing to the clas in which the function is called ie this here is pointing to box
Here we can either assign a class or append a class
this.className=' invisible'This is kinda inbuilt that will make it invisible literally without we adding the css

‘This’ will only point to stuff if we use function declaration
Learnt a new way to add class without using .classlistAnd that is by using this.className. We could either add or append the class using this approach.
![img](https://lh5.googleusercontent.com/g_9-_nCu1XwAmynvP1k4nU8SBPLowWZmEcKIpUoRZY1YVmvogJqOFfW2tUe3iicm6Sjbn69XC6iUOKr3EnD_inxad6RGnK7JeKHLGc9yNW1zbd6xWtUrLe8atlZFWKn69xZW1VM1_Yhqmtlbn6cg07O4wP10PA-8dk4x5_h5yoQayvJV0oCxeJzmtcP0)![img](https://lh5.googleusercontent.com/NNdyqWOPnYxwRBLKh5U2EnaulADyCqRDz8dF810h9S9cPmlj4O04m7tHBi1K6ieoyhXI_ibsuKCn6ONXlsnZftyEgGNytHbzBZz95hs3oE-nat1siWMI3RFmONwC0I06CLkPfffEmeuzpl3fxhlY9pyXYlisgxw3Db8lS1ycySIIrb4qAY_jMGD8_LxW)

_function_ dragStart(){ this.className+= ' hold' setTimeout(()_=>_ this.className=' invisible',0)}_function_ dragEnd(){ this.className='fill'}_function_ dragOver(_e_){ _e_.preventDefault()}_function_ dragEnter(_e_){ _e_.preventDefault() this.className+=' hovered'}_function_ dragLeave(){ this.className='box'} _function_ dragDrop(){ this.className='box' this.append(fill)}

Even here we have to use overlay. For overlay we have to use before pseudo selector.Initially the idea is to like have a default background image in the bg using body tag.Then with the ::before we would add a overlay as usual.Also learnt about css calc function to like calculate height and width based on the particular screen size. _left_:calc(1vw + 65px);Example of calc function/property(bg is overlay and container is place on top and pos is adj) _overflow_: hidden;To prevent anything to overflow from the container.Js of this project was quite easier.Only like id hadn’t understood the concept of what should be done in the project.Basically, we had to like set an overlay.And then kind of make the other stuff happen. The css was kinda tricky but then not very tricky. I myself didn’t think alot about how to do it. Had I thought, it should’ve popped up![img](https://lh6.googleusercontent.com/cfBrXBTCdfz2Gr2EeNnfM9sb9XQnwmuiTM-prVpi0Qep_iSnd0MxN0K36oVkQRhLWhMnFRofeqL8-_M01GYQU9HTom3qPP1v10maZJmdWUHxnRxh5jkulnSkd6RT9OK6mHiFB64Hix6iiSNS46oWZ3dW40KSII_-K8jma1pAIvYi7s1k28515My7slGx)![img](https://lh3.googleusercontent.com/Sfnm3tSJgUsOdLQ_PLn77TrkBCi8o9nyt0ch_evKg-u7uHJbMyHFFV8ddKwHXkU53OnOMWcHPUrFH-n7fsMwwWUAk--1WBlU_HkhoyB3tc4Olvv0swwN24Z2R5QtCToItfRe1LVrH_5krO056T7-XH1wmnEkQU9SHaMDzrc4lIvZJTHGwxAEvbaBqLfp) _white-space_: nowrap;Was added even in split page as we had to like not make the text break into a new line.
![img](https://lh4.googleusercontent.com/cskJXhX2KcYK-mfpPKAxsK5XP7Mo_x_Pts2TKLWzsG8-pw8yRpOFQpBePj_M87y4dAGVBmOeiOgZU6S_gw8nLgyBHcD8tuEuuQNvUah9nt_hPvp0_mEudiX2VzsetPvGW734x6EiY_Bt2oC60o1lpClPJ3hJ6pKFEhBxiXoB7oPZOz9_O9ImK-5QH9Od)![img](https://lh3.googleusercontent.com/XclyfcVHaJF_Nkkma7vhfnTFxchP2TG7dNoSNChumsBtWfLtLFY8HlCcp4PDj6cvVE8UjrBAd_XDo8QAa8x3Y0xL2tJT3_QsXLNTfFZko2MoAuINCAuTxiifuhaWYaVO6-_08owpyxlYZbB8HEtr8cdnvLxd1UuxE3pKHSASM4Hvp4uKHzS1oG0SePHs)The images in html should have been in the same div. Then same is the content in the left side. This will ensure that when we change the stuff up and down, we can use relative properties. Then instead we changing the classes here in this problem, we just change the position by transforming ie by translating it. Th _const_ height=container.clientHeightThis height has to be multiplied by index to get the correct image position. Then we transform by that.(one goes up and other goes down) right.style.transform=`translateY(-${activeSlideIndex * height}px)` left.style.transform=`translateY(${activeSlideIndex * height}px)`_transition_: opacity 0.5s linear; _opacity_: 0; _height_:0; _overflow_: hidden;
Adding transition on display wasn’t possible.Hence we set the height 0 and opacity 0. Then on that we added transition.image.active{ /_ opacity: 1; _/ _opacity_: 1; _height_: 530px;Then on active we set the opacity to 1.![img](https://lh5.googleusercontent.com/PLkGMhXUaS7kf7nA9guGl06MjlXmYjk53sFtcl17OnpzATWCaaME9OsJ-bdrgp6UDeuFnM1UkujNHY0jFJjlgXDODluBbnftiL-qdO2yCUyAULM9G8EUy8y_vQBWcjXlvvqaGvE89GgGFS-xG722H7vqMPudq3RUWIcaJMMhu8fUhQ59IfCmI0hicIbigQ)![img](https://lh4.googleusercontent.com/HUbRsMwrGQKPoiamBJJkHzqpbfhLfQlzEG-hbPbJtSzvnxexJCn3pTTsk1MMLfDgGc6pE-QwKkAIOCVjsk8x_nVzB4o2W8GLwAtpFRKFzpCecasWLCyyLDR6V3e2iD9uvvMggOtpUseuizL9aWQonzah4HzFXcLoIWFRBIqyzW8qpEyN7rSs73Mo8y1UcQ)

Working with APIs was easy. Just call the API using the fetch method.The catch here is that only the link to fetch the api can be sent.We have to add some configurations to kind of work with that fetch api.Here since we have our data in json format we have to request that the response is also sent in json format itself. For that we configure sth as: _const_ config = { headers: { Accept: 'application/json', }, } After that is done we simply use the async await syntax that we have been using since a long while. _const_ joke=await fetch(' https://icanhazdadjoke.com' ,config) _const_ actualJoke=await joke.json() jokeEl.innerHTML=actualJoke.joke
Max-width is used to like make the width of the content as expected.
_max-width_: 100%; _width_: 800px; Adding this sometimes can be done so that the inside text doesn’t take all the space. Instead it goes down. To make sure that the total width is 800px. But the elements inside it can have max-width of 100%. They can’t like overflow. They have to be within the container itself.Max-width is mostly for children and text content inside the div

Very important in a button: .btn button:active{ _transform_: scale(0.98);}

![img](https://lh6.googleusercontent.com/lThZRY5Yq5g0XM_rOzDQX2lP7IOzH3591_aS4rPF-qN7IsLQux2Hj8c0EWyVtZHqWP3ABuDMrXTkXRDBlUB6XZvxe_v_APs-NVvF1LSUKwwckuOAe0m_rxddQB1EZuUhUz02JWGd_wVoPkTh6W3CAfWLSOFpZ4Cl2iAcsqbri0LntDdm--I5R0kDh6Px)![img](https://lh5.googleusercontent.com/pAb4gMZHWjwpydxAFcNdt52Tv49v3SbOnyP4dpjPZPhMG5hUUMbr_TTnSnjO9sTqEcpAI7-EK-qquga0PHlDg7m41-dpT-Xs7HJR9AfAcNP88YdRzbxO_tdxt4y5IhP4HsoRbhDXBoyHlVzQzA3O9BKtaqAPgZzPTtNxBihihX-WRVegxQxYWFMPBkUY)
There is another alternative to fetch. That’s the axios library. It has a lot of stuff inbuilt. This ensures that we don’t have to rewrite a lot of stuff.

Github Profiles.search input::placeholder{ _color_:rebeccapurple;}Kinda repeated stuff but about placeholder
[https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps ](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps)Important resource for github app endpointsTo use axios we need to link it in the index file itself.After it’s like linked in the index file then we can use it.Like axios.get() axios.post() and so on.By default axios(‘url’) → this makes a get request.
With fetch data: _const_ config={ headers: { Accept: 'application/json', }, } _const_ prof=await fetch(`https://api.github.com/users/${*userId*}`,config) _const_ actualProfile=await prof.json();
With axios: _const_ {data:actualProfile}= await axios(APIURL+_userName_)Here {data}--> this would get only the data from the returned json.But we want to rename data to actualProfile. Hence the above syntax is used to rename a object key into sth else.
![img](https://lh5.googleusercontent.com/giHwFFVs9dC_wVXoEANPqpbtvB2sCpy6yQ2uXiSV1_0ILpjj9O2u0dSLpYrh0T17pqovVnt9c4wMIaOfmo0NgRH0jHAsu6rVRGRj_DhOR1SYdqFpbZdgdPR_flaQpJ7wrjJmsF5D6-6xKoV8SXk5haEBKVcTfyrqYDjc4t0_9EjJdm2mnm2mLKntZemxaQ)![img](https://lh6.googleusercontent.com/s-cdxLr7Z8UDb_2hm3HQL47dW6C0nrCym4nxoccalknT6yJBR5Spb-CMnfGHuvsQIUmjdHCA8nNI4a5ka09ujq2RRvMXVvPLkhKAXhNw0k_8OGkh203ys4jTP6N3WmyEOXHToDvRbNJX54JNl6iJsZpzl0TtC_FZAS3zUjg1om9wZyy95hT_DT1LE0XImw)

input::-webkit-outer-spin-button,input::-webkit-inner-spin-button { _-webkit-appearance_: none; _margin_: 0;}
This is used to remove up and down arrow.inputs.forEach((_input_,_index_)_=>_{ _input_.addEventListener('keydown',_function_(_e_){ if(_e_.key>=0 && _e_.key<=9){ inputs[*index*].value=''; setTimeout(()_=>_{ inputs[*index*+1].focus() },10) }else if(_e_.key==='Backspace'){ setTimeout(()_=>_{ inputs[*index*-1].focus() },10) } })})// everytime it’s set to empty in line4
Basically while entering a number we want of move the focus to the next input. Simple.![img](https://lh5.googleusercontent.com/OiocUW2Njbfh3YQ2QmaYCcRn5-dRDLWbKUbw0P2e2bLx_v8hAt96wcNX7vZ7KtSibgk_Lq7KL4G4bg8VeyJccPbVseWskaCmEvfTgj2ER0m8tMqbPlj2pz7dgKLuqtXzJgkxyE0ni4jlzQGXoGtKn78fH7qoXHj0aW9XmayhShbIi7cJ_NJyO8O2GatNtQ)![img](https://lh6.googleusercontent.com/9iNqexXYSdaYHEZf3u7nioRVrBqIcxerIOJYelmusmNFgZYUojQ9ALkmgtgge9JQoH3WofG5LrEYC8QV9mHkRktI-LFRHYs-dlc3LNTUFOfRhfCWHOXLjcT2abd3uJEpxbc9qcwf_OyPcitgMoMCpufHOdgrMLPVDrKJ-VdI1HjtpIQ5uMBoP-AcsD18iw)

word-wrap:break-word*String*.fromCharCodeThis is used to convert ascii values to character

return _String_.fromCharCode(Math.ceil(Math.random()*(*max* - *min*)+*min*))This function wholehandedly help return the entire random char. *const* typesArr=[{lowercase},{uppercase},{numbers},{symbols}] .filter(*item\*_=>Object_.values(_item_)[0])
Whenever like we have to check out for multiple stuff like whether this is true and also this is true, kind of create a an array of object and kind of have a filter to filter out stuffs.Here we filter if the stuff is not selected using the Object method in js._const_ funcName=_Object_.keys(_type_)[0];

**To make the password more random we can shuffle the typesArr array.**
**![img](https://lh3.googleusercontent.com/3DBf2xXZIlONZULnptlyc6kF7Pxo0mPtIxmHHH_R3bcC0vl1foGA3NXB1cqiTzjVTklBEU_9Rhk6a2K-2hFYcmBx1Alwn95WfHM2HWfn2ozVcEa1NeyF9zFW1lT6_SjEqJQe92_g2dsIIVw3BlpOlUcqCEYKbrMp1TqBPPTtim8tG23xvMeylhrBCOoe5w)\*\***![img](https://lh3.googleusercontent.com/rS1He8v3E40rbV0tVY6L75o0Y2QXvyhDOfEBmrWQRNOPRi11XD9N-ewWirrG1HO7sZTwm1AvHHb4uUThai6otTULD604jOWNeth1O_vEb_fJWCtOF4-KtavGafPYyHvGkJrX4kE9ntuASU8IpGB1PLkgUFfeAiXFve3ZdizYv5rJrgjhC5CIPkNVYVWLyA)\*\*

Unsure about writing a lot of if conditionals?Make sure to convert each one of them into a object.Each object has to have kind of similar name to which it will stand for.
Finally the object is kind of mapped to its original function name.And then we kind of fetch the stuff.

![img](https://lh6.googleusercontent.com/oJDc2pVO18YU1zU-Adpde0GxFYWpB4iOfRItY4x207zX3cWiuKyKxbEiNiDnMIZ8O1NhXjZ4KVekS0wPB1pBirYECnu8OicWl09QD3vLndPKMWlYVQbdy6Ed4e_n5D-YMGX8NXxODBRU_zaRgYSy88fJAIh-PDE_Bxu34rajmkZuCS9w7ogk8iMWXKMHYQ)![img](https://lh4.googleusercontent.com/tpol05ZT_lgewG-_45lGx5U7yAoLuWdVm2VoXXduGONxximJO6BaRUAaNWprwQbCF5qSAuvDdiSU8vKsrFw_WnTWTazDk211jsqd7vG70GJAbFlt58BsM86qXfp6jQIe5I1RuZrg-Otnqm_aUjEI9xo3JcHkBD0pzcFiJ8u-vnuqUkBB_05IlQVdIitkgA)
A project can either be only 2 from good, cheap and fast.**Whenever we have such things we could use input tag with checkbox property.** sliders.forEach((_slider_,_index_)_=>_{ _slider_.addEventListener('click',()_=>_{ _slider_.classList.toggle('active') checkOthers() }) })--> for toggling the classes.Custom Range Sliderinput[type='range']{
Way to select a attribute only and style in css
input[type='range'] + label
Way to select like a subsequent sibling.Like label here is the next sibling of input tag
input[type='range']::-webkit-slider-runnable-track{
To target the line.
input[type='range']::-webkit-slider-thumb{ To target the thumb at the middle(in moziila change change -webkit to -moz)
_const_ value=+_e_.target.valueThe +sign before is used to make the stuff into a number
Important stuff: _const_ range_width=getComputedStyle(_e_.target). getPropertyValue('width')getComputedStyle would like get the final list of all properties on the element.
getPropertyValue would then get the desired property.
Here the above would always get 300px
_const_ num_width=+range_width.substring(0,range_width.length-2)
This is to like get the width but in number. At last we also subtract by 2 to like only get the value rather than getting the string itself.
Just to map stuff we had to do a lot of calculations

![img](https://lh6.googleusercontent.com/gtB_sFSIqayNiBsgtWbo_CVggyOQPcokRTUzXGJ47Z3A60hgidzmevVrdWlVeRPxUu20_qLuXGvqWlbXA7APaLumbB8NllVA9adFTN4l5dyGsOR1fw69E1UhOBekk8KNo0qBa2fnR6jNHF9Ia2oNApF2mIEtVrtJbj2l86Rf-YMpgUWOm72hR05QUvpaeA)![img](https://lh4.googleusercontent.com/_G0a6wNCww-l-59Y5ntrRzHbVX1B69nTAmatBJnXDiLJmw5h1nUuTRgk4SchMXvrmvy1f8R8hrz6kQSRHmaWqoC1dmtZgpGgYFXHS1l6H2Q43_bYRzJ-4y4B6T7zhwsES7dbTMBdOMd3cx2_v-LpFRXBPS1_4cg_hdSPqcMCmAIff1DS3rPlVEhOiNDH3w)

_object-fit_: cover;This is to make the image kind of fit in..btn:hover{ _opacity_: 0.9;}One stuff that is not done since a long time.
**To transform means to move the element by index\* (the width of the image)**.
This project made me respect this guy more!
_function_ resetInterval(){ clearInterval(interval) interval=setInterval(run,2000)}
Calling this would reset the interval first and then only kind of run the next interval.
setInterval returns a timer and that could be cleared using the above way.Try to break the code as much as you can into functions![img](https://lh6.googleusercontent.com/oKKyxMqiKy93g-jX4qxDSXE512wgbXvZnpMbSKY22XZRHN3NQZCS4KXicoxuweddgETiSYfiR_XouFtJkIA_d5UrCqhVeRl1-y3flexNs7yhLwUTm9DQxwTkAJNSE2E4xbW2xNoYx5lJ8R1SUttTG0igkEhkZq6GkUWhlfVnYpCviMqwXeLgqVkyh_qP)![img](https://lh6.googleusercontent.com/2gwUE3OM_ctw8f8FYhCKRZfjY3YbFYQEGhPUgtrqA2HuwTK6kTARbKs0Sk71VXzGH00REwvj_TiaF9Z6ufR4cOib7RchPN6ZXvN3vm9zSYNiXxk45ryhqFBWaVJu_I480-JJIlppZaO6pzL46O-O6SOuDU5_yGP6dVqSb7HBmpYOz5_iBhgeWW1uncxL)

_flex-wrap_: wrap;Very important for wrapping the stuff within the container.boxShadow=0px 0px 2px ${color}, 0 0 10px ${color}
boxShadow could have multiple values also.
![img](https://lh3.googleusercontent.com/cdUBlUj1PDewpsdqlEB45nttFxvIUrFJYWHSi-Z2Zhq3VKQsSwixRF-YDWffpPfzqMjOxQz8Wm_3-qpUOqDMYTerYnYwiu6GQ-i9spgjj0ql6PoWLM2NUfQ_2oqBlW9aY2DofYO4EJm-XOy3HNMC5PrDbAW2V79m-eCZatYZ80Bx0r_DcugEDULMDBx0Mg)![img](https://lh3.googleusercontent.com/xU2tiXLWoXOtyd46Job2YqfOlg06-U8SPYU6RPs8dDzdUYIhsB6BxQwFwnSkRCHxw3qxunf3NK14sM7HYE24ggoYXIriupJIqzwSp_sWTP9vU6s_GoQ_Elo1Avh3mmm9jQj3MmTvBLfpEh56enV6ZL_GR6eEEJZal0B32VlP7gXhy0VD1yKEXUuStSC9Gw)Hoverboard added:Two major events were:Mouseover, and mouseoutBut i used mouseover and set the timeout of two sec to add the fading effect.

I have to understan animations more.![img](https://lh5.googleusercontent.com/2q6MuvtZw-rqTb7imvRlP5vQzwyLc8pbhd3RpLYWhlq197xX_NBKB3dlrVlqhmlQsfmSFo9vVUbp5z6h6lUv59Q_aAu0P2JIBEAKKWzmdIEhneIqSRb_M5UuMSJcUMzqO3pOTNgL781X737qDTCuqIna2QjfL1lb_nnrzmXJuAeTpk2qDiHayDwkICmq9A)
![img](https://lh6.googleusercontent.com/3U_R04yMOfs2Ra4MfXQHi_LIPmwUEClUsfwS9qviDRlwt0UjpGNWr7KxsPeGHLdmSG-t1a2KeQoFW3caeAxrVFhXY_iaeZQZQV9MD5JyKGg-6U1jjQdBytEzOIqHdL13mSPIN98dbY81RpXLDSXkKBgd3Zxw-hscZTF8z-4Q0sdpxKsHjBntWUOPb75q7Q)

I have to understand animations property more to exactly match the animations Brad uses in this project.

So yes Brad used Tailwind for the project.
password.addEventListener('input',(_e_)_=>_{We listen for the input event.
![img](https://lh3.googleusercontent.com/G2-n_rQryfsPLOteYWq76avlWU9qujnhfk3Hv8YXHicR1xje-6idrqbwzqO5ZspOa2j-35Dz6ic8s8_Cg5XSaK4KIYo6e5BclohMKgJu54F30SAkxlAxXh4oOoJOnwvHw7ShdCXlj3NUndx3Tn7pqGin1gj8_3fqey17UYUESZzyW9cXyXxbGOspQUDz)![img](https://lh5.googleusercontent.com/QnegFXATgo3n7CwHpoXgpY7Hr-wLXAfyGW4waXoUu2rFyKSo60l40-njz_ul0Th0cL-aqcr2CZDOuO3DNKbhbiBTJ5CKVb7mPIoWB9R035qF_DLpvAI-1MpjATR61VQncephL_rwAHaYr4zqBiPOvL-pnq_rrFnR8mlD4ANDS1mgoY69MRfFjnp6rd0p)After the password gets passed a certain range, then the blur value gets reduced to 0 and the image kind of loads fully.
Also the form turns green. Here if we erase the password, again it would get back to its previous form.

Feedback design AppSo basically in this project instead adding and removing classes, Brad uses event bubbling to do the same.previous.addEventListener('click',(_e_)_=>_{ if(_e_.target.classList.contains('emotion')){ _e_.target.classList.add('active') // passIndex } }) Here previous is actually a container.And clicking on the container anywhere the event would be fired.This is called event bubbling.And then we check if the target is the one that we are looking for.We could aslo check like e.target.**parentNode** and so on.Actually we have to kind of use parentNode property previous.addEventListener('click',(_e_)_=>_{ if(_e_.target.parentNode.classList.contains('emotion')){ removeAllActive() _e_.target.parentNode.classList.add('active') text=_e_.target.nextElementSibling.innerText // passIndex() }else if(_e_.target.classList.contains('emotion')){ removeAllActive() _e_.target.classList.add('active') text=_e_.target.firstChild.nextElementSibling.innerText } })![img](https://lh6.googleusercontent.com/GySmg7nUM1WBgiM64x8iSQLXvvnudYFD25gqQItg2Sc4ijQ5H9-0NSbGB9wxNQyoSqisT4-sKKChGvODaZZNdGxfcUrXFYfsWenn-vQM-CCElPKTVTWylvTFOwvTb95vQsPH2MpNdftdatEt_N1WqODBODBkgLjE8xVshgfDWj1GcKwllBW2Z1YUMAcPhg)![img](https://lh4.googleusercontent.com/HB998IroJG8_FnsRDAgiVo1OAIPhO0fiW08pk__htO9Z4W5wsOWXHvqb4DdQ3eCbGJioL7ilyVCsAhrXDClLnI4tPlLAlXrwJTZogF_SmKKxw3X0JGTKyg5Te1urVdh6A-La30ztpqCpUfMWZTkAhNiCC1RwSxbNy8nd_O-Zi9dX_Y0I9ydFc-7Nwomk8A)

Random Image Loader:_function_ setBg(_image_,_date_){ setTimeout(()_=>_{ _const_ url="url(https://picsum.photos/200/300/?random&t=" + _date_ +")"; console.log(url) _image_.style.backgroundImage=url; },10)}
This is the closure stuff that helps get random image.With this only we get random image.Because we increase the date by 1 everytime we call the above function the image will be random
for(_let_ i=0;i<IMAGES;i++){ _const_ image=document.createElement('div') _const_ date=new _Date_().getMilliseconds() setBg(image,cb) cb++; image.classList.add('image') container.appendChild(image)}

![img](https://lh5.googleusercontent.com/0nq689ow9ijs-keUV24Wl3eqNBoBP8u59Knzn3MQWrNOFnINFARgP2T9QMXuBmVH393rSByDF58S1wqz_vPiSsGVfMnAv8DFlBlFVFxGgHOrp3glPVAZOc1MA8Nxeqn4ErZ5snsg8XM6Duk3geze7pSLP3oHdyKaQj5cFiESMzXxkjTPSucvL0ccDAFZhQ)![img](https://lh3.googleusercontent.com/JJFFKGWEzwtyTqhNVjiboY5Z7NVhrhNBw1RCUSCIwhp4snfdFcUlhMYZd1m5R12EPOGkhQKlQ-U3yQU8jsERLDAYW8DZN2Cyu3L8M00fCPDoxQRZAU9-rh3tj4Vvz86jjmBty5rfKVtLDaJx0rz93a2feHDfhXh3iOYQ_Ms1knpmX1u3qOx4kvFX-Fw3xw)

![img](https://lh4.googleusercontent.com/Ok6cVC3NSGBb5kaDV_Bd9p9deqTobO4dkJcM2GVdsJZW4BzECQ0pJ0Eeq4Gmmpnbk6fbVPd8bCik5-uBfEi4ydwGcwWLQjvhJfDJkKNCcjfsk5l-rQTrgNITWl4h_abXeTLwXLnXM2g4WDFJb7gQgsIPoKvcCsCnWJnz7XFHmSHL8aWm8iBmqmSall-C)![img](https://lh4.googleusercontent.com/iRCPAYVeZnnHEC2YjKslvIO9DclC056AGgmG5GwIOM8tkIJuFmk6u42Ckac7ddeuXjz2bylRpSswvyA_oEHOO-Ccqbdz5-lTVdPgB3ophCCExsm40XH2-q_2NSkIZTciQUsy0smjQdcr7qK_O-SQZOhmgpqwq3tZchKwziqMj9Hy0kRKZPuY2G6UL3sb)

.option input[type="radio"]{ _appearance_: none; _background-color_: #fff; _margin_: 0;To remove the defaults in radio button.
Then next to the input tag we have the circle tag as span
Then we position it normally by scale to 0. When active then to 1 _transform_: scale(0);After _transform_: scale(1);

I did the correct answer based on index. But could have done like based on numbering each answer as a b c d and so on.Also we could have all questions and answer on the same object itself.
![img](https://lh4.googleusercontent.com/qwcKMrpfEgAjVfyWeEdZI-xkaTER--LcTbuk004mTviGx-ty-uaJRoFLN2FsRm8oZF_1vhcPWsZ7WmC3Q_pWkGgMDYSbW-SSXgaZOzzEhyZQ6MhYW4VmegMN39WhWPlstvDYHX_PRlq7_R_wF1ROoXR9krJj3WMjhMnuSvLfR98w8IbJ_5QUCl7lwznG)![img](https://lh4.googleusercontent.com/zqNEMPPXLISJktsy5PeqEG11-5kZpSHTKszCWDGhay_5RK5uxPFZXqtfQX8Mi0KaDuYzqyDO4vz9yJ861kVXbUVi9_U2_VDyVRVN1JDQZhAqnAKWGP7acj6xEhDDYBNKt3Q_vomx0nTbnTXoKc2tDRntwIUu_oWV2vf1l0RtUMPAbOE-_r3IngWGQqUp)

Created the netflix app I guess this was the app that gave the least amount of learning.

Notes AppWhen making something that should be fixed there itself, we use position:fixed.Other stuff in this app was kind of easy and stuff.
The interesting part of this app is working with localstorage localStorage.setItem('name','Brad')localStorage.getItem('name')localStorage.removeItem(‘name’)
We store in the form of key value pair.And we then get back that stuff with the help of specific key. localStorage.setItem('name',JSON.stringify(obj))JSON.parse(localStorage.getItem('name')) To store object in localStorage, first we convert it into JSon data using JSON.stringify()And while accessing it, we use JSON.parse()
The tricky part was storing in localstorage.Except that it was a pretty cool app.

![img](https://lh3.googleusercontent.com/2Mn4V-MLtrFfzLKwtf7ryUpzl_sMcf69HWZNyMDy_AVIztaychTqGvqcNj6uTRf8GRtzPrt3Ojr6E_3hXdZXM9mEFXrKWunr5mOVwlSY5dHimda-fGEZa_A3sKAe6fmIASshbc-1qbZC4_FfqLUtxilZr0cOLHbVsvlsXz8RQve7xCgJsOLOYS79oNenTg)![img](https://lh5.googleusercontent.com/si1E-T09a2iJmRsnGNVswsoxU9m673H-6vAHUlw9N61LC3VHri9-gLNDywqg977j_4LGW12MKc12yyFe2B3SxYJ-7vwABIU9pEBJNI5Oja6uIYed3HbCQ6vx5SPqxciDfjolJ8wq0g1mbV-IBgISlojl7rLR092r4e1pKc6byy7OAYLG3SPy6RKUMta3Gg)

Way for searching and filtering through the data
if(_user_.innerText.toLowerCase().includes(_data_)){
if(!_user_.childNodes[3].innerText.toLowerCase().includes(_data_.toLowerCase())){ _user_.classList.add('hide') }else{ _user_.classList.remove('hide') } Way to actually search stuff and get stuff done.

![img](https://lh5.googleusercontent.com/6ApKVfRuJ0i3nMYvCo0aSCEOsY_j-cSTw2Ik6293Wkgx4Ukr8OQ8By4G6_XMks3wrL72mNSOUX28ev5sTVtP8seRK35-sgi8TgQ-ngb4rgeNOkv_WFCQ0D6ZSWEDmJazUGVtN3NHxvjpNpIMtaWAgEhyo23CQ5WMHBFlZ1UQSKDrJI9W0Yl713FOa9C_1w)![img](https://lh6.googleusercontent.com/LfarTPZ6ufsPJgmcbbPa8JDzR6qMLTiDmjKSP_JrR9-7hzZKwOwI9zpw5wrKhcb8IN_RbDPtK8QdFzTyjGpm7qQQsUPg-Y02Dtx-dWsbJWU3pIx8ydKBkWZMrnKc3Eyy--Sqk0xQc_IqT-QecOdTyAXbuhf01SPIziWUNcL125mITF4_Y4muNRY1tLPSRw)

![img](https://lh6.googleusercontent.com/P-86MmAsvy2Y6qrsXgUWZetlTHv53MtbZAPVpmlOyDVJBaT3jJSD0H-OAaI4m8T3IEXF_AkHVY_EWVbSoscz94pYoVCdNNcQq1rJXVVxPipQUdgvKNGLUkYsian45FUGxukZKpAUf54jOHUVPZ9OE8shD-SgR5TytEPez6o3BuPVd0s97WcQgan3UJhfKA)![img](https://lh3.googleusercontent.com/qNGDWspC4vfzyZEVA1DD8GNofgW8i0ShreZ4TUjq2rUYGy2qUgbJFzPGCmGjr8zznrGHc4gAouWItxB273GPebi1fN8YfUXsCGDIBZun-B1C02YG3l8EvuI4iaKzSEIYlW34MdLcGldagb-wSmSLeOvJjQ7EZa67RD_lfd3WE_zyrCGG9RLabcuiaE4rDA)The learnings of yesterday’s localstorage carried along in this project also.
Implemented all of them using local storage so that we it stays even if we reload the page

(index++).toString().padStart(3,'0')
To start with like zeros we do this
::-webkit-scrollbar { /_ scrollbar-width: thin; _/ _width_:0.5rem; }::-webkit-scrollbar-track { /_ scrollbar-width: thin; _/ _background_:white;}::-webkit-scrollbar-thumb { /_ scrollbar-width: thin; _/ _background_: rgba(128, 128, 128, 0.428); _border-radius_: 10px;} ::-webkit-scrollbar-thumb:hover{ _background_: grey;} A thing that could be used in any project.
![img](https://lh4.googleusercontent.com/nQvvaXOZd5p-9J5AiPybkSF2whsU5UcK-nuCMwEPJ-aHlx4PtmzUcXujAak6m-_j9K67UxI-c2dlYs8u_2uy6L1x72V6ZDFSi5YPBALMBf0Pzsasy9Jas6Z88dfgFhCjRmIMHl-WTlb2jdslCIMwdCeI3ESxwYPvC2bi6whvd7XpldppqMPhrYAMWqZddQ)![img](https://lh5.googleusercontent.com/3EM_OtWQjvdt9c0euGL3p91St_nSmSCPLrE6SedwG7WDpbtvSxZmGZ-0Iwo_ixA_s9E53VBlIMm1_selqp89Vo0iuzSCeCqYHgxm2w0XOtpNA-krNbvrCJJbN92JvhR_gDofzdsOTh7A2M4yNsGdiIKdGYFZk_6JYTt6zEPMqHVUmG8oF0w8IJAWtb_MXw)

Movie AppIn url we can have & to add more queries paras
More than anything it was about learning more about URL and stuff
![img](https://lh4.googleusercontent.com/lKxFabsoTuFTjITRp59oWi-tMSQpcPinFc4GxF_p16aZMcfVg4OhN6vsUhIG8hSRp3sN89-2XtTB3QEISoVKEnBUMzqUy2SLWpxj8o1IHVRuNhoQewVP08S87n3qh1d575qS2BPDksZq7U4M0CxqJgpBPzJGh0eHCj3gpk0D4_kmtQYitq3BUU-ChNi4sw)![img](https://lh5.googleusercontent.com/3khg_wkUl2YuHV7XGZSnUU__jT2b6i6gWhKwvO9w2aq6v2a_fA0HYqIRoeIJ76zf2fwy77-rQ4h0VX0GSFvu4zzEIvauVy6kXqBlhOsYgDUWJ4C8_G6ySrstZS4nVTkmneLXcso_ChdhWoefrZN-6rLeFoeMnFlDMXsHAAWPoi7fkoAqNuJigv5tq2fdQg)Add & in urls to kinda add queries and stuff.

![img](https://lh6.googleusercontent.com/aftIIrrvU-JqZtsZPh3DFzeOGUVSZsBpRWpcNs8y14QVzEx0lnSOlyHqrdvc1PdWJCqbP5zxCEA1n6syHmNjxrFtYziqU-I9H6dc5ltd0gX9X74Gn6S1mp8hojZMwH7N5hMIXUkNKqB6sgEhbDDxL9q1QesAfWvvsT3w7ql0fYjsFOS_z20Hf7Bvk7Oqtg)![img](https://lh4.googleusercontent.com/xqYO1NVIkz6CwNmBuY9ak_HI2jQtm-1gVh2nqeOHrIOrxNqAKZLDBAyd4AJUEHZyVu-LE6FJJbpyw05CJXUOgreZJxJhBCjOq7sSgy_oMQo4_HA_lqJa2WRWtKkNqcqeyukc7xOagBwQ0TNu7EptVQ7AHpNKj4wZdshWJA_1KpkyYhQe_l1JuVOX7-9LVQ)

Let’s get done with insect catch game:So we are defining screen.So when we scroll the page we can move to next page.Generally when we have to list out some stuff we generally use li and ul tag.

_margin-top_: -200vh;With this margin functionality we could move the screen up and down.
Like nothing was kind of new in terms of css and HTML up until now.
_btn_.querySelector('img')
We could add query selector on intermediate stuff as well.
_const_ source=img.getAttribute('src') _const_ alt=img.getAttribute('alt')getAttribute and setAttribute are 2 imp stuff![img](https://lh3.googleusercontent.com/8s6cbKYsjWpndw3ZZGELTjYkdqN-nxReYAK9Rr4Fw11ERPdVEmTpMXbw4E79EiGiuXHeoJ6Ub9GbyBcxszsyHknBH3vKq86Z9mt5uGaMsiu_MO0aclCHq1dzvOlsjKc7tYOjBHigTydBtD2H9zPkm8Rl-Nzkc3W3O7iSdCmSTg6_TVVLdEYK_mcj9xgUtg)![img](https://lh4.googleusercontent.com/02eZlDDaZIIk9mySxu73QDg12XSl31UsO8sPIU1kgEDSXRsq6uYq6MoJa02AIW1ukut6_dx0duvKSEaJf0T3dLF2jaz9o2NoSz_grqC5x4tw7RHJaiouZDF_w5oorJG_f3EL91jCEQKpNKK5PFVzLdZXKgcdyC_QlqhaE9VcKFs4UU_OqB2Gvo_IIQ59Hg)
