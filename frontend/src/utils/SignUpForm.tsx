// Render Prop
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useForm } from "react-hook-form";

type SignUpFormProps = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    bio: string,
    location: string,
    birthdate: Date,
    gender: number
};

function SignUpForm() {
    const { handleSubmit, errors, register } = useForm<SignUpFormProps>();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    function onSubmit(values: SignUpFormProps) {
        setIsSubmitting(true);

        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setIsSubmitting(false);
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
                <FormControl isInvalid={errors.firstName?.message !== undefined}>
                    <FormLabel htmlFor="firstName">Nombre</FormLabel>
                    <Input
                        name="firstName"
                        placeholder="Juancito"
                        ref={register({ required: true })}
                    />
                    {errors.firstName && errors.firstName.type === "required" && (
                        <FormErrorMessage>
                            {errors.firstName && errors.firstName.message}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.lastName?.message !== undefined}>
                    <FormLabel htmlFor="lastName">Apellido</FormLabel>
                    <Input
                        name="lastName"
                        placeholder="Perez"
                        ref={register({ required: true })}
                    />
                    {errors.lastName && errors.lastName.type === "required" && (
                        <FormErrorMessage>
                            {errors.lastName && errors.lastName.message}
                        </FormErrorMessage>
                    )}
                </FormControl>


                <FormControl isInvalid={errors.username?.message !== undefined}>
                    <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
                    <Input
                        name="username"
                        placeholder="juancito.perez19"
                        ref={register({ required: true })}
                    />
                    {errors.username && errors.username.type === "required" && (
                        <FormErrorMessage>
                            {errors.username && errors.username.message}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.email?.message !== undefined}>
                    <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        placeholder="juancito_perez@gmail.com"
                        ref={register({ required: true })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <FormErrorMessage>
                            {errors.email && errors.email.message}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.bio?.message !== undefined}>
                    <FormLabel htmlFor="bio">Biografía</FormLabel>
                    <Textarea
                        name="bio"
                        placeholder="Programador. Amante de los gatos. He/him."
                        ref={register({ required: true })}
                    />
                    {errors.bio && errors.bio.type === "required" && (
                        <FormErrorMessage>
                            {errors.bio && errors.bio.message}
                        </FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={errors.gender?.message !== undefined}>
                    <FormLabel htmlFor="gender">Género</FormLabel>
                    <Select name="gender" placeholder="Seleccione su género" ref={register({ required: true })}>
                        <option value={1}>Masculino</option>
                        <option value={2}>Femenino</option>
                    </Select>
                    {errors.gender && errors.gender.type === "required" && (
                        <FormErrorMessage>
                            {errors.gender && errors.gender.message}
                        </FormErrorMessage>
                    )}
                </FormControl>
                <Button mt={4} isLoading={isSubmitting} type="submit">
                    Enviar
                </Button>
            </VStack>
        </form>
    );
}
export default SignUpForm;
