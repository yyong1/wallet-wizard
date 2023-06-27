var SPApp = {
    handleSectionVisibility : function(spotlight_element){
        /**
         * All the elements which do not have to be in spotlight are hidden,
         * only the active section is visible
         */
        elements = ["#name-list", ];
        $(elements.join(", ")).attr('hidden', true);
        
        $(spotlight_element).attr('hidden',false);
        $(spotlight_element).html("");
    }
}