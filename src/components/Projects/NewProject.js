import React from 'react';

import Form from '../Common/Form';
import TextInput from '../Common/TextInput';

const NewProject = () => {
  return (
    <div className='add-project'>
      <Form>
        <h2 className='recent-title'>add new project</h2>
        <TextInput
          name='project_name'
          label='project name'
          placeholder='project name'
          value=''
          onChange={() => {}}
          error=''
        />
        <TextInput
          name='description'
          label='description'
          value=''
          onChange={() => {}}
          error=''
        />
        <TextInput
          name='stack'
          label='stack'
          value=''
          onChange={() => {}}
          error=''
        />
        <button className='btn'>Add</button>
      </Form>
    </div>
  );
};

export default NewProject;
