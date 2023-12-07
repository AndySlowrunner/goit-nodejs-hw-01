import * as contactService from './contacts.js';
import yargs from 'yargs';

const {argv} = yargs(process.argv.slice(2));

async function invokeAction({ action, id, ...data }) {
    switch (action) {
        case 'list':
            const allContacts = await contactService.listContacts();
            console.log(allContacts);
            break;

        case 'get':
            const oneContact = await contactService.getContactById(id);
            console.log(oneContact);
            break;

        case 'add':
            const newContact = await contactService.addContact(data);
            console.log(newContact);
            break;

        case 'remove':
            const removeContact = await contactService.removeContact(id);
            console.log(removeContact);
            break;

        default:
        console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);