import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Meta {
    metaYaml {
      title
      tagline
      description
      url
      email
      social {
        Email
        Twitter
        GitHub
        Linkedin
      }
      availability {
        status
        available
        unavailable
      }
      gpg
      addressbook
      typekitID
      allowedHosts
    }
  }
`

export const useMeta = () => {
  const { metaYaml } = useStaticQuery(query)
  return metaYaml
}
