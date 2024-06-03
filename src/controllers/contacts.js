import { getAllContacts } from '../services/contacts.js';
import {  getContactById } from '../services/contactById.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 'success',
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

export const getContact = async (req, res) => {
    const { contactId } = req.params;
    try{
        const contact = await getContactById(contactId);
        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact with id  ${contactId} not found',
            });
        }
        res.status(200).json({
            status: 'success',
            message: `Successfully found contact with id ${contactId}!`,
             data: contact,
        });
    }catch (error){
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};