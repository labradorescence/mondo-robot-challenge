import React from 'react';

class AddPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            images: [],
            isLoading: false,
            error: null,
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleClick(event) {
        event.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleSubmit(event){
        event.preventDefault();
    
        this.setState({ isLoading: true });
        let path = this.props.path;
    
        fetch(`http://.../gallery/${path}`, {
            method: 'POST',
            headers: {'Content-Type':'multipart/form-data'},
            body: new FormData(document.getElementById('addPhoto'))
        })
            .then((response) => response.json())
            .then((data)=>{
                this.setState({images: data.images, isLoading: false});
                this.props.updateImages(data.images);
            })
            .catch(error => this.setState({ error, isLoading: false}));
    }
    
    render() {
        return (
            <Card className="add">
                <div className="link" onClick={this.toggle}>
                    <CardBody>
                        <CardTitle>Add picture</CardTitle>
                    </CardBody>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className="modal-header">
                        ...
                    </div>
                    <ModalBody>
                        <form className="addPhotoForm" id="addPhoto" onSubmit={this.handleSubmit}>
                            <input type="file" required />
                            <Button color="success" type="Submit">Add</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Card>
        );
    }
    }