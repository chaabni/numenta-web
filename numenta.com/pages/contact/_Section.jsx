// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import React from 'react'

import Anchor from '../../components/Anchor'
import Button from '../../components/Button'
import DefineItem from '../../components/DefineItem'
import DefineList from '../../components/DefineList'
import DefineTitle from '../../components/DefineTitle'
import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import FormRow from '../../components/FormRow'
import FormTextArea from '../../components/FormTextArea'
import Image from '../../components/Image'
import ImageLink from '../../components/ImageLink'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import SocialMedia from '../../components/SocialMedia'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import Table from '../../components/Table'
import TableBody from '../../components/TableBody'
import TableCell from '../../components/TableCell'
import TableRow from '../../components/TableRow'
import TextLink from '../../components/TextLink'

import ImageMap from './images/map.png'
import styles from './index.css'

const fields = {  // wufoo ids
  first: 'Field861',
  last: 'Field862',
  title: 'Field757',
  company: 'Field114',
  email: 'Field9',
  phone: 'Field244',
  content: 'Field858',
  idstamp: 'idstamp',
}


/**
 *
 */
const SectionContact = (props, {config}) => {
  const {contact, links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Want to get in contact with us? Send us a message by filling out
            this form or use the appropriate email.
          </Paragraph>
          <Form
            action="https://numenta.wufoo.com/forms/kcp312j1iehcj2/#public"
            name="form9"
          >
            <FormRow>
              <FormLabel htmlFor={fields.first}>First Name</FormLabel>
              <FormInput
                name={fields.first}
                stretch="medium"
                type="text"
                placeholder="Firstname"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.last}>Last Name</FormLabel>
              <FormInput
                name={fields.last}
                type="text"
                placeholder="Lastname"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.title}>Job Title</FormLabel>
              <FormInput
                name={fields.title}
                placeholder="Role"
                stretch="medium"
                type="text"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.company}>Company</FormLabel>
              <FormInput
                name={fields.company}
                placeholder="Company"
                stretch="small"
                type="text"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.email}>Email</FormLabel>
              <FormInput
                name={fields.email}
                placeholder="name@company.com"
                stretch="medium"
                type="email"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.phone}>Phone</FormLabel>
              <FormInput
                name={fields.phone}
                placeholder="+1-555-555-5555"
                stretch="small"
                type="tel"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.content}>How can we help?</FormLabel>
              <FormTextArea
                name={fields.content}
                placeholder="Comment here."
              />
            </FormRow>
            <FormRow>
              <FormLabel>&nbsp;</FormLabel>
              <Button theme="primary" type="submit">Send</Button>
            </FormRow>
            <FormInput
              name={fields.idstamp}
              type="hidden"
              value="hwFr746QGPGzzbeOEbIcrXFmpScleWw61VTW0cdscY4="
            />
          </Form>
        </div>
        <div className={styles.aside}>
          <div className={styles.emails}>
            <DefineList direction="vertical">
              <DefineTitle>
                Product Support:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.support}`}>
                  {contact.email.support}
                </TextLink>
              </DefineItem>
              <DefineTitle>
                Press Contact:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.press}`}>
                  {contact.email.press}
                </TextLink>
              </DefineItem>
              <DefineTitle>
                Licensing Inquiries:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.sales}`}>
                  {contact.email.sales}
                </TextLink>
              </DefineItem>
            </DefineList>
          </div>
        </div>
      </div>

      <Anchor name="office" />
      <SubTitle>Office</SubTitle>
      <div className={styles.columns}>
        <div className={styles.asideCenter}>
          <ImageLink to={links.out.map}>
            <Image
              alt="Map to Numenta Office"
              shadow={false}
              respond="mw"
              src={ImageMap}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Strong>Phone</Strong>
                </TableCell>
                <TableCell>
                  <TextLink to={`tel:${contact.phone.tel}`}>
                    {contact.phone.tel}
                  </TextLink>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Fax</Strong>
                </TableCell>
                <TableCell>{contact.phone.fax}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Address</Strong>
                </TableCell>
                <TableCell>
                  <address className={styles.address}>
                    791 Middlefield Road <br />
                    Redwood City, CA 94063
                  </address>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Map</Strong>
                </TableCell>
                <TableCell>
                  <TextLink to={links.out.map}>
                    Google Maps Link
                  </TextLink>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className={styles.office}>
            <List marker="disc">
              <ListItem>
                Reception is on the second floor on the left
              </ListItem>
              <ListItem>
                Street parking is available on surrounding streets
              </ListItem>
              <ListItem>
                The Jefferson Avenue Garage is the nearest parking structure
              </ListItem>
            </List>
          </div>

          <Anchor name="follow" />
          <SubTitle level={3}>Follow</SubTitle>
          <SocialMedia />
        </div>
      </div>
    </article>
  )
}

SectionContact.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionContact
