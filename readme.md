Different ways to authenticate
 -- Hashing
 -- Encryption
 -- JSON Web Token(JWT)

Hashing 
 -- Coverting the simple string into some complicated jibris string such that any time, the same string(simple one) is sent into the hash function, will be converted into the same jibris string, this is called HASHING.
 -- Hashing is one way
 -- Given the output, no one can find out the input
 -- Changes the input a little bit, changes the output by a lot.

Encryption
 -- Encryption is two way.
 -- A string is encrypted using a password.
 -- String can be decrypted using the same password.

JWT
 -- Its neither of encryption or hashing.
   --> Its technically a (DIGITAL SIGNATURE).
 -- Anyone can see the original output given the signature.
 -- Signature can be verified only using the password.