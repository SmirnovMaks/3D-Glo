import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import formValidator from "./modules/form-validator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer('9 july 2022 20:54');
menu();
modal();
formValidator();
tabs();
slider();
calc(100);
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]

});
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});