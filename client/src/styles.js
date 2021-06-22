import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        backgroundColor: 'transparent'
    },
    heading: {
        color: '#f06292',
        fontWeight: '800',
        fontStyle: 'italic'
    }
}))