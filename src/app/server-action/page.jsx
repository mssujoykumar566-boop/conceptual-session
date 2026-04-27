
// "use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import {  getPosts } from '@/database/postdb';
import { handlePostAction } from "@/actions/postAction";



const ServerActionPage = () => {
   
    const posts =  getPosts();
 
    return (
        <div>
            <h2>Server Action</h2>

            <div className='grid grid-cols-3 gap-3'>
                {
                    posts.map(post => <div className='border p-5 shadow-lg rounded-lg mt-5' key={post.id}>
                        <h3 className='font-bold text-xl'>{post.title}</h3>
                        <p>{post.description}</p>
                    </div>)
                }
            </div>

            <Form action={handlePostAction} className="w-full max-w-96 mx-auto mt-10 border rounded-lg p-3">
      <Fieldset>
        <Fieldset.Legend>Add post</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="title"
            type="text"
         
          >
            <Label>Title</Label>
            <Input placeholder="Enter your title" />
            <FieldError />
          </TextField>
          <TextField isRequired name="description" type="text">
            <Label>Description</Label>
            <Input placeholder="Enter your description" />
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Save changes
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default ServerActionPage;