import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Stack, Text, Box, Card, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

function FormData() {
  type Inputs = {
    firstName: string;
    lastName: string;
    passWords: string;
    email: string;
    tel: number;
    map: Location;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [formData, setFormData] = useState<Inputs | null>(null);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Flex align="center" justify="center">
            <Card
              maxW="md"
              style={{
                position: "relative",
                background: "white",

                margin: "1rem",
                padding: "1rem",
                fontFamily: "Arial",
              }}
            >
              <Stack spacing={2}>
                <Text fontSize="50" textAlign={["left", "center"]}>
                  Form
                </Text>
                <Text textAlign={"left"}>Firstname</Text>
                <Input
                  type="text"
                  placeholder="firstname"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span>
                    <Text color="red">Firstname is required</Text>
                  </span>
                )}

                <Text>Lastname</Text>
                <Input
                  type="text"
                  placeholder="lastname"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span>
                    <Text color="red">Lastname is required</Text>
                  </span>
                )}

                <Text>Password</Text>
                <Input
                  type="text"
                  placeholder="Passwords"
                  {...register("passWords", { required: true })}
                />
                {errors.passWords && (
                  <span>
                    <Text color="red">Password is required</Text>
                  </span>
                )}

                <Text>Tel</Text>
                <Input
                  type="tel"
                  placeholder="tel"
                  {...register("tel", { required: true })}
                />
                {errors.tel && (
                  <span>
                    <Text color="red">Tel is required</Text>
                  </span>
                )}

                <Text>Email</Text>
                <Input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <span>
                    <Text color="red">Email is required</Text>
                  </span>
                )}
              </Stack>

              <br />
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </Card>
          </Flex>
        </div>
      </form>
      <Flex align="center" justify="center">
        <Card
          maxW="sm"
          style={{
            position: "relative",
            background: "white",
            borderRadius: "5px",
            margin: "1rem",
            padding: "2rem",
            fontFamily: "Arial",
          }}
        >
          <Text fontSize="lg">Display Data:</Text>
          {formData && (
            <Box mt="5" p="5" bg="white" borderWidth="1px" borderRadius="lg">
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Box>
          )}
        </Card>
      </Flex>
    </>
  );
}

export default FormData;
