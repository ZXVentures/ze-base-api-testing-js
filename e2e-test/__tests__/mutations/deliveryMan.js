module.exports={
    login:
      `mutation login($password: String, $email: String, $document: String, $phoneNumber: String){
        login(email: $email, password: $password, document: $document phoneNumber: $phoneNumber){
          token
          refreshToken
          user {
            email
            id
          }
          messages {
            category
            target
            key
            args
            message
          }
        }
      }
      `,
    createDeliveryMan:
      `
      mutation createDeliverymanFullService($input: DeliverymanFullServiceInput!){
        createDeliverymanFullService(input: $input){
            token
            refreshToken
            deliveryman{
                id
                email
                firstName
                lastName
                birthdate
                document
                phoneNumber
                deleted
                role
                createdDate
            }
            messages {
                category
                target
                key
                args
                message
            }
        }
    }
      `,
      sendPhoneVerificationCode:
      `
      mutation sendPhoneVerificationCode($phoneNumber: String) {
        sendPhoneVerificationCode(phoneNumber: $phoneNumber){
          messages {
            category
            target
            key
            args
            message
          }
        }
      }
      `,
      changePassword:
      `
      mutation changePassword($currentPassword: String!, $newPassword: String!){ 
        changePassword(currentPassword: $currentPassword, newPassword: $newPassword){
            ok
            messages {
                 category
                 target
                 key
                 args
                 message
            }
        }
     }
      `
}