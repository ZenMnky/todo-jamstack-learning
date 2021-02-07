# Notes

### Access the virtual machine (VM) localhost on host OS
- In your hypervisor (I'm using VirtualBox), select your VM, and adjust the network settings `Attached to:` option to `Bridged`
- Find your VM's ip. In the VM terminal, run `hostname -I`
- run the VM server `npm run dev`
- in the host, go that that ip you found, using whatever port you have configured. For example: `http://10.0.0.90:3000/`

### Tailwind
- What is? Utility based CSS framework
- [Install Tailwind CSS With Next.js](https://tailwindcss.com/docs/guides/nextjs)