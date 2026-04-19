# node-serverless-app
npx serverless remove

TypeScript is a superset of JavaScript created by Microsoft.

npx is a command-line tool that comes with npm (since npm v5.2.0).

It lets you run Node.js packages without installing them globally.


sls --version
#####################################################################


Serverless Deployment Command
| Tool / Command                   | Purpose                                    | Required?   | Usage / Version Check                         |
| -------------------------------- | ------------------------------------------ | ----------- | --------------------------------------------- |
| **Node.js**                      | JavaScript runtime                         | ✅ Yes       | `node -v`                                     |
| **npm**                          | Package manager (comes with Node.js)       | ✅ Yes       | `npm -v`                                      |
| **npx**                          | Runs CLI tools from local `node_modules`   | ✅ Yes       | `npx -v`                                      |
| **Serverless Framework (`sls`)** | Deploy & manage AWS Lambda functions       | ✅ Yes       | `sls --version` or `npx serverless --version` |
| **TypeScript**                   | Compile `.ts` files to `.js`               | ✅ Yes       | `npx tsc -v`                                  |
| **Deploy Command**               | Deploys your Node.js app to AWS Lambda     | ✅ Yes       | `npx serverless deploy` or `sls deploy`       |
| **Offline Command**              | Runs Lambda/API locally for testing        | 🔄 Optional | `npx serverless offline`                      |
| **Remove Command**               | Removes deployed services from AWS         | 🔄 Optional | `npx serverless remove`                       |
| **Audit & Fix Dependencies**     | Fixes security issues or outdated packages | 🔄 Optional | `npm audit` and `npm audit fix`               |
############################################################################################
| File / Folder           | Purpose                                                                    | Required?   | Notes                                                                |
| ----------------------- | -------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| **`handler.ts`**        | Lambda function entry point written in TypeScript                          | ✅ Yes       | Exports functions (e.g. `hello`) that AWS Lambda will invoke         |
| **`serverless.yml`**    | Main config file for the Serverless Framework                              | ✅ Yes       | Defines service name, AWS settings, functions, events, plugins, etc. |
| **`tsconfig.json`**     | TypeScript compiler settings                                               | ✅ Yes       | Controls how TypeScript compiles your code                           |
| **`package.json`**      | Project metadata & npm dependencies                                        | ✅ Yes       | Used by npm to track packages and scripts                            |
| **`node_modules/`**     | Folder containing all installed npm packages                               | ✅ Yes       | Auto-generated when you run `npm install`                            |
| **`.serverless/`**      | Serverless build artifacts (auto-generated on deploy)                      | 🔄 Optional | Created by Serverless during `deploy`, used for packaging            |
| **`package-lock.json`** | Locked versions of installed npm packages                                  | 🔄 Optional | Ensures consistent installs across environments                      |
| **`.gitignore`**        | Lists files/folders to exclude from version control (like `node_modules/`) | 🔄 Optional | Helps keep your Git repo clean                                       |
| **`.env`**              | Stores environment variables (if used)                                     | 🔄 Optional | Not used by default — optional for secrets or config                 |



 cd frontend
npx serve .
####
webpack.config.js

This is a build/bundling config for the serverless-webpack plugin.

It tells Webpack how to compile/package your code before deployment.
### 
jq is a command-line JSON processor
#############################
install agent in azure 
Step 1: Install the required dependencies
sudo yum install -y libicu
sudo dnf install -y libicu
##############################

✅ 1. Create a New User
useradd -m -s /bin/bash azureagent
passwd azureagent
usermod -aG wheel azureagent
%wheel  ALL=(ALL)       ALL
%wheel  ALL=(ALL)       ALL


######
aws s3 sync ./s3-frontend s3://frontend-bucketasw --delete

t syncs the contents of your local folder (./s3-frontend) to the S3 bucket (frontend-bucketasw), and removes anything from the bucket that no longer exists locally.


######
validation
aws cloudfront create-invalidation \
  --distribution-id E142RQOTX7CW7Z \
  --paths "/index.html"
######
1. Node.js
Core Tools You Need on the Build Agent (e.g., ADO Pipeline Runner)
Yes, you must install Node.js. This will also install npm automatically (Node Package Manager).

2. npm

3. serverless Framework (sls)
You can install globally (npm install -g serverless) or locally and run with npx.
It’s the core tool to deploy your app to Lambda.
4. npx
#####
sudo dnf module reset -y nodejs
sudo dnf module enable -y nodejs:18
sudo dnf module reset -y nodejs always resets the module state back to neutral, regardless of what’s installed at the moment.
dnf module list nodejs

### Things to Know 
1. We can use node -v 18 with runtime 22 but it's not recommended

2. Best Practice Match your local development version with your runtime version



sudo rm -rf /usr/lib/node_modules
sudo rm -rf /usr/local/lib/node_modules


git checkout -b dev ado/dev