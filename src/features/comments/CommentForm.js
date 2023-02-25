import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from "formik";


const CommentForm = ({campsiteId}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText
        };

        console.log(comment);


// POSSIBLE MISTAKE LIKE HERE - CORRECT IF IT DOESN'T WORK TO !modalOpen

        setModalOpen(false);

        const initialValues = {
            rating:'undefined',
            author:[],
            commentText:[], 
        }
        
    }
    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues>

                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )

}

export default CommentForm;