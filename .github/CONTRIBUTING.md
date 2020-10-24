## Contributing

- Fork it ( https://github.com/fauzan121002/encryptlab/fork )
- Create your feature branch (`git checkout -b my-new-feature`)
- Add changes (`git add changed-path`)
- Commit your changes (`git commit -m 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create a new Pull Request

## Note

### New Encryption
If you want to add new encryption, please create new encryption route file to implement the module located in `routes` and create the module located in `src` for the tools, also the test file located in `tests` to test your module, then implement it in the example code also the tools form located in `views/encryption`.

You can see current available working encryption with the route, the module, the test, and the view for example.

### CSS
If you want to update the tailwind.css file located in `public` , don't forget to run `npm run build:css` and try `npm run watch` to use nodemon to see changes in the webpage.

### Important!
Please test your code first before create a new pull request.