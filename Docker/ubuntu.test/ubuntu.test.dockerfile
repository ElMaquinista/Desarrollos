FROM ubuntu:23.10

CMD ["/bin/bash"]

EXPOSE 80
EXPOSE 8080
EXPOSE 443

RUN  apt-get update -y
RUN apt-get install nano -y
RUN apt install nginx -y
RUN apt-get -y install systemctl 

RUN systemctl start nginx


#CMD ["/bin/bash"]

#ADD file:63d5ab3ef0aab308c0e71cb67292c5467f60deafa9b0418cbb220affcd078444 in /

#LABEL org.opencontainers.image.version=22.04

#LABEL org.opencontainers.image.ref.name=ubuntu

#ARG LAUNCHPAD_BUILD_ARCH

#ARG RELEASE

#ENTRYPOINT ["/bin/bash", "/home/docker/entrypoint.sh"]
#CMD ["Docker"]

