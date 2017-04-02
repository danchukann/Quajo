function validate_form ( )
{
  valid = true;

        if ( document.contact_form.name.value == "" )
        {
                alert ( "Input your name, please" );
                valid = false;
        }

        if ( document.contact_form.email.value == "" )
        {
                alert ( "Input your email, please" );
                valid = false;
        }

        if ( document.contact_form.address1.value == "" )
        {
                alert ( "Input your address1, please" );
                valid = false;
        }

        if ( document.contact_form.address2.value == "" )
        {
                alert ( "Input your address2, please" );
                valid = false;
        }

        if ( document.contact_form.zipcode.value == "" )
        {
                alert ( "Input your zipcode, please" );
                valid = false;
        }

        if ( document.contact_form.region.selectedIndex == 0 )
        {
                alert ( "Input your region, please" );
                valid = false;
        }

        return valid;
}