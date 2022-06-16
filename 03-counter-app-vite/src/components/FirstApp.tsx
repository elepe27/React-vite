import { props } from "../Interfaces/propsSaludoApp";
import PropTypes from 'prop-types';

/**Componente principal
 * @param arg:object
 */
export const FirstApp = ( {title, subtitle, edad , name} : props ) => {

    return (
        <>
            <h1 data-testid='test-title'>{ title }</h1>
            {/* <code> { JSON.stringify( nombre, 0, null, 4 ) } </code> */}
            <h2>{ subtitle }</h2>
            <h2>{ edad }</h2>
            <h2>{ name }</h2>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    edad: 28,
    name: 'Esteban Lepe',
    title: 'No hay Titulo',
}